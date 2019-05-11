import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Slide = ({ image, title }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" title={title} style={styles}></div>
}

export const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
          <FontAwesomeIcon icon="angle-left" color='#000' size="2x"/>
        </div>
    );
}


export const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
          <FontAwesomeIcon icon="angle-right" color='#000' size="2x"/>
        </div>
    );
}

class Slider extends React.Component {
    state = {
      images: [],
      currentIndex: 0,
      translateValue: 0
    }
  
    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We return to the first image in the array.
      if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }
  
        
    componentDidMount() {

      fetch('https://api.unsplash.com/search/photos/?page=1&query=valentinesday&client_id=740219091492359718effc57ccb516abfccbba727592c6ab7e05d3e6ce7d4e97')
        .then(res => res.json())
        .then(data => {
          const slidePictures = data.results;
          this.setState({ 
            images: slidePictures
          })
        })
        .catch(err => {
          alert('Error happened during while loading this page, please check Internet Connection and refresh the page!', err);
        })
    }
    
    render() {
      let slider = <FontAwesomeIcon icon="spinner" spin color='#000' size="3x"/>

      if(this.state.images.length) {
        slider = (
          <React.Fragment>
            <div className="slider-wrapper"
              style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
              }}>
                {
                  this.state.images.map(image => (
                    <Slide key={image.id} image={image.urls.regular} title={image.alt_description} />
                  ))
                }
            </div>

            <LeftArrow
            goToPrevSlide={this.goToPrevSlide}
            />

            <RightArrow
            goToNextSlide={this.goToNextSlide}
            />
          </React.Fragment>

        )
      }
      return (
        <div className="slider">
            {slider}  
        </div>
        
      );
    }
}

export default Slider;