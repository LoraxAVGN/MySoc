import React from 'react';
import "./topbar.css";
import { Search, Chat, ExitToApp } from "@material-ui/icons";
import {NavLink} from 'react-router-dom';
import StoreContext from '../../StoreContext';

export default function Topbar() {

  return (
    <StoreContext.Consumer>
    {
      (SF) => (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <NavLink to="/Profile">
            <span className="logo">MySoc</span>
          </NavLink>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
          <NavLink to="/Profile">
            <span className="topbarLink homepage">Homepage</span>
          </NavLink>
          <NavLink to="/timeline">
            <span className="topbarLink">Timeline</span>
          </NavLink>
          </div>
          <div className="topbarIcons">
            <NavLink to="/messenger">
              <div className="topbarIconItem">
                <Chat />
                {/* <span className="topbarIconBadge">2</span> */}
              </div>
            </NavLink>
            <NavLink to="/MySoc">
              <div 
                className="topbarIconItem"
                onClick={SF.onClickTopbarImg} >
                <ExitToApp />
              </div>
            </NavLink>
          </div>
          <NavLink to="/Profile">
            <img 
              src={SF.currentPerson?.icon || (SF.currentPerson?.userId && "https://yt3.ggpht.com/a/AGF-l79TeE4LZ7QszKiy-EgX9-pXgQTunY_cNGLQfg=s900-c-k-c0xffffffff-no-rj-mo")} 
              alt="" 
              className="topbarImg"
            />
          </NavLink>
        </div>
      </div>
      )
    }
    </StoreContext.Consumer>
  );
}
