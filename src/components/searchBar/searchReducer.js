const defaultState = {
  input: '',
  history: [],
  cityInfo: {},
  error: null,
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;
  const history = state.history;

  switch (type) {
    case 'UPDATE_SEARCH_INPUT': {
      return {
        ...state,
        input: payload.input,
      };
    }
    case 'SEARCH_CITY_PENDING': {
      return {
        ...state,
        input: '',
      };
    }
    case 'SEARCH_CITY_FULFILLED': {
      const today = new Date();
      let days = today.getDay();
      let months = today.getMonth();
      const years = today.getFullYear();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();
      if (days < 10) {
        days = `0${days}`;
      }
      if (months < 10) {
        months = `0${months}`;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      const date = `${months}/${days}/${years}`;
      const time = `${hours}:${minutes}:${seconds}`;
      return {
        ...state,
        history: history.concat([{
          city: payload.data.name,
          date,
          time,
        }]),
        cityInfo: payload.data,
        error: null,
      };
    }
    case 'SEARCH_CITY_REJECTED': {
      return {
        ...state,
        error: {
          status: payload.response.status,
          message: payload.response.data.message,
        }
      };
    }
    default: {
      return state;
    }
  }
}
