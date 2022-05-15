import "./sidebar.css";
import React, {useState} from 'react';
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School, Home, Timeline} from "@material-ui/icons";
import CloseFriend from "../closeFriend/CloseFriend";
import {NavLink} from 'react-router-dom';
import StoreContext from "../../StoreContext";


export default function Sidebar() {

  const[showMoreFlag, changeShowMoreFlag] = useState(false);

  return (
    <StoreContext.Consumer>
    {
      (SF) => (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <NavLink className="sideNav" to="/Profile">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                <span className="sidebarListItemText">Homepage</span>
              </li>
            </NavLink>
            <NavLink className="sideNav" to="/timeline">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                <span className="sidebarListItemText">Timeline</span>
              </li>
            </NavLink>
            <NavLink className="sideNav" to="/messenger">
              <li className="sidebarListItem">
                <Chat className="sidebarIcon" />
                <span className="sidebarListItemText">Chats</span>
              </li>
            </NavLink>
            { showMoreFlag &&
            <>
              <li className="sidebarListItem">
                <PlayCircleFilledOutlined className="sidebarIcon" />
                <span className="sidebarListItemText">Videos</span>
              </li>
              <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                <span className="sidebarListItemText">Groups</span>
              </li>
              <li className="sidebarListItem">
                <Bookmark className="sidebarIcon" />
                <span className="sidebarListItemText">Bookmarks</span>
              </li>
              <li className="sidebarListItem">
                <HelpOutline className="sidebarIcon" />
                <span className="sidebarListItemText">Questions</span>
              </li>
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                <span className="sidebarListItemText">Jobs</span>
              </li>
              <li className="sidebarListItem">
                <Event className="sidebarIcon" />
                <span className="sidebarListItemText">Events</span>
              </li>
              <li className="sidebarListItem">
                <School className="sidebarIcon" />
                <span className="sidebarListItemText">Courses</span>
              </li>
            </>
            }
          </ul>
          <button 
            className="sidebarButton" 
            onClick={() => changeShowMoreFlag(!showMoreFlag)}>
            Show More
          </button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            {Object.keys(SF.allUsers).map((key) => {
              if (key != SF.currentPerson?.userId) return <CloseFriend key={key} user={SF.allUsers[key]} />
            })}
          </ul>
        </div>
      </div>
      )
    }
    </StoreContext.Consumer>
  );
}
