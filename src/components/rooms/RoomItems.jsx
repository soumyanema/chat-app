import React from 'react';
import Timeago from 'timeago-react';
import ProfileAvatar from '../dashboard/ProfileAvatar';

const RoomItems = ({ room }) => {
  const { createdAt, name, lastMessage } = room;
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">{name}</h3>
        <Timeago
          datetime={
            lastMessage ? new Date(lastMessage.createdAt) : new Date(createdAt)
          }
          className="text-black-45 font-normal"
        />
      </div>
      <div className="d-flex align-items-center text-black-70">
        {lastMessage ? (
          <>
            <div className="d-flex align-items-center">
              <ProfileAvatar
                src={lastMessage.author.avatar}
                name={lastMessage.author.name}
                size="sm"
              />
            </div>
            <div className="ml-2 text-disappear">
              <div className="italic">{lastMessage.author.name}</div>
              <span>{lastMessage.text || lastMessage.file.name}</span>
            </div>
          </>
        ) : (
          <span>No messages yet...</span>
        )}
      </div>
    </div>
  );
};

export default RoomItems;
