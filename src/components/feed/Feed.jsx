import React from 'react';
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import StoreContext from "../../StoreContext";
import moment from 'moment';

export default function Feed(props) {

  return (
    <StoreContext.Consumer>
    {
      (SF) => 
      {
        const userId = SF?.currentUser?.userId;
        const personId = SF?.currentPerson?.userId;

        let followersPosts = [];
        if(props.home){
          const followersArr = SF?.allUsers[personId]?.followers || [];
          let newFolPosts = [];
          followersArr.map(id => {
            if(SF.allUsers[id] ? SF.allUsers[id].posts ? 1 : 0 : 0) 
              newFolPosts = newFolPosts.concat(SF.allUsers[id].posts);
          })
          followersPosts = newFolPosts.sort((a,b) => moment(b.date) - moment(a.date));
        }

        return(
          <div className="feed">
            <div className="feedWrapper">
              {props.profile && <Share onClickShare={SF.onClickShare}/>}
              {props.profile && SF?.allUsers[personId]?.posts?.map((p, index) => (
                <Post 
                  profile
                  index={index} 
                  key={p?.id + index} 
                  post={p} 
                  onClickDelBut={SF.onClickDelBut}
                  onClickLike={SF.onClickLike} 
                />
              ))}
              {props.user && SF?.allUsers[userId]?.posts?.map((p, index) => {
                {console.log(index)}
                return(
                <Post 
                  user={props.user}
                  index={index} 
                  key={p?.id + index} 
                  post={p} 
                  onClickDelBut={SF.onClickDelBut}
                  onClickLike={SF.onClickLike} 
                />)
              })}
              {props.home && followersPosts?.map((p, index) => (
                <Post 
                  timeline
                  user={props.user}
                  index={index} 
                  key={p.id + index} 
                  post={p} 
                  onClickDelBut={SF.onClickDelBut}
                  onClickLike={SF.onClickLike} 
                />
              ))}
            </div>
          </div>
        )
      }
    }
    </StoreContext.Consumer>
  );
}
