import React from 'react' 
import Story from './Story';

const StoryList = ({ stories, likesClick, viewMoreClick }) => {
    let myStories = [];
    if(stories) {
        myStories = stories.map(story => {
          return (
           <Story 
                key={story.id} 
                first_name={story.first_name}
                last_name={story.last_name} 
                name={story.user_name} 
                headline={story.headline} 
                story={story.user_story} 
                likes={story.likes} 
                likesClick={() => likesClick(story.id)}
                viewMoreClick={() => viewMoreClick(story.id)}
           />
          )
        })
    }
    return (
      <div className="storyList">
        {myStories}
      </div>
    );
}

export default StoryList;