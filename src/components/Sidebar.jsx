import React, { useEffect, useRef, useState } from 'react';
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
  const topSidebar = useRef();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (topSidebar.current) {
      setHeight(topSidebar.current.scrollHeight);
    }
  }, [topSidebar]);
  return (
    <div className="h-100 pt-2">
      <div ref={topSidebar}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join Conversation</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;
