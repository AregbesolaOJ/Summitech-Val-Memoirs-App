import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button';

const FormModal = ({ firstName, lastName, userName, maleCheck, femaleCheck, closeClicked, headline, userStory, change, clicked }) => {
  return (
      <div className="modal">
        <div className="modal-main">
          <div className="close-modal" onClick={closeClicked}>
              <FontAwesomeIcon icon="window-close" size="3x" style={{width: '100%', height: '100%'}}/>
          </div>
          <div className="formModal">
            <div className="user-form">
              <input type="text" name="first_name" value={firstName} placeholder="First Name" onChange={change} />
              <br />
              <input type="text" name="last_name" value={lastName} placeholder="Last Name" onChange={change} />
              <br />
              <input type="text" name="user_name" value={userName} placeholder="User Name" onChange={change} />
              <br />
              <input type="radio" name="gender" value="male" checked={maleCheck} onChange={change}/> Male
              <br />
              <input type="radio" name="gender" value="female" checked={femaleCheck} onChange={change}/>Female
              <br />
              <input type="text" name="headline" value={headline} placeholder="Headline" onChange={change} />
              <br />
              <textarea type="text" name="user_story" value={userStory} placeholder="Please Leave us your Valentine Day story here" onChange={change} />
              <br />
              <Button clicked={clicked}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default FormModal;