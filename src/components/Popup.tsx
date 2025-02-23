import React from "react";
import "./Popup.css"; 
interface PopupProps {
  message: string;
  type: "success" | "error"; 
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, type, onClose }) => {
  return (
    <div className={`popup ${type}`}>
      <p>{message}</p>
      <button onClick={onClose}>OK</button>
    </div>
  );
};

export default Popup;
