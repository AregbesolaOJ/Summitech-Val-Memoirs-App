import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Story = ({ first_name, last_name, name, headline, story, likes, clicked, likesClick, viewMoreClick }) => {
    let word = story;
    let userStory = '';

    if(word.length > 100) {

      word.split("", 100).map(s => {
        return userStory += `${s}`
      })

    } else {

      userStory = word;

    }

    const avatar = first_name.split("", 1) + last_name.split("", 1)

    return (
    <div className="story" onClick={clicked}>
      <div className="user-avatar">{avatar}</div>
      <div className="user-name">{name}</div>
      <div className="user-headline">{headline}</div>
      <div className="user-story">
        {userStory}<span className="view-more" onClick={viewMoreClick} style={{display: story.length < 100 && 'none'}}>...view more</span>
      </div>
      <div className="user-likes">
          <FontAwesomeIcon icon="heart" className="likes" onClick={likesClick} size="3x" style={{color: likes >= 1 && 'red'}}/>Likes: {likes}
      </div>
    </div>
  );
}

export default Story;
