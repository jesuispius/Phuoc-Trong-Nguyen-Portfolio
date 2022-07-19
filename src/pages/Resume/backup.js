import "./resume.css";
import { 
    IoLocationSharp,
    IoSchoolSharp,
    IoMedalSharp
} from "react-icons/io5";

const IconColor = {
    backgroundColor: "#000",
    color: "#e75eff",
    width: 20,
    height: 20
}

const ResumeInfo = () => { 
    return (
        <div className="resume-content">
            <div id="resume-content-self">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 img text-center resume-content-self-image m-auto" data-aos="flip-up">
                        <img src="image/resumeresize.jpg" alt="photograph-resume" loading="lazy"/>
                    </div>
                    <div className="resume-content-self-text col-12 col-md-8 mt-4 mt-md-0 ps-md-5">
                        <p className="h2">PHUOC T. NGUYEN</p>
                        <p className="h5">- Undergraduate Student -</p>
                        <br/>
                        <p className="h6">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA80FC" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </span> 
                        Portland, Oregon
                        </p>
                        <p className="h6" style="text-decoration: none; color: white;">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA80FC" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                            </svg>
                        </span> 
                        phuocpius.nguyen8@gmail.com
                        </p>
                        <p className="h6" style="text-decoration: none; color: white;">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA80FC" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                        </span> 
                        (971)-563-5082
                        </p>

                        <div id="social-contact">
                        <a type="button" className="btn btn-magenta-outline" href="https://www.linkedin.com/in/phuoc-nguyen-trong/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA80FC" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                            LinkedIn
                        </a>
                        <a type="button" className="btn btn-magenta-outline" href="https://github.com/jesuispius" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA80FC" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            Github
                        </a>
                        <a type="button" className="btn btn-magenta-outline" href="https://www.facebook.com/Phuocpius/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA80FC" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                            Facebook
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ResumeObjective = () => {
    return (
        <div id="resume-content-obj" data-aos="fade-up">
            <div className="resume-header-tab">
                <div className="vertical-line"></div>
                <div className="text-center fs-4">&#60;Career Objective/&#62;</div>
                <div className="vertical-line"></div>
            </div>
            <div className="resume-content-obj">
                Highly-adaptable and passionate Computer Science student seeking a position as a professional full-stack web developer or a software developer to build apps that make everyone's lives better. Eager, ready to work and willing to learn.
            </div>
        </div>
    )
}

const personal_education = [
    {
        time_period: "Sept 2020 - June 2022",
        school: "Portland State University",
        location: "Portland, OR",
        degree: "Bachelor of Science Degree in Computer Science",
        GPA: "GPA: 4.0"
    },
    {
        time_period: "April 2018 - June 2020",
        school: "Portland Community College",
        location: "Portland, OR",
        degree: "Associate of Science - Transfer Program Degree",
        GPA: "GPA: 4.0"
    }
]

const ResumeEducation = () => {
    return (
        <div className="resume-content-education shadow-custom text-white">
            {
                personal_education && (
                    personal_education.map((each, index) => {
                        return (
                            <div key={index}>
                                <div className="row justify-content-center resume-content-education-school">
                                    <div className="col-12 col-md-3 period ps-4 ps-md-0 fw-bold">
                                        { each.time_period }
                                    </div>
                                    <div className="col-12 col-md-6 resume-content-education-text ms-md-4 ps-4">
                                        <p className="h4 fw-bold">
                                            { each.school }
                                        </p>
                                        <small>
                                            <span className="me-2">
                                                <IoLocationSharp
                                                    style={IconColor}
                                                />
                                            </span> 
                                            { each.location }
                                        </small>
                                        <br/><br/>
                                        <small>
                                            <span className="me-2">
                                                <IoSchoolSharp
                                                    style={IconColor}
                                                />
                                            </span> 
                                            { each.degree }
                                        </small> 
                                        <br/>
                                        <small>
                                            <span className="me-2">
                                                <IoMedalSharp
                                                    style={IconColor}
                                                />
                                            </span> 
                                            { each.GPA }
                                        </small>
                                        <br/>
                                    </div>
                                </div>
                                {
                                    index % 2 === 0 ? (
                                        <>
                                            <br /><br />
                                        </>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}


const Resume = () => {
    return (
        <div>
            <section id="resume" className="container resume-section">
                <h1 className="font-nunito">.resume():</h1>

                <div data-aos="fade-up">
                    <div id="resume-content-education" data-aos="fade-up">
                        <div className="resume-header-tab">
                            <div className="vertical-line"></div>
                            <div className="text-center fs-4">&#60;Education/&#62;</div>
                            <div className="vertical-line"></div>
                        </div>

                        <ResumeEducation />

                        <div id="resume-content-skills" className="col-12" data-aos="fade-up">
                            <div className="resume-header-tab">
                                <div className="vertical-line"></div>
                                <div className="text-center fs-4">&#60;Skills/&#62;</div>
                                <div className="vertical-line"></div>
                            </div>
                            <div className="resume-content-skills"></div>
                        </div>


                        <div id="resume-content-languages" className="col-12" data-aos="fade-up">
                            <div className="resume-header-tab">
                                <div className="vertical-line"></div>
                                <div className="text-center fs-4">&#60;Languages/&#62;</div>
                                <div className="vertical-line"></div>
                            </div>
                            <div className="resume-content-languages"></div>
                        </div>

                        <div className="row" id="resume-pdf">
                            <a 
                                href="docs/Phuoc_Nguyen_Resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Click to see my pdf version!
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume;
