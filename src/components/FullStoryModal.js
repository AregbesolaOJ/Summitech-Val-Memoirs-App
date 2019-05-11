import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Fullstory = ({ first_name, last_name, user_name, headline, fullStory, likes, closeClicked }) => {

    const avatar = first_name.split("", 1) + last_name.split("", 1)
 
    return (
      <div className="modal">
        <div className="modal-main">
          <div className="close-modal" onClick={closeClicked}>
              <FontAwesomeIcon icon="window-close" size="3x" style={{width: '100%', height: '100%'}}/>
          </div>
          <div className="full-story">
            <div className="full-story-full-name">{first_name} {last_name}</div>
            <div className="full-story-avatar">{avatar}</div>
            <div className="full-story-user-name">@{user_name}</div>
            <div className="full-story-headline">{headline}</div>
            <div className="full-user-story">
              {fullStory}
            </div>
            <div className="full-story-likes">
                <FontAwesomeIcon icon="heart" className="likes" size="3x" style={{color: likes >= 1 && 'red'}}/>Likes: {likes}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Fullstory;