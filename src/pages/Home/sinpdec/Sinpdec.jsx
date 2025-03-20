import "./sinpdec.css"
import defesaCivil from "../../../assets/images/defesaCivil.png"

const Sinpdec = () => {
    return (
        <div className="sinpdec-container">

            <div className="sinpdec-wrapper">

                <div className="sinpdec-images">
                    <img className="sinpdec1" src={defesaCivil} alt="sinpdec1" />
                </div>

                <div className="sinpdec-details">
                    <div className="sinpdec-detail-head">
                        <h6>IMPORTANTE</h6>
                    </div>
                    <div className="sinpdec-detail-body">
                        <p>A <b>Metam Consultoria e Assessoria</b> cumpre todos os requisitos estabelecidos pelo <b>Decreto nº 10.593</b>, de 24 de dezembro de 2020.
                            <br />
                            <br />
                            Somos uma empresa integrante do <b>Sistema Nacional de Proteção e Defesa Civil.</b>
                        </p>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Sinpdec