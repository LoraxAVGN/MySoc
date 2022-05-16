import React from 'react';
import "./conversation.css";
import StoreContext from '../../StoreContext'

export default function Conversation({searchText}) {

  return (
    <StoreContext.Consumer>
        {
        (SF) => {
          const idArr = SF.currentPerson ? SF.currentPerson.followers ? [...SF?.currentPerson?.followers] : [] : [];
          let searchArr = [];
          idArr.map(id => {
            searchArr.push(SF.allUsers[id]?.userName)
          })
          let newSearchArr = [];
          searchArr.map(name =>{
            if(name?.toUpperCase()?.includes(searchText.toUpperCase())) newSearchArr.push(name.toUpperCase());
          })

          return(
            <>
              {SF.currentPerson.followers && SF.currentPerson.followers.map(id =>
                { if(newSearchArr.includes(SF.allUsers[id]?.userName.toUpperCase()))
                  return(
                    <div 
                      onClick={() => SF.onClickUser(id)} 
                      className={id==SF.currentUser?.userId?"activeChat":"conversation"}>
                      <img
                        className="conversationImg"
                        src={SF?.allUsers[id]?.icon || "https://yt3.ggpht.com/a/AGF-l79TeE4LZ7QszKiy-EgX9-pXgQTunY_cNGLQfg=s900-c-k-c0xffffffff-no-rj-mo"}
                        alt=""
                      />
                      <span className="conversationName">
                        {SF.allUsers[id] ? 
                          SF.allUsers[id].userName ? 
                          SF.allUsers[id].userName
                          : '' 
                        : ''}
                      </span>
                    </div>
                  )
                  else return null
                }
              )}
            </>
          )
        }
      }
    </StoreContext.Consumer>
  );
}
