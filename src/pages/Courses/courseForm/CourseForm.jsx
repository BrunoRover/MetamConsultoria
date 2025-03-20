import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useToast from "../../../hooks/useToast";
import coursesData from "../../../data/courses";
import emailjs from "@emailjs/browser";
import img from "../../../assets/images/banner2.jpg";
import "./modalForm.css";

export default function ModalForm() {
    const { courseId } = useParams();
    const { showToast } = useToast();
    const [paymentMethod, setPaymentMethod] = useState("");
    const [atividade, setAtividade] = useState("");
    const [possuiDrone, setPossuiDrone] = useState("");
    const [displayedPrice, setDisplayedPrice] = useState("");
    const [course, setCourse] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleAtividadeChange = (e) => setAtividade(e.target.value);
    const handlePossuiDroneChange = (e) => setPossuiDrone(e.target.value);
    const handlePaymentChange = (e) => {
        const selectedPayment = e.target.value;
        setPaymentMethod(selectedPayment);

        if (selectedPayment === "pix" || selectedPayment === "boleto" && course) {
            setDisplayedPrice(course.promotionalPrice);
        } else if (course) {
            setDisplayedPrice(course.price);
        }
    };

    useEffect(() => {
        const foundCourse = coursesData.find(c => c.link === `/curso/${courseId}`);
        if (foundCourse) {
            setCourse(foundCourse);
            setDisplayedPrice(foundCourse.price);
        }
    }, [courseId]);

    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_rq0rtt2", "template_72yszbe", formRef.current, "wVOr-7Q-6wdbPQ8ly")
            .then(() => {
                showToast("E-mail enviado com sucesso!", "success");
                e.target.reset();
                setIsOpen(false);
            })
            .catch(() => {
                showToast("Ocorreu um erro ao enviar o e-mail.", "error");
            });

    };

    if (!course) return <div>Curso não encontrado</div>;

    return (
        <>
            <div className="modal-form">
                {!isOpen && (
                    <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
                        Inscreva-se
                    </button>
                )}

                {isOpen && (
                    <div className="container-form">
                        <div className="form-image">
                            <img src={img} alt={course.title} />
                        </div>
                        <div className="form">
                            <form ref={formRef} onSubmit={sendEmail}>
                                <div className="form-header">
                                    <div className="title">
                                        <h1>Inscreva-se</h1>
                                        <input className="curso" id="curso" name="curso" value={course.title} readOnly />

                                    </div>
                                    <div className="form-button">
                                        <button type="button" onClick={() => setIsOpen(false)}>X</button>
                                    </div>
                                </div>

                                <div className="input-form">
                                    <div className="input-box">
                                        <label htmlFor="nome">Nome Completo</label>
                                        <input id="nome" type="text" name="nome" placeholder="Digite seu nome completo" required />
                                    </div>

                                    <div className="input-box">
                                        <label htmlFor="cpf">CPF</label>
                                        <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" required />
                                    </div>

                                    <div className="input-box">
                                        <label htmlFor="whatsapp">WhatsApp</label>
                                        <input id="whatsapp" type="text" name="whatsapp" placeholder="(xx) xxxxx-xxxx" required />
                                    </div>

                                    <div className="input-box">
                                        <label htmlFor="email">E-mail</label>
                                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
                                    </div>

                                    <div className="input-box">
                                        <label htmlFor="cidade">Cidade</label>
                                        <input id="cidade" type="text" name="cidade" placeholder="Digite sua cidade" required />
                                    </div>

                                    <div className="input-box">
                                        <label htmlFor="profissao">Profissão</label>
                                        <input id="profissao" type="text" name="profissao" placeholder="Digite sua profissão" required />
                                    </div>

                                    {course.title === "Pilotagem de Drone" && (
                                        <div className="input-box">
                                            <label htmlFor="possuiDrone">Possui Drone?</label>
                                            <select id="possuiDrone" name="possuiDrone" value={possuiDrone} onChange={handlePossuiDroneChange} required>
                                                <option value="">Selecione</option>
                                                <option value="sim">Sim</option>
                                                <option value="nao">Não</option>
                                            </select>
                                        </div>
                                    )}

                                    {possuiDrone === "sim" && (
                                        <div className="input-box">
                                            <label htmlFor="marcaModelo">Modelo</label>
                                            <input id="marcaModelo" type="text" name="marcaModelo" placeholder="Digite o modelo do drone" required />
                                        </div>
                                    )}
                                    {course.title === "Aeromédico" && (
                                        <div className="input-box">
                                            <label htmlFor="atividade">Médico ou Enfermeiro?</label>
                                            <select id="atividade" name="atividade" value={atividade} onChange={handleAtividadeChange} required>
                                                <option value="">Selecione</option>
                                                <option value="medico">Médico</option>
                                                <option value="enfermeiro">Enfermeiro</option>
                                            </select>
                                        </div>
                                    )}

                                    {atividade === "medico" && (
                                        <div className="input-box">
                                            <label htmlFor="crm">N° CRM</label>
                                            <input id="crm" type="text" name="crm" placeholder="Digite o número do CRM" required />
                                        </div>
                                    )}

                                    {atividade === "enfermeiro" && (
                                        <div className="input-box">
                                            <label htmlFor="coren">N° COREN</label>
                                            <input id="coren" type="text" name="coren" placeholder="Digite o número do COREN" required />
                                        </div>
                                    )}


                                    <div className="input-box">
                                        <label htmlFor="pagamento">Forma de Pagamento</label>
                                        <select id="pagamento" name="pagamento" value={paymentMethod} onChange={handlePaymentChange} required>
                                            <option value="">Selecione</option>
                                            <option value="credito">Cartão de Crédito</option>
                                            <option value="debito">Cartão de Débito</option>
                                            <option value="boleto">Boleto</option>
                                            <option value="pix">PIX</option>
                                        </select>
                                    </div>

                                    <div className="input-box">
                                        <label htmlFor="valor">Valor</label>
                                        <input type="text" id="valor" name="valor" value={displayedPrice} readOnly />
                                    </div>
                                </div>

                                <div className="continue-button-form">
                                    <button type="submit">Continuar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}