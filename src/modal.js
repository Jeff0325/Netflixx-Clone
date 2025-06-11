    import React from 'react';
    import './modal.css';

    function Modal({ trailerUrl, onClose }) {
        if (!trailerUrl) return null; 
    return (
        <div className="modal">
        <div className="modal__content">
            <span className="modal__close" onClick={onClose}>X</span>
            <iframe
            className="modal__iframe"
            width="100%"
            height="315"
            src={trailerUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
        </div>
    );
    }

    export default Modal;
