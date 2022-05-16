import "./share.css";
import React, {useState} from 'react';
import {PermMedia,Room} from "@material-ui/icons";
import StoreContext from "../../StoreContext";

export default function Share(props) {

  const[photoFlag, onClickPhotoFlag] = useState(false);
  const[sharePhotoLink, changeSharePhotoLink] = useState('');
  const[photoButton, onClickPhotoButton] = useState(false);
  const[shareText, changeShareText] = useState('');
  const[locationFlag, onClickLocationFlag] = useState(false);
  const[locationText, changeLocationText] = useState('');
  const[locationButtonOk, onClickLocationButtonOk] = useState(false);

  const NewOnClickShare = () => {
    props.onClickShare(shareText, sharePhotoLink, locationText);
    changeShareText('');
    changeSharePhotoLink('');
    changeLocationText('');
    onClickPhotoFlag(false);
    onClickLocationFlag(false);
    onClickPhotoButton(false);
    onClickLocationButtonOk(false);
  }

  return (
    <StoreContext.Consumer>
    {
      (SF) => {

        const personId = SF.currentPerson?.userId || ""; 

        return(
        <div className="share">
          <div className="shareWrapper">
            <div className="shareTop">
              <img 
                className="shareProfileImg" 
                src={SF?.allUsers[personId]?.icon || "https://yt3.ggpht.com/a/AGF-l79TeE4LZ7QszKiy-EgX9-pXgQTunY_cNGLQfg=s900-c-k-c0xffffffff-no-rj-mo"}
                alt="" 
              />
              <input
                placeholder="What's in your mind?"
                className="shareInput"
                value={shareText} 
                onChange={e => changeShareText(e.currentTarget.value)} 
              />
            </div>
            <hr className="shareHr"/>
            {photoFlag && !photoButton && 
            <>
              <input 
                onKeyPress={e => { if(e.key == 'Enter') { onClickPhotoButton(true) }}}
                value={sharePhotoLink} 
                onChange={e => changeSharePhotoLink(e.currentTarget.value)} 
                placeholder="Введите ссылку картинки..." 
                className="sharePhotoLink" 
              />
              <span>
                <button 
                  onClick={() => onClickPhotoButton(true)}  
                  className="shareButton shareButtonOk">
                  Ok
                </button>
              </span>
            </>
            }
            {photoButton &&
              <img className="shareNewImg" src={sharePhotoLink} alt="" />
            }
            {locationFlag && !locationButtonOk &&
              <>
                <input
                  onKeyPress={e => { if(e.key == 'Enter') { onClickLocationButtonOk(true) }}}
                  placeholder="Your location..."
                  className="shareLocation"
                  value={locationText} 
                  onChange={e => changeLocationText(e.currentTarget.value)} 
                />
                <span>
                  <button onClick={() => onClickLocationButtonOk(true)}  className="shareButton shareButtonOk">Ok</button>
                </span>
              </>
            }
            {locationButtonOk && 
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon"/>
                <span className="shareOptionText">{locationText}</span>
              </div>
            }
            <div className="shareBottom">
                <div className="shareOptions newShareOptions">
                    <div onClick={() => onClickPhotoFlag(true)} className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div onClick={() => onClickLocationFlag(true)} className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                </div>
                <button onClick={NewOnClickShare}  className="shareButton">Share</button>
            </div>
          </div>
        </div>
        )
      }
    }
    </StoreContext.Consumer>
  );
}
