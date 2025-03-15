import { useState } from "react";
import { Link } from "react-router-dom";
import useNavigation from "../../hooks/useNavigation";
import section from "../../data/sections";
import "./footer.css";
import footerImage from "../../assets/images/logometam.png";

const Footer = () => {
    const { scrollToElement } = useNavigation();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="footer-container">
            <div className="footer-logo">
                <img src={footerImage} alt="footer-logo" />
                <p>Metam Consultoria <br /> e Assessoria Ltda</p>
            </div>

            {section.map((section, index) => (
                <div key={index} className={`footer-section ${activeIndex === index ? "open" : ""}`}>
                    <div className="footer-title" onClick={() => toggleSection(index)}>
                        {section.title}
                        <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>▼</span>
                    </div>
                    <ul className="footer-lists">
                        {section.items.map((item, i) => (
                            <li key={i}>
                                {item.link.startsWith('http') ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.text}
                                    </a>
                                ) : (
                                    <Link
                                        to={`${item.link}`}
                                        onClick={(e) => {
                                            if (item.link !== "inicio" && item.link !== "services" && item.link !== "resources" && item.link !== "strategic-actions" && item.link !== "courses") return;
                                            e.preventDefault();
                                            scrollToElement(item.link);
                                        }}
                                    >
                                        {item.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Footer;
