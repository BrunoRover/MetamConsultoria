import "./resources.css";
import resources from "../../../data/resources";

const Resources = () => {

    return (
        <div className="resources-section" id="resources">
            <h3>RECURSOS</h3>
            <p>
                A equipe de especialistas é composta por um grupo multidisciplinar, abrangendo os
                seguintes profissionais: Gestor de Riscos e Desastres, Técnicos em Pilotagem e
                Mapeamento com drones, Técnicos em mapeamento com GPS sonar, Engenheiro
                ambiental, Engenheiro civil e profissionais da área administrativa.

                Estamos preparados para oferecer serviços de alta qualidade, adotando uma abordagem
                técnica e orientada a resultados, nosso compromisso é contribuir para a criação de ações
                mais seguras e resilientes.

                Os profissionais-chave, mobilizados conforme as necessidades específicas de cada cliente,
                esta estrutura permite garantir a excelência dos resultados na gestão a ser implementada.
            </p>

            <div className="resource-cards">
                {resources.map((resource, index) => (
                    <div key={index} className="resource-card">
                        <img src={resource.img} alt="image resource" loading="lazy" />
                        <div className="resource-content">
                            <h4>{resource.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
