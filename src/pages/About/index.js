import { Fragment } from "react";
import "./about.css";
import "./blob_image.scss";
import { 
    IoPersonCircleOutline,
    IoPersonCircleSharp,
    IoHeartSharp,
    IoEarthSharp,
    IoLocationSharp,
    IoMailUnreadSharp,
    IoCallSharp,
    IoMegaphoneSharp
} from "react-icons/io5";


const About = () => {
    return (
        <Fragment>
            <section 
                id="about" 
                className="container main-section my-auto mb-3"
            >
                <h1 className="font-nunito section-title-color text-center mb-1">
                    About me!
                </h1>

                <div className="about-content mt-5" data-aos="fade-up" data-aos-duration="1000">
                    <div 
                        className="card-container container w-100" 
                        style={{backgroundColor: "#fcf398"}}
                    >
                        <div className="row justify-content-center">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div 
                                        className="profile" 
                                        data-aos="zoom-in" 
                                        data-aos-duration="1200"
                                    > 
                                        <img 
                                            src={require("../../image/photograph_2.png")}
                                            alt="Photograph of myself" 
                                            id="self-image" 
                                            loading="lazy" 
                                        />
                                    </div>

                                    <div 
                                        className="card-subtitle" 
                                        data-aos="fade-up" 
                                        data-aos-duration="1000"
                                    >
                                        <blockquote className="font-nunito text-start">
                                            <span>&#8220;</span>
                                            Hello! My name is <strong className="text-my-secondary">Phuoc Nguyen</strong>. 
                                            I graduated Summa Cum Laude from <strong className="text-my-secondary">Portland State University</strong> with my B.S in Computer Science.
                                            I have 4+ years of programming experience and I'm passionate about the web development and data. I love coding, travelling, sport and outdoor activities. 
                                            <span>&#8221;</span>
                                        </blockquote>
                                    </div>

                                    <div 
                                        className="container pt-3" 
                                        data-aos="fade-up" 
                                        data-aos-duration="1000"
                                    >
                                        <div className="row text-start ms-md-4 text-break">
                                            <div className="col-12 col-md-6 p-2">
                                                <IoPersonCircleOutline className="icon-about" />
                                                <small className="text-lg">
                                                    First Name:
                                                    <span className="ms-1 fw-bold">
                                                        Phuoc
                                                    </span>
                                                </small>
                                            </div>

                                            <div className="col-12 col-md-6 p-2">
                                                <IoPersonCircleSharp className="icon-about" />
                                                <small className="text-lg">
                                                    Last Name:
                                                    <span className="ms-1 fw-bold">
                                                        Nguyen
                                                    </span>
                                                </small>
                                            </div>

                                            <div className="col-12 col-md-6 p-2">
                                                <IoHeartSharp className="icon-about" />
                                                <small className="text-lg">
                                                    Age:
                                                    <span className="ms-1 fw-bold">
                                                        22
                                                    </span>
                                                </small>
                                            </div>

                                            <div className="col-12 col-md-6 p-2">
                                                <IoMailUnreadSharp className="icon-about" />
                                                <small className="text-lg">
                                                    Email:
                                                    <span className="ms-1 fw-bold fs-7">
                                                        phuocpius.nguyen8@gmail.com
                                                    </span>
                                                </small>
                                            </div>

                                            <div className="col-12 col-md-6 p-2">
                                                <IoMegaphoneSharp className="icon-about"/>
                                                <small className="text-lg">
                                                    Pronouns:
                                                    <span className="ms-1 fw-bold">
                                                        He, him, his
                                                    </span>
                                                </small>
                                            </div>

                                            <div className="col-12 col-md-6 p-2">
                                                <IoCallSharp className="icon-about" />
                                                <small className="text-lg">
                                                    Phone:
                                                    <span className="ms-1 fw-bold">
                                                        971-563-5082
                                                    </span>
                                                </small>
                                            </div>

                                            <div className="col-12 col-md-6 p-2">
                                                <IoEarthSharp className="icon-about" />
                                                <small className="text-lg">
                                                    Nationality:
                                                    <span className="ms-1 fw-bold">
                                                        Viet Nam
                                                    </span>
                                                </small>
                                            </div>

                                            <div className="col-12 col-md-6 p-2">
                                                <IoLocationSharp className="icon-about" />
                                                <small className="text-lg">
                                                    Location:
                                                    <span className="ms-1 fw-bold">
                                                        Portland, OR
                                                    </span>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;
