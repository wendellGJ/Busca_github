import axios from 'axios';

const Types = {
  GET_STARRED: 'starred/GET_STARRED',
  GET_STARRED_SUCCESS: 'starred/GET_STARRED_SUCCESS',
  GET_STARRED_ERROR: 'starred/GET_STARRED_ERROR',
};

const initialState = {
  starred: null,
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_STARRED:
      return { ...state, isLoading: true, starred: null, error: null };
    case Types.GET_STARRED_SUCCESS:
      return { ...state, isLoading: false, starred: action.payload.starred };
    case Types.GET_STARRED_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

const getStarred = () => ({
  type: Types.GET_STARRED,
});

const getStarredSuccess = (starred) => ({
  type: Types.GET_STARRED_SUCCESS,
  payload: { starred },
});

const getStarredError = (error) => ({
  type: Types.GET_STARRED_ERROR,
  payload: { error },
});

const asyncGetStarred = (user) => {
  return (dispatch) => {
    dispatch(getStarred());
    return axios
      .get(`https://api.github.com/users/${user}/starred`)
      .then((res) => dispatch(getStarredSuccess(res.data)))
      .catch((error) => dispatch(getStarredError(error.response.data)));
  };
};

export { asyncGetStarred };
export default reducer;
