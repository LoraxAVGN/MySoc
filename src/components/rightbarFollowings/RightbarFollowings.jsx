import React from 'react';
import StoreContext from '../../StoreContext';
import "./RightbarFollowings.css";
import {NavLink} from 'react-router-dom';

export default function RightbarFollowings(){
    return(
        <StoreContext.Consumer>
        {
            (SF) => {

                const personId = SF.currentPerson?.userId || ""; 

                return(
                <div className="rightbarFollowings">
                    {SF?.allUsers[personId]?.followers ? SF?.allUsers[personId]?.followers?.map(id => 
                        <NavLink key={id} className="usersLinks" to="/user">
                            <div onClick={() => SF.onClickUser(id)} className="rightbarFollowing">
                            <img
                                src={SF?.allUsers[id]?.icon || "https://yt3.ggpht.com/a/AGF-l79TeE4LZ7QszKiy-EgX9-pXgQTunY_cNGLQfg=s900-c-k-c0xffffffff-no-rj-mo"}

                                alt=""
                                className="rightbarFollowingImg"
                            />
                            <span className="rightbarFollowingName">
                                {SF.allUsers[id] ? 
                                SF.allUsers[id].userName ? 
                                    SF.allUsers[id].userName.length<11 ? 
                                    SF.allUsers[id].userName :
                                    SF.allUsers[id].userName.slice(0, 10)+'...'
                                : '' 
                                : ''}
                            </span>
                            </div>
                        </NavLink>
                    ) : []}
                    </div>
                )
            }
        }
        </StoreContext.Consumer>
    )
}