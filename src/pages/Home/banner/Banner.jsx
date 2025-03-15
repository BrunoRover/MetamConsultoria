import "./banner.css"
import useNavigation from "../../../hooks/useNavigation";

const Banner = () => {
    const { scrollToElement, openLink, openWhatsApp } = useNavigation();

    let phoneNumber = "5548920029217";
    let message = "Olá! Gostaria de saber mais informações.";
    return (
        <div className="banner-container">
            <div className="banner-content">

                <div className="banner-heading" data-aos="zoom-in">
                    <h3>"Prevenir e mitigar riscos é tão
                        essencial quanto responder a
                        desastres pois a verdadeira
                        eficácia está na preparação que
                        transforma incertezas em força
                        e resiliência comunitária"
                    </h3>
                </div>

                <div className="banner-subheading" data-aos="flip-up" data-aos-delay="400">
                    <p>CEO: Kleber de Moura</p>
                </div>

                <div className="banner-buttons" >
                    <button className="banner-appointment-button" onClick={() => openWhatsApp(phoneNumber, message)}>Entrar em Contato</button>
                    <button className="banner-learn-button" onClick={() => scrollToElement("about")}>Saiba Mais</button>
                </div>

            </div>



        </div>
    )
}

export default Banner