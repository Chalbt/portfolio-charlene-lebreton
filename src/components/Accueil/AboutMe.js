import "../../styles/Accueil/AboutMe.css";
import FondAbout from "../../assets/fond-rond-beige.png"

function AboutMe() {
    return (
        <div>
            <div className='id' id="about"></div>
            <div className='about-me'>
                <div className='presentation'>
                    <h3>About me</h3>
                    <p>I have completed a 6-month web developer training program through OpenClassrooms, where I acquired extensive knowledge and expertise in frontend technologies such as HTML, CSS, JavaScript, and React, as well as backend development using Node.js and Express. Additionally, I have gained proficiency in SEO techniques, project management, debugging, and optimization.</p>
                    <p>Throughout my training, I have developed strong time management skills and the ability to work effectively under tight deadlines. I have also honed my presentation skills, allowing me to deliver compelling and comprehensive client presentations.</p>
                    <p>With a solid foundation in web development and a passion for creating innovative and user-friendly web applications, I am committed to continuous learning and growth in the field. I am excited to take on new challenges and contribute to exciting projects in the industry.</p>
                </div>
                <div className="about-accroche">
                    <div className="background-about" style={{ backgroundImage: `url(${FondAbout})` }}></div>
                    <div className="about-opportunities">
                        <p>I'm excited about new job opportunities where I can make a meaningful impact, continue learning, and grow professionally. If you have an exciting opportunity that aligns with my skills and experience, feel free to get in touch.</p>
                        <p className="lets-connect">Let's connect and explore the possibilities together !</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe