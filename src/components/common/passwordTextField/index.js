/* eslint-disable react/prop-types */
import { useState } from "react";
import './styles.scss'

// Input Password Component
export default function PasswordTextField(props) {
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  var spanIcon = passwordShown ? 'text-span fa fa-eye' : 'text-span fa fa-eye-slash'

  return (
    <div className='segment'>
      <div className='container-text'>
        <input className="segment-inner" type={passwordShown ? "text" : "password"} value={props.text} />
        <div className='segment-inner-post'>
          <span className={spanIcon} onClick={togglePassword} ></span>
        </div>
      </div>
    </div>
  );
}