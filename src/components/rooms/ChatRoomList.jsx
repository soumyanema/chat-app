import React from 'react';
import { Nav } from 'rsuite';
import NavItem from 'rsuite/lib/Nav/NavItem';
import RoomItems from './RoomItems';

const ChatRoomList = ({ aboveElHeight }) => {
  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{ height: `calc(100% - ${aboveElHeight}px)` }}
    >
      <NavItem>
        <RoomItems />
      </NavItem>
    </Nav>
  );
};

export default ChatRoomList;
