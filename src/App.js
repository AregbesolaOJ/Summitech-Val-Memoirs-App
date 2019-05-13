import React from 'react';
import Slider from './components/Slider';
import Header from './components/Header';
import About from './components/About';
import FormModal from './components/FormModal';
import StoryList from './components/Stories/Stories';
import FullStory from './components/FullStoryModal';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faWindowClose, faHeart, faBars, faSpinner, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

library.add( faWindowClose, faHeart, faBars, faSpinner, faAngleRight, faAngleLeft )

class App extends React.Component {
  state = {
    stories: [],
    modalStory: [],
    first_name: '',
    user_name: '',
    last_name: '',
    gender: '',
    headline: '',
    user_story: '',
    showFullStoryModal: false,
    addNewStoryModal: false
  }

  addNewStoryHandler = () => {
    this.setState({ addNewStoryModal: true })
    this.state.stories.map(story => {
      return story;
    })
  }

  handleFormChage = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    }); 
  }

  formModalClose = () => {
    this.setState({ 
      first_name: '',
      last_name: '',
      user_name: '',
      gender: '',
      headline: '',
      user_story: '',
      addNewStoryModal: false,
      showFullStoryModal: false
     })    
  }

  addStoryHandler = () => {

      if(this.state.first_name === '' || this.state.last_name === '' || this.state.user_name === '' || this.state.gender === '' || this.state.headline === '' || this.state.user_story === '') {
        return alert('All fields are required!!!');
      }
      
      if (this.state.stories.filter(story => story.user_name === this.state.user_name).length) {
        alert("Oops, sorry no user can post more than one (1) story, that username already exists");
        return;
      }


        const storyData = {
          id: parseInt(Date.now() + Math.random()),
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          user_name: this.state.user_name,
          gender: this.state.gender,
          headline: this.state.headline,
          user_story: this.state.user_story,
          likes: 0
        }

        this.setState({ 
          stories: [...this.state.stories, storyData], 
          first_name: '',
          last_name: '',
          user_name: '',
          gender: '',
          headline: '',
          user_story: '',
          addNewStoryModal: false
         }, () => {
          localStorage.setItem('stories', JSON.stringify(this.state.stories))
         });    


  }

  handleLikes = id => {
      this.setState( prevState => {
        const updatedStories = prevState.stories.map(story => {
          if(story.id === id) {
            story.likes = story.likes + 1;
          }
          return story
        })
        return {
          stories: updatedStories
        }
      })
  
  }

  viewMoreClick = id => {
    this.state.stories.filter(story => {
      if(story.id === id) {
        this.setState({ modalStory: story, showFullStoryModal: true });
      }
      return story;
    });
  }

  componentDidMount() {
    this.setState({
      stories: JSON.parse(localStorage.getItem('stories')) || []
    });

  }

  render() {
    const newStoryModal = (
                        <FormModal 
                            firstName={this.state.first_name} 
                            lastName={this.state.last_name} 
                            userName={this.state.user_name} 
                            maleCheck={this.state.gender === "male"} 
                            femaleCheck={this.state.gender === "female"} 
                            headline={this.state.headline} 
                            userStory={this.state.user_story} 
                            change={this.handleFormChage} 
                            closeClicked={this.formModalClose} 
                            clicked={this.addStoryHandler} 
                        />
                        )

    const fullStory = (
                    <FullStory 
                            first_name={this.state.modalStory.first_name} 
                            last_name={this.state.modalStory.last_name} 
                            user_name={this.state.modalStory.user_name} 
                            headline={this.state.modalStory.headline} 
                            fullStory={this.state.modalStory.user_story} 
                            likes={this.state.modalStory.likes} 
                            closeClicked={this.formModalClose}
                        />
                       )
                        
    return (
      <div className="App">
        <Header />
        <Slider />
        {this.state.addNewStoryModal ? newStoryModal : null}
        {this.state.showFullStoryModal ? fullStory : null}
        <About clicked={this.addNewStoryHandler}/>
        <StoryList stories={this.state.stories} 
                   likesClick={this.handleLikes} 
                   viewMoreClick={this.viewMoreClick}
        />
      </div>
    );
  
  }
}

export default App;
