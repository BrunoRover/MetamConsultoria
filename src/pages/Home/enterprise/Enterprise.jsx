import "./enterprise.css"
import enterprise1 from "../../../assets/images/enterprise.png"


const Enterprise = () => {
    return (
        <div className="enterprise-container" id="about">
            <h3>Metam Consultoria e Assessoria LTDA</h3>

            <div className="enterprise-wrapper">

                <div className="enterprise-details">
                    <div className="enterprise-detail-head">
                        <h6>Sobre</h6>
                    </div>
                    <div className="enterprise-detail-body" >
                        <p>A Metam Consultoria e Assessoria Ltda, com sede em
                            São João Batista, Santa Catarina, é especializada na
                            gestão de riscos e desastres, oferecendo soluções
                            completas para prevenção, mitigação e gerenciamento
                            de crises. Atendemos governos em todo o Brasil com
                            um serviço técnico e personalizado.
                            <br />
                            Entre nossas principais atividades estão a elaboração
                            de planos de contingência, captação de recursos
                            federais, otimização de estratégias de resposta a
                            desastres e capacitações para equipas locais.
                            <br />

                            Contamos com uma equipa altamente qualificada, que
                            desenvolve soluções sob medida para cada estado ou
                            município, promovendo segurança e resiliência.
                            <br />

                            Nosso compromisso é apoiar governos na construção
                            de comunidades mais seguras e preparadas para
                            enfrentar crises.
                        </p>
                    </div>

                </div>

                <div className="enterprise-images">
                    <img className="enterprise1" src={enterprise1} alt="enterprise1" />
                </div>

            </div>
        </div>
    )
}

export default Enterprise