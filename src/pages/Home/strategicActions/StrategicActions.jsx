import "./strategicActions.css";

const StrategicActions = () => {
    return (
        <div className="strategic-actions" id="strategic-actions">
            <h3>Ações Estratégicas</h3>
            <p>
                Fundamentamos nosso trabalho em quatro objetivos estratégicos essenciais, com foco em
                oferecer soluções eficazes e adaptadas à realidade de cada região ou empresa. Nosso compromisso
                é desenvolver ações que promovam a segurança e resposta, a resiliência e o desenvolvimento
                sustentável, apoiando instituições governamentais na gestão de riscos e desastres.
            </p>

            <div className="action-cards">
                <div className="action-card">
                    <h4>Redução da Mortalidade</h4>
                    <p>
                        A preservação de vidas é nossa prioridade absoluta. Desenvolvemos estratégias que visam
                        prevenir e mitigar desastres, desde a elaboração de planos de contingência até treinamentos
                        e simulações práticas.
                    </p>
                </div>

                <div className="action-card">
                    <h4>Redução de Impactos Econômicos</h4>
                    <p>
                        Trabalhamos para identificar riscos e apoiar na captação de recursos, assegurando que as
                        instituições estejam preparadas para reduzir os custos associados a perdas e interrupções.
                    </p>
                </div>

                <div className="action-card">
                    <h4>Redução de Perdas em Infraestruturas Críticas</h4>
                    <p>
                        Oferecemos soluções personalizadas para proteger ativos críticos, ajudando a mitigar danos
                        e garantir a continuidade dos serviços essenciais.
                    </p>
                </div>

                <div className="action-card">
                    <h4>Aumento do Acesso à Informação</h4>
                    <p>
                        Trabalhamos para garantir dados precisos sobre riscos, além de oferecer treinamentos e
                        comunicação estratégica para decisões rápidas e assertivas em cenários de crise.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StrategicActions;
