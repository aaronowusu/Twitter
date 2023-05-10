import React from "react";
import useLoginModal from '@/hooks/useLoginModal';
import useRegistrationModal from "@/hooks/useRegistrationModal";

const Button = (props) => {
  const loginModal = useLoginModal();
  const registrationModal = useRegistrationModal();

  const handleClick = () => {
    if(props.children === 'Log in') {
      loginModal.open();
    }
    else if(props.children === 'Sign up') {
      registrationModal.open();
    }
  }
 
  return (
    <button
      className={`${props.className} hover:opacity-80 flex-1 py-1 mx-1 px-4 font-medium rounded-full 
   shadow-md text-center`}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
