import React, { useEffect } from 'react';
import './team.scss';
import AvatarCard from '../avatarCard';

import { useSelector, useDispatch } from 'react-redux';
import { getTeamThunk } from '../../redux/thunks/getTeamThunk';

const Team = () => {
  const loading = useSelector(state => state.loading.isLoading);
  const team = useSelector(state => state.team.team);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeamThunk());
  }, [dispatch]);

  return (
    <div className="team">
      {team.map(item => {
        return (
          <AvatarCard
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            position={item.position}
            imgUrl={item.imgUrl}
            loading={loading}
          />
        );
      })}
    </div>
  );
};

export default Team;
