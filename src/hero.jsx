import { useNavigate } from 'react-router-dom';
import faust from './assets/faust.png'
function Hero() {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        document.querySelector('.hero-container').classList.add('slide-out'); 
        setTimeout(() => {
            navigate('/about');
        }, 500);
    };

    return (
        <div className="hero-container">
            <div className="left-hero">
                <p>Hi, I'm</p>
                <div className="name">
                    <h1 style={{color:"#d49b72", fontFamily:'Playfair Display'}}>Faustine</h1>
                    <h1 style={{color:"Black", fontFamily:'Playfair Display'}}>Delica</h1>
                    <p>Artist & Web Developer</p>
                </div>
                <div className="button-container">
                    <button onClick={handleAboutClick}>About Me</button>
                </div>
            </div>
            <div className="right-hero">
                <img src={faust} alt="Faustine Delica" />
            </div>
        </div>
    );
}
export default Hero