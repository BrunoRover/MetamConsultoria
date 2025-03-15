import "./courses.css";
import coursesData from "../../../data/courses";


const Courses = () => {
    return (
        <section className="courses-section" id="courses">
            <h3>Nossos Cursos</h3>
            <p>Oferecemos treinamentos especializados e personalizados para desenvolver suas habilidades, aprimorar seu desempenho e garantir excelência operacional, proporcionando conhecimento prático e atualizado para enfrentar desafios com confiança e eficiência.</p>

            <div className="courses-container">
                {coursesData.map((course, index) => (
                    <div key={index} className="course-card">
                        <div className="course-image-container">
                            <img src={course.image} alt={course.title} className="course-image" />
                        </div>
                        <div className="course-content">
                            <h4>{course.title}</h4>
                            <p className="course-short-description">{course.description}</p>
                            <p className="course-details">{course.details}</p>
                            <button
                                className="course-button"
                                onClick={() => window.location.href = course.link}
                            >
                                Saiba mais sobre esse curso
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;
