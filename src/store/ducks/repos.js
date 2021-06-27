import axios from 'axios';

const Types = {
  GET_REPOS: 'repos/GET_REPOS',
  GET_REPOS_SUCCESS: 'repos/GET_REPOS_SUCCESS',
  GET_REPOS_ERROR: 'repos/GET_REPOS_ERROR',
};

const initialState = {
  repos: null,
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_REPOS:
      return { ...state, isLoading: true, repos: null, error: null };
    case Types.GET_REPOS_SUCCESS:
      return { ...state, isLoading: false, repos: action.payload.repos };
    case Types.GET_REPOS_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

const getRepos = () => ({
  type: Types.GET_REPOS,
});

const getReposSuccess = (repos) => ({
  type: Types.GET_REPOS_SUCCESS,
  payload: { repos },
});

const getReposError = (error) => ({
  type: Types.GET_REPOS_ERROR,
  payload: { error },
});

const asyncGetRepos = (user) => {
  return (dispatch) => {
    dispatch(getRepos());
    return axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((res) => dispatch(getReposSuccess(res.data)))
      .catch((error) => dispatch(getReposError(error.response.data)));
  };
};

export { asyncGetRepos };
export default reducer;
