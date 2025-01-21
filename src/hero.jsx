import faust from './assets/faust.png'
function Hero(){
    return(
        <>
        <div className="hero-container">
            <div className="left-hero">
                <p>Hi, I'm</p>
                <div className="name">
                    <h1 style={{color:"#d49b72", fontFamily:'Playfair Display'}}>Faustine</h1><h1 style={{color:"Black", fontFamily:'Playfair Display'}}>Delica</h1>
                    <p>Artist & Web Developer</p>
                    <span></span>
                </div>
                <div className="button-container">
                    <button>View My Projects</button>
                </div>
            </div>
            <div className="right-hero">
                <img src={faust} alt="" />
            </div>
        </div>
        </>
    )
}


export default Hero