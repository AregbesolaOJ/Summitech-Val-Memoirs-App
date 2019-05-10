import React from "react";
import Button from './Button';

const About = ({clicked}) => {
    return (
        <div className="about">
            <p>Valentines Day was a couple of weeks ago and several people had awesome memories from the day. Your task is to create a fictional site called “Val Memoirs” where people can share their experiences with the public.
            The site should guide people on how to share their stories.There should be a call-to-action (CTA) to add a story. The site should display stories that have been shared by people.
            </p>
            <Button clicked={clicked}>add a story</Button>
        </div>
    )
}

export default About;