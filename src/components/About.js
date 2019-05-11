import React from "react";
import Button from './Button';

const About = ({clicked}) => {
    
    return (
        <div className="about">
            <h1>Valentine's day</h1>
            <span className="intro">...one for the lovebirds!</span>
            <p>Valentine's Day is a time to celebrate romance and love and kissy-face fealty. But the origins of this festival of candy and cupids actually dates to the eaerly centuries,
                The celebration was a couple of weeks ago and several people had awesome memories from the day. At “Val Memoirs”, we have in store for you stories that have been shared by people at the same time we've provided you the platform share Val's experiences with the world
                Dive right in, feel free and click on the button below and tell us YOUR story. 
            </p>
            <Button clicked={clicked}>add a story</Button>
        </div>
    )
}

export default About;