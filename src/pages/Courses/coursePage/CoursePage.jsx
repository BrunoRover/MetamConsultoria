import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import useNavigation from "../../../hooks/useNavigation";
import coursesData from "../../../data/courses";
import ModalForm from "../../Courses/courseForm/CourseForm";
import "./coursePage.css";

const CoursePage = () => {
    const { courseId } = useParams();
    const course = coursesData.find(c => c.link === `/curso/${courseId}`);
    const { scrollToElement, openLink, openWhatsApp } = useNavigation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === course.imagePage.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [course.imagePage.length]);

    const handleClick = () => {
        const url = `https://docs.google.com/forms/d/e/1FAIpQLScCfkh5ViM-_xsOqZRqYu5NwdM3ZL1lZk1R9CPIlqNYiOKNoA/viewform`;
        window.open(url, '_blank');
    };

    let phoneNumber = "5548920029217"
    let message = "Olá! Gostaria de saber mais informações sobre o curso de " + course.title + "."

    return (
        <div>
            <nav>
                <ul className="nav__links">
                    <li className="link"><a href="/"><FaHome /> INÍCIO</a></li>
                </ul>
            </nav>
            <div className="container">
                <div
                    className="container__left"
                    style={{
                        backgroundImage: `url(${course.imagePage[currentImageIndex]})`,
                        transition: "background-image 0.5s ease-in-out"
                    }}
                >
                    <div className="left__content"></div>
                </div>
                <div className="container__right">
                    <img src={course.image} alt="logo" className="logo" style={{ width: "30%", height: "auto" }} />
                    <div className="right__content">
                        <h1>{course.title}</h1>
                        <h4>{course.level}</h4>
                        <p>{course.description}</p>
                        <div className="action__btns">
                            {course.notDefined ? (
                                <button className="btn primary__btn">Curso em aberto</button>
                            ) :
                                <button className="btn primary__btn" onClick={() => openLink("https://docs.google.com/forms/d/e/1FAIpQLScCfkh5ViM-_xsOqZRqYu5NwdM3ZL1lZk1R9CPIlqNYiOKNoA/viewform")}>Inscreva-se</button>
                            }
                            <button className="btn secondary__btn" onClick={() => scrollToElement("about")}>Saiba mais</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="course-page-details" id="about">
                <h2>O que você aprenderá?</h2>
                <p>{course.details}</p>
            </section>
            <section className="why-choose">
                <h2>Por que escolher este curso?</h2>
                <p>{course.whyChoose}</p>
            </section>
            <section className="instructor">
                <h2>Instrutores</h2>
                <div className="instructor-list">
                    {course.instructor.map((inst, index) => (
                        <div className="instructor-info" key={index}>
                            <img src={inst.image} alt={inst.name} />
                            <div>
                                <h3>{inst.name}</h3>
                                <p>{inst.bio}</p>
                            </div>
                            <p>{inst.cod}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="course-container-details">
                <h2>Detalhes do Curso</h2>
                <div className="course-details-grid">
                    <div className="course-detail-item"><strong>Data de Início:</strong> {course.startDates?.join(", ")}</div>
                    <div className="course-detail-item"><strong>Local:</strong> {course.location}</div>
                    <div className="course-detail-item"><strong>Duração:</strong> {course.duration}</div>
                    <div className="course-detail-item"><strong>Categoria:</strong> {course.category}</div>
                    <div className="course-detail-item"><strong>Modalidade:</strong> {course.modality}</div>
                    <div className="course-detail-item"><strong>Certificação:</strong> {course.certification}</div>
                    <div className="course-detail-item"><strong>Público-alvo:</strong> {course.targetAudience}</div>
                    <div className="course-detail-item"><strong>Material Didático:</strong> {course.teachingMaterial}</div>

                </div>
            </section>
            {course.schedule.length > 1 ? (
                <div className="cronograma-container">
                    <h2 className="titulo-cronograma">Cronograma de Aulas</h2>
                    <div className="cronograma">
                        <div className="linha"></div>
                        {course.schedule.map((schedule, index) => (
                            <div key={index} className="evento">
                                <div className="esquerda">
                                    <div className="ponto"></div>
                                    <div className={`cartao ${schedule.cor}`}>
                                        <h3 className="tipo">{schedule.tipo}</h3>
                                        <span className="dia">{schedule.dia}</span>
                                        <p className="descricao">{schedule.descricao}</p>
                                        <small className="intervalo">{schedule.intervalo}</small>
                                    </div>
                                </div>
                                <div className="direita">
                                    <h2 className="title">{schedule.title}</h2>
                                    <p className="descricao">{schedule.right}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="cronograma-container"></div>
            )
            }
            {/*}
            <section className="testimonials">
                <h2>O que nossos alunos dizem?</h2>
                <div className="testimonials-list">
                    {course.testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <p>"{testimonial.comment}"</p>
                            <h4>- {testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
            */}
            <section className="faq">
                <h2>Perguntas Frequentes</h2>
                {course.faqs.map((item, index) => (
                    <div key={index} className="faq-item">
                        <h4>{item.question}</h4>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </section>
            {
                course.notDefined ? (
                    <section className="subscribe">
                        <h2>Ficou interessado?</h2>
                        <ModalForm />
                    </section>
                ) :
                    <section className="subscribe">
                        <h2>Ficou interessado?</h2>
                        <p>Aproveite essa oferta especial e comece sua jornada de aprendizado hoje mesmo!</p>
                        <p className="original-price">De: <span className="strike">{course.price}</span></p>
                        <p className="discounted-price">Por apenas: <strong>{course.promotionalPrice}</strong></p>
                        <button className="btn primary__btn" onClick={() => handleClick()}>{course.buttonText}</button>
                    </section>


            }
        </div >
    );
};


export default CoursePage;
