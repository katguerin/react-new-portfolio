import React, { useState } from 'react';

const Modal = ({onClose, currentPhoto}) => {
  const { name, category, description, image } = currentPhoto;

  return (
    // JSX
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/photos/${category}/${image.fileName}`)} alt="current category" />
        <p>{description}</p>
        <button onClick={onClose} type="button">Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;
