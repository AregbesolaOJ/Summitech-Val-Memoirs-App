import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Fullstory = ({ first_name, last_name, user_name, headline, fullStory, likes, avatar, closeClicked }) => {
    return (
      <div className="modal">
        <div className="modal-main">
          <div className="close-modal" onClick={closeClicked}>
              <FontAwesomeIcon icon="window-close" style={{color: 'red'}}/>
          </div>
          <div className="full-story">
            <div className="full-story-avatar">{avatar}</div>
            <div className="full-story-first-name">{first_name}</div>
            <div className="full-story-last-name">{last_name}</div>

            <div className="full-story-user-name">{user_name}</div>
            <div className="full-story-headline">{headline}</div>
            <div className="full-user-story">
              {fullStory}
            </div>
            <div className="full-story-likes">
                <FontAwesomeIcon icon="heart" size="2x" style={{color: 'red'}}/>Likes: {likes}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Fullstory;