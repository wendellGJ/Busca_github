import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncGetRepos } from '../../store/ducks/repos';

const useGitHubRepos = (user) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(asyncGetRepos(user));
    };
    fetchData();
  }, []);
};

export default useGitHubRepos;
