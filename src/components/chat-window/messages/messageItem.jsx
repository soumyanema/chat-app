import React from 'react';
import Timeago from 'timeago-react';
import ProfileAvatar from '../../dashboard/ProfileAvatar';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';
import '../../../styles/utility.scss';

const messageItem = ({ message }) => {
  const { author, createdAt, text } = message;
  return (
    <li className="padded mb-1">
      <div className="d-flex align-items-center font-bolder mb-1">
        <ProfileAvatar
          src={author.avatar}
          name={author.name}
          className="ml-1"
          size="xs"
        />
        <ProfileInfoBtnModal
          profile={author}
          appearance="link"
          className="p-0 ml-1 text-black"
        />
        <Timeago
          datetime={createdAt}
          className="text-black-45 font-normal ml-2"
        />
      </div>
      <div className="word-break-all">{text}</div>
    </li>
  );
};

export default messageItem;
