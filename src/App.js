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
    addNewStoryModal: false
  }

  addNewStoryHandler = () => {
    this.setState({ addNewStoryModal: true })
  }

  handleFormChage = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    }); 
  }


  componentDidMount() {
    this.setState({
      stories: JSON.parse(localStorage.getItem('stories')) || []
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
      addNewStoryModal: false
     })    
  }

  addStoryHandler = () => {

      if(this.state.first_name === '' || this.state.last_name === '' || this.state.user_name === '' || this.state.gender === '' || this.state.headline === '' || this.state.user_story === '') {
        return alert('All fields are required!!!');
      }
      
      if (this.state.stories.filter(story => story.user_name === this.state.user_name).length) {
        alert("Opps, mno way, username already exists");
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
