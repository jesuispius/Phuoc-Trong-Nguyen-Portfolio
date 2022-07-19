import { Fragment } from "react";
import { 
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoGithub
} from "react-icons/io5";
import NavBar from "../../components/NavBar";
import "./intro.css";
import "../../index.scss";


const IconColor = {
    backgroundColor: "transparent",
    color: "black",
    width: 20,
    height: 20
}


const IntroImage = () => {
    return (
        <main 
            id="intro-section-main-content" 
            className="col-12"
        >
            <div className="blob-wrap">
                <picture className="blob-circle">
                    <source 
                        media="(min-width: 1140px)" 
                        srcSet={require("../../image/photograph_1140.png")} 
                    />
                    <source 
                        media="(min-width: 990px)" 
                        srcSet={require("../../image/photograph_990.png")} 
                    />
                    <source 
                        media="(min-width: 720px)" 
                        srcSet={require("../../image/photograph_720.png")} 
                    />
                    <img 
                        src={require("../../image/photograph_720.png")} 
                        alt="photograph"  
                        loading="lazy"
                    />
                </picture>
            </div>
        </main>
    )
}

const Intro = () => {
    return (
        <Fragment>
            <div className="intro-section-container row gx-0">
                <NavBar />
                
                <div 
                    className="row" 
                    style={{
                        height: "100vh"
                    }}
                >
                    <div className="col-12 col-xl-6 m-auto">
                        <ul className="intro-porfolio-text">
                            <li 
                                data-aos="flip-up" 
                                data-aos-duration="1500"
                            >
                                HI, I'M
                            </li>

                            <li 
                                data-aos="flip-up" 
                                data-aos-duration="1500"
                            >
                                PHUOC NGUYEN
                            </li>

                            <li 
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <h6>"A full-stack web developer and software engineer enthusiast"</h6>
                            </li>

                            <li 
                                id="list-icons-social" 
                                data-aos="fade-up" 
                                data-aos-duration="1500"
                            >
                                <a 
                                    href="https://www.linkedin.com/in/phuoc-nguyen-trong/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="LinkedIn"
                                >
                                    <IoLogoLinkedin style={IconColor} />
                                </a>

                                <a 
                                    href="https://github.com/jesuispius" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Github"
                                >
                                    <IoLogoGithub style={IconColor} />
                                </a>

                                <a 
                                    href="https://www.facebook.com/Phuocpius/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Facebook"
                                >
                                    <IoLogoFacebook style={IconColor} />
                                </a>

                                <a 
                                    href="https://www.instagram.com/im.pius/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Instagram"
                                >
                                    <IoLogoInstagram style={IconColor} />
                                </a>
                            </li>
                            
                            <li data-aos="fade-up" data-aos-duration="1500">
                                <a 
                                    type="button" 
                                    className="btn btn-my-primary mt-3 mt-xl-0" 
                                    href="#about"
                                >
                                    About me!
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div 
                        className="col-12 col-lg-5 m-lg-auto" 
                        data-aos="fade-left" 
                        data-aos-duration="1500"
                    >
                        <IntroImage />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Intro;