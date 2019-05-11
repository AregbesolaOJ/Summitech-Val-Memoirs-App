import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Unsplash from 'unsplash-js';

// require syntax

export const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}

export const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
          <FontAwesomeIcon icon="arrow-left" color='#000' size="2x"/>
        </div>
    );
}


export const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
          <FontAwesomeIcon icon="arrow-right" color='#000' size="2x"/>
        </div>
    );
}

class Slider extends React.Component {
    state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
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
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
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
      const Unsplash = require('unsplash-js').default;

      const unsplash = new Unsplash({
        applicationId: "740219091492359718effc57ccb516abfccbba727592c6ab7e05d3e6ce7d4e97",
        secret: "2b4a0454d392a6fe1b8449631e92ac9ed0032ffd7114cf493c49d824de2ae2ac"
      });

      fetch('https://api.unsplash.com/search/photos/1/office')
        .then(res => console.log(res));
    }
    render() {
      let slider = <FontAwesomeIcon icon="spinner" spin color='#000' size="3x"/>

      if(this.state.images.length > 0) {
        slider = (
          <React.Fragment>
            <div className="slider-wrapper"
              style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
              }}>
                {
                  this.state.images.map((image, i) => (
                    <Slide key={i} image={image} />
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