import React from 'react';
import Timeago from 'timeago-react';

const RoomItems = ({ room }) => {
  const { createdAt, name } = room;
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">{name}</h3>
        <Timeago
          datetime={new Date(createdAt)}
          className="text-black-45 font-normal"
        />
      </div>
      <div className="d-flex align-items-center text-black-70">
        <span>No messages yet...</span>
      </div>
    </div>
  );
};

export default RoomItems;
