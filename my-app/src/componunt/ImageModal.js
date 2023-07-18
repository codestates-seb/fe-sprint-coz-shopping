import React from 'react';
import './ImageModal.css';

function ImageModal({ imageUrl, title, closeModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <img className='modal-content-img' src={imageUrl} alt={title} />
                <button  onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default ImageModal;
