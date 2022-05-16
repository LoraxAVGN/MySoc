import React from 'react';
import "./user.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import UserRightbar from "./userRightbar";
import StoreContext from "../../StoreContext";

export default function Profile(props) { 

  return (
    <StoreContext.Consumer>
    {
      (SF) => {

        const userId = SF?.currentUser?.userId || "";

        return (
        <>
          <Topbar/>
          <div className="profile">
            <Sidebar/>
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                  <img
                    className="profileCoverImg"
                    src={SF?.allUsers[userId]?.coverUrl || (userId && "https://plitka.by/upload/iblock/ebf/ebfbf270daa02e33a7bc4f58ffc982c6.jpg")}
                    alt=""
                  />
                  <img
                    className="profileUserImg"
                    src={SF?.allUsers[userId]?.icon || (userId && "https://yt3.ggpht.com/a/AGF-l79TeE4LZ7QszKiy-EgX9-pXgQTunY_cNGLQfg=s900-c-k-c0xffffffff-no-rj-mo")}
                    alt=""
                  />
                </div>
                <div className="profileInfo">
                  <h4 className="profileInfoName">
                    {SF?.allUsers[userId]?.userName || (userId && "unknown")}
                  </h4>
                  <span className="profileInfoDesc">
                    {SF?.allUsers[userId]?.status || (userId && "Your status...")}
                  </span>
              </div>
            </div>
              <div className="profileRightBottom">
                <Feed profile={false} user/>
                <UserRightbar profile allUsers={props.allUsers} />
              </div>
            </div>
          </div>
        </>
        )
      }
    }
    </StoreContext.Consumer>
  );
}
