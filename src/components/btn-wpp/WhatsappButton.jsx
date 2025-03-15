import React from 'react';
import './whatsappButton.css';

const WhatsappButton = ({ phoneNumber, message }) => {
    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="whatsapp-button"
        >
            <span className="button-text">Fale Conosco no WhatsApp</span>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
            />
        </button>
    );
};

export default WhatsappButton;
