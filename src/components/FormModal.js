import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button';

const FormModal = ({ firstName, lastName, userName, maleCheck, femaleCheck, closeClicked, headline, userStory, change, clicked }) => {
  return (
    <div className="formModal">
      <div className="user-likes" onClick={closeClicked}>
          <FontAwesomeIcon icon="spinner" spin style={{color: 'red'}}/>
      </div>
      <div className="user-form">
        <input type="text" name="first_name" value={firstName} placeholder="First Name" onChange={change} />
        <br />
        <input type="text" name="last_name" value={lastName} placeholder="Last Name" onChange={change} />
        <br />
        <input type="text" name="user_name" value={userName} placeholder="User Name" onChange={change} />
        <br />
        <input type="radio" name="gender" value="male" checked={maleCheck} onChange={change}/>
        <br />
        <input type="radio" name="gender" value="female" checked={femaleCheck} onChange={change}/>
        <br />
        <input type="text" name="headline" value={headline} placeholder="Headline" onChange={change} />
        <br />
        <textarea type="text" name="user_story" value={userStory} placeholder="Please Leave us your Valentine Day story here" onChange={change} />
        <br />
        <Button clicked={clicked}>add story</Button>
      </div>
    </div>
  );
}

export default FormModal;