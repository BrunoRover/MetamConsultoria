import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Enterprise from '../pages/Home/enterprise/Enterprise';
import Footer from '../components/footer/Footer';
import Undrr from '../pages/Home/undrr/Undrr';
import Services from '../pages/Home/services/Services';
import HeroSection from '../pages/Home/hero/HeroSection';
import StrategicActions from '../pages/Home/strategicActions/StrategicActions';
import Resources from '../pages/Home/resources/Resources';
import Ceo from '../pages/Home/ceo/Ceo';
import Courses from '../pages/Courses/courses/Courses';
import WhatsappButton from '../components/btn-wpp/WhatsappButton';
import MaintenancePage from '../components/maintenancePage/MaintenancePage';
import CoursePage from '../pages/Courses/coursePage/CoursePage';
import Sinpdec from '../pages/Home/sinpdec/Sinpdec';


function AppRoutes() {
    return (
        <Router>
            <WhatsappButton
                phoneNumber="5548920029217"
                message="Olá! Gostaria de saber mais informações."
            />
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <Enterprise />
                        <Ceo />
                        <Undrr />
                        <Sinpdec />
                        <Services />
                        <Resources />
                        <StrategicActions />
                        <Courses />
                        <Footer />
                    </>
                } />
                <Route path="/maintenance" element={<MaintenancePage />} />
                <Route path="/curso/:courseId" element={<>  <CoursePage /> <Footer /></>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
