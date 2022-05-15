import React, {useState} from 'react';
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import StoreContext from "../../StoreContext";

export default function Profile() {

  const[userNameFlag, changeUserNameFlag] = useState(false);
  const[userNameText, changeUserNameText] = useState('');
  const[userStatusFlag, changeUserStatusFlag] = useState(false);
  const[userStatusText, changeUserStatusText] = useState('');  
  const[profileCoverImgFlag, changeProfileCoverImgFlag] = useState(false);
  const[profileCoverImgText, changeProfileCoverImgText] = useState('');  
  const[profileIconFlag, changeProfileIconFlag] = useState(false);
  const[profileIconText, changeProfileIconText] = useState('');  

  return (
    <StoreContext.Consumer>
    {
      (SF) => {

        const onClickNameButtonNew = () => {
          SF.onClickInputButton(userNameText, 'userName');
          changeUserNameFlag(false);
          changeUserNameText('');
        }
      
        const onClickStatusButtonNew = () => {
          SF.onClickInputButton(userStatusText, 'status');
          changeUserStatusFlag(false);
          changeUserStatusText('');
        }
        
        const onClickCoverButtonNew = () => {
          SF.onClickInputButton(profileCoverImgText, 'coverUrl');
          changeProfileCoverImgFlag(false);
          changeProfileCoverImgText('');
        }
      
        const onClickProfileIconButtonNew = () => {
          SF.onClickInputButton(profileIconText, 'icon');
          changeProfileIconFlag(false);
          changeProfileIconText('');
        }

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
                    src={SF.currentPerson?.coverUrl || (SF.currentPerson?.userId && "https://plitka.by/upload/iblock/ebf/ebfbf270daa02e33a7bc4f58ffc982c6.jpg")}
                    onDoubleClick={() => changeProfileCoverImgFlag(true)}
                    alt=""
                  />
                {profileCoverImgFlag && 
                  <div className='inputPlusBtnCover'>
                    <input 
                      onKeyPress={e => { if(e.key == 'Enter') { onClickCoverButtonNew() }}}
                      value={profileCoverImgText} 
                      onChange={e => changeProfileCoverImgText(e.currentTarget.value)} 
                      placeholder={SF.currentPerson.coverUrl || "coverUrl..."} 
                      className="profileInfoInputs" 
                    />
                    <span>
                      <button 
                        onClick={() => onClickCoverButtonNew()}  
                        className="shareButton shareButtonOk">
                        Ok
                      </button>
                    </span>
                  </div>
                }
                  <img
                    className="profileUserImg"
                    src={SF.currentPerson?.icon || (SF.currentPerson?.userId && "https://yt3.ggpht.com/a/AGF-l79TeE4LZ7QszKiy-EgX9-pXgQTunY_cNGLQfg=s900-c-k-c0xffffffff-no-rj-mo")}
                    onDoubleClick={() => changeProfileIconFlag(true)}
                    alt=""
                  />
                  {profileIconFlag && 
                  <div className='inputPlusBtnIcon'>
                    <input 
                      onKeyPress={e => { if(e.key == 'Enter') { onClickProfileIconButtonNew() }}}
                      value={profileIconText} 
                      onChange={e => changeProfileIconText(e.currentTarget.value)} 
                      placeholder={SF.currentPerson.coverUrl || "iconUrl..."} 
                      className="profileInfoInputs" 
                    />
                    <span>
                      <button 
                        onClick={() => onClickProfileIconButtonNew()}  
                        className="shareButton shareButtonOk">
                        Ok
                      </button>
                    </span>
                  </div>
                }
                </div>
                <div className="profileInfo">
                {!userNameFlag && 
                  <h4 
                    className="profileInfoName" 
                    onDoubleClick={() => changeUserNameFlag(true)}>
                    {SF.currentPerson?.userName || (SF.currentPerson?.userId && "unknown")}
                  </h4>
                }
                {userNameFlag && 
                  <div className='inputPlusBtn'>
                    <input 
                      onKeyPress={e => { if(e.key == 'Enter') { onClickNameButtonNew() }}}
                      value={userNameText} 
                      onChange={e => changeUserNameText(e.currentTarget.value)} 
                      placeholder={SF.currentPerson.userName || "Username..."} 
                      className="profileInfoInputs" 
                    />
                    <span>
                      <button 
                        onClick={() => onClickNameButtonNew()}  
                        className="shareButton shareButtonOk">
                        Ok
                      </button>
                    </span>
                  </div>
                }
                {!userStatusFlag && 
                  <span 
                    className="profileInfoDesc" 
                    onDoubleClick={() => changeUserStatusFlag(true)}>
                    {SF.currentPerson?.status || (SF.currentPerson?.userId && "Your status...")}
                  </span>
                }
                {userStatusFlag && 
                  <div className='inputPlusBtnStatus'>
                    <input 
                      onKeyPress={e => { if(e.key == 'Enter') {onClickStatusButtonNew('status')}}}
                      value={userStatusText} 
                      onChange={e => changeUserStatusText(e.currentTarget.value)} 
                      placeholder={SF.currentPerson.status || "Your status..."} 
                      className="profileInfoInputs" 
                    />
                    <span>
                      <button 
                        onClick={() => onClickStatusButtonNew('status')}  
                        className="shareButton shareButtonOk">
                        Ok
                      </button>
                    </span>
                  </div>
                }
              </div>
            </div>
              <div className="profileRightBottom">
                <Feed profile />
                <Rightbar profile />
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
