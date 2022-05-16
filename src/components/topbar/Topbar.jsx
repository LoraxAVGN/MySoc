import React from 'react';
import "./topbar.css";
import { Search, Chat, ExitToApp, Home, Timeline } from "@material-ui/icons";
import {NavLink} from 'react-router-dom';
import StoreContext from '../../StoreContext';

export default function Topbar() {

  return (
    <StoreContext.Consumer>
    {
      (SF) => {

        const personId = SF.currentPerson?.userId || ""; 

        return(
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
                <Home />
              </NavLink>
              <NavLink to="/timeline">
                <Timeline />
              </NavLink>
              <NavLink to="/messenger">
                <Chat />
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
                src={SF?.allUsers[personId]?.icon || (SF.currentPerson?.userId && "https://yt3.ggpht.com/a/AGF-l79TeE4LZ7QszKiy-EgX9-pXgQTunY_cNGLQfg=s900-c-k-c0xffffffff-no-rj-mo")} 
                alt="" 
                className="topbarImg"
              />
            </NavLink>
          </div>
        </div>
        )
      }
    }
    </StoreContext.Consumer>
  );
}
