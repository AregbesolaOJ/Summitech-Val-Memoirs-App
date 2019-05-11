import React from "react";
import Button from './Button';

const About = ({clicked}) => {
    
    return (
        <div className="about">
            <h1>Valentine's day</h1>
            <p>
            Valentine's Day is a time to celebrate romance and love and kissy-face fealty. But the origins of this festival of candy and cupids are actually dark, bloody — and a bit muddled. A drawing depicts the death of St. Valentine — one of them, anyway. The Romans executed two men by that name on Feb. 14 of different years in the 3rd century A.D.Hulton Archive/Getty Images Though no one has pinpointed the exact origin of the holiday, one good place to start is ancient Rome, where men hit on women by, well, hitting them Those Wild And Crazy Romans How Chocolate Became A Sweet (But Not So Innocent) Consort To Valentine's Day THE SALT How Chocolate Became A Sweet (But Not So Innocent) Consort To Valentine's Day From Feb. 13 to 15, the Romans celebrated the feast of Lupercalia. The men sacrificed a goat and a dog, then whipped women with the hides of the animals they had just slain. The Roman romantics were drunk. They were naked, says Noel Lenski, a historian at the University of Colorado at Boulder. Young women would actually line up for the men to hit them, Lenski says. They believed this would make them fertile";
                
            Valentines Day was a couple of weeks ago and several people had awesome memories from the day. Your task is to create a fictional site called “Val Memoirs” where people can share their experiences with the public.
            The site should guide people on how to share their stories.There should be a call-to-action (CTA) to add a story. The site should display stories that have been shared by people.
            </p>
            <Button clicked={clicked}>add a story</Button>
        </div>
    )
}

export default About;