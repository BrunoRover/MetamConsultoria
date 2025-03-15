import React, { useState, useEffect } from 'react';
import "./heroSection.css";
import backgroundImage from "../../../assets/images/bombeiros.jpg";
import backgroundImage2 from "../../../assets/images/banner3.jpg";
import backgroundImage3 from "../../../assets/images/banner2.jpg";
import Navbar from "../../../components/navbar/Navbar";
import Banner from "../banner/Banner";

const HeroSection = () => {
    const images = [backgroundImage, backgroundImage2, backgroundImage3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="hero-section" id='inicio'>
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`hero-bg ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}

            <Navbar />
            <Banner />
        </div>
    );
};

export default HeroSection;
