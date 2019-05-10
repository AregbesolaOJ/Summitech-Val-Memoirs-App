import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Story = ({ avatar, name, headline, story, likes, clicked, likesClick }) => {
  return (
    <div className="story" onClick={clicked}>
      <div className="user-avatar">{avatar}</div>
      <div className="user-name">{name}</div>
      <div className="user-headline">{headline}</div>
      <div className="user-story">{story}</div>
      <div className="user-likes">
          <FontAwesomeIcon icon="spinner" onClick={likesClick} spin style={{color: 'red'}}/>Likes: {likes}
      </div>
    </div>
  );
}

export default Story