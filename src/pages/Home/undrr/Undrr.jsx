import "./undrr.css"
import image1 from "../../../assets/images/image.png"
import image2 from "../../../assets/images/image2.png"


const Undrr = () => {
  return (
    <div className="undrr-container">
      <h3>MAKING CITIES RESILIENT 2030 - U N D R R</h3>
      <p>Atualmente, nosso CEO e a empresa estão registrados como especialistas em apoiar a
        reestruturação de estados e municípios no Programa das Nações Unidas para a
        Redução de Riscos em Desastres, alinhando-se aos princípios estabelecidos no Marco
        de Sendai, que se estende até 2030.
        Essa atuação reflete nosso compromisso em promover a segurança e a resiliência dos
        municípios diante de desastres, com base nos quatro objetivos principais do
        programa Marco de Sendai, sendo eles;
      </p>
      <div className="undrr-wrapper">
        <div className="undrr-logo">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
        </div>
      </div>
    </div>
  )
}

export default Undrr