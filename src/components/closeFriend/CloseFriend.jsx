import React from 'react';
import {NavLink} from 'react-router-dom';
import "./closeFriend.css";
import StoreContext from '../../StoreContext';

export default function CloseFriend({user}) {

  return (
    <StoreContext.Consumer>
      {
        (SF) => (
        <NavLink className="usersLinks" to="/user">
          <li onClick={() => SF.onClickUser(user.userId)}  className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.icon || "https://yt3.ggpht.com/a/AGF-l79TeE4LZ7QszKiy-EgX9-pXgQTunY_cNGLQfg=s900-c-k-c0xffffffff-no-rj-mo"} alt='' />
            <span className="sidebarFriendName">{user.userName || 'unknown'}</span>
          </li>
        </NavLink>
        )
      }
    </StoreContext.Consumer>
  );
}
