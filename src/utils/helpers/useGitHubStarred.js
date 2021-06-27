import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncGetStarred } from '../../store/ducks/starred';

const useGitHubStarred = (user) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(asyncGetStarred(user));
    };
    fetchData();
  }, []);
};

export default useGitHubStarred;
