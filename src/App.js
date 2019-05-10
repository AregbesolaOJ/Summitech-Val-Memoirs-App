import React from 'react';
import Slider from './components/Slider';
import Header from './components/Header';
import About from './components/About';
import FormModal from './components/FormModal';
import StoryList from './components/Stories/Stories';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faBars, faSpinner} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft, faArrowRight, faBars, faSpinner)

class App extends React.Component {
  state = {
    stories: [],
    first_name: '',
    last_name: '',
    user_name: '',
    gender: '',
    headline: '',
    user_story: '',
    userExists: false,
    addNewStoryModal: false
  }

  addNewStoryHandler = () => {
    this.setState({ addNewStoryModal: true })
    console.log('heeeey');
  }

  handleFormChage = event => {
    const { name, value } = event.target;

    // const currentState = this.state.stories;

    this.setState({
      [name]: value
    })  

    this.state.stories.map(story => {
        if(story.user_name === this.state.user_name) {
            this.setState({ 
              userExists: true 
              // stories: currentState 
            })
        }
        return story;
    })

  }

  formModalClose = () => {
    this.setState({ 
      first_name: '',
      last_name: '',
      user_name: '',
      gender: '',
      headline: '',
      user_story: '',
      addNewStoryModal: false
     })    
  }

  addStoryHandler = event => {

      if(this.state.first_name === '' || this.state.last_name === '' || this.state.user_name === '' || this.state.gender === '' || this.state.headline === '' || this.state.user_story === '') {
        
        alert('All fields are required!!!')
      
      } else if(!this.state.userExists) {
        
        let userId = 1;

        if(this.state.stories.length > 0) {
          userId = this.state.stories.length + 1;
        }
    
        const storyData = {
          id: userId,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          user_name: this.state.user_name,
          gender: this.state.gender,
          headline: this.state.headline,
          user_story: this.state.user_story,
          likes: 0
        }
    
        const updatedStories = this.state.stories.concat(storyData);
    
        this.setState({ 
          stories: updatedStories, 
          first_name: '',
          last_name: '',
          user_name: '',
          gender: '',
          headline: '',
          user_story: '',
          addNewStoryModal: false
         })    
    
        console.log(storyData, this.state.stories);    
    

      } else {
        const currentState = this.state.stories;

        alert(`Oops! Dear ${this.state.user_name}, sorry no user can post more than one (1) story, and looking at your username we already have one story from you.`);

        this.setState({ stories: currentState })
      
      }

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

  render() {
    const newStoryModal = <FormModal 
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

    return (
      <div className="App">
        <Header />
        <Slider />
        {this.state.addNewStoryModal ? newStoryModal : null}
        <About clicked={this.addNewStoryHandler}/>
        <StoryList stories={this.state.stories} likesClick={this.handleLikes}/>
        <FontAwesomeIcon icon={faSpinner} spin style={{color: 'red'}}/>
        <h2>hello world</h2>
      </div>
    );
  
  }
}

export default App;
