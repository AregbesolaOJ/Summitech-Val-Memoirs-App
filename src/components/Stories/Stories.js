import React from 'react' 
import Story from './Story';

const StoryList = ({ stories, likesClick }) => {
    let myStories = [];
    if(stories) {
        myStories = stories.map(story => <Story key={story.id} avatar="" name={story.user_name} headline={story.headline} story={story.user_story} likes={story.likes} likesClick={() => likesClick(story.id)}/>)
    }
    return (
      <div className="storyList">
        {myStories}
      </div>
    );
}

export default StoryList;