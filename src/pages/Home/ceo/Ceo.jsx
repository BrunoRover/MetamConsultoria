import "./ceo.css"
import ceo from "../../../assets/images/ceo.jpg"

const Ceo = () => {
    return (
        <div className="ceo-container">

            <div className="ceo-wrapper">

                <div className="ceo-images">
                    <img className="ceo1" src={ceo} alt="ceo1" />
                </div>

                <div className="ceo-details">
                    <div className="ceo-detail-head">
                        <h6>CEO da Metam</h6>
                    </div>
                    <div className="ceo-detail-body">
                        <p>Kleber de Moura é um profissional com 20 anos de experiência
                            nas áreas de segurança e gestão de emergências. Ao longo de sua
                            trajetória, atuou em instituições renomadas, como o Exército Brasileiro,
                            o Corpo de Bombeiros e a Defesa Civil.
                        </p>
                        <br />
                        <p>
                            Possui formação em Gestão de Segurança Pública, é pós-graduado em Emergências
                            e Desastres e também técnico em Defesa Civil. Além disso, participou de diversas
                            capacitações, tanto em nível nacional quanto internacional, consolidando sua expertise
                            no gerenciamento de crises e situações de risco.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Ceo