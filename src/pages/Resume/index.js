import "./resume.css";
import { 
    IoLocationSharp,
    IoSchoolSharp,
    IoMedalSharp,
    IoBriefcaseSharp
} from "react-icons/io5";
import Progress from "../../components/Progress";
import Icon from "../../components/DevIcon";


const ResumeObjective = () => {
    return (
        <div 
            id="resume-content-obj" 
            data-aos="fade-up"
            data-aos-duration="1300"
        >
            <div className="resume-header-tab">
                <div className="vertical-line d-none"></div>
                <div className="text-center fs-4 text-hard-orange">Career Objective</div>
                <div className="vertical-line"></div>
            </div>

            <div className="resume-content-obj font-nunito">
                <span className="fs-6">&#8220;</span>
                Highly-adaptable and passionate Computer Science student seeking a position as a professional full-stack web developer or a software developer to build apps that make everyone's lives better. Eager, ready to work and willing to learn.
                <span className="fs-6">&#8221;</span>
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
        <div className="resume-content-education">
            {
                personal_education && (
                    personal_education.map((each, index) => {
                        return (
                            <div key={index}>
                                <div className="row justify-content-center resume-content-education-school p-2">
                                    <div className="col-12 col-md-3 period ps-4 ps-md-0 fw-bold">
                                        <button 
                                            type="button" 
                                            className="btn btn-sm btn-warning rounded-circle"
                                        >
                                            <IoBriefcaseSharp />
                                        </button>
                                        <span className="ms-2">
                                            { each.time_period }
                                        </span>
                                    </div>
                                    <div className="col-12 col-md-6 resume-content-education-text ms-md-4 ps-4 text-dark">
                                        <p className="h4 fw-bold">
                                            { each.school }
                                        </p>
                                        <div className="hstack gap-3">
                                            <div className="ms-auto">
                                                <small>
                                                    <span className="me-1">
                                                        <IoLocationSharp
                                                            className="resume-content-education-icon"
                                                        />
                                                    </span> 
                                                    { each.location }
                                                </small>
                                            </div>
                                        </div>
                                        <small>
                                            <span className="me-2">
                                                <IoSchoolSharp
                                                    className="resume-content-education-icon"
                                                />
                                            </span> 
                                            { each.degree }
                                        </small> 
                                        <br/>
                                        <small>
                                            <span className="me-2">
                                                <IoMedalSharp
                                                    className="resume-content-education-icon"
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


const IntermediateSkillLevel = [
    "python", "react", "javascript", "cplusplus", "html", "css3", "bootstrap", "tailwindcss", "postgresql", "mysql"
];

const BasicSkillLevel = [
    "flask", "nodejs", "typescript", "java", "jquery", "materialui", "express", "numpy", "nextjs", "vim"
]

const ResumeSkill = ({list_items}) => {
    return (
        <div className="container row gap-2 m-0 justify-content-center">
        {
            list_items.map((item, index) => {
                return (
                    <div 
                        key={index}
                        className={"p-2 col-4 col-sm-3 col-md-2 col-lg-1 text-center"}
                    >
                        <Icon 
                            icon={item}
                            className={"fs-1 text-hard-orange"} 
                            styles={""}
                            isPrinted={true}
                            printClasses={"text-hard-orange fw-bold"}
                        />
                    </div>
                )
            })
        }
        </div>
    )
}

const Resume = () => {
    return (
        <div>
            <section id="resume" className="container resume-section">
                <h1 className="font-nunito section-title-color d-none">Resume</h1>

                <div 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <ResumeObjective />

                    <div 
                        id="resume-content-education" 
                        data-aos="fade-up" 
                        data-aos-duration="1300" 
                        className="mt-5"
                    >
                        <div className="resume-header-tab">
                            <div className="vertical-line d-none"></div>
                            <div className="text-center fs-4 text-hard-orange">Education</div>
                            <div className="vertical-line"></div>
                        </div>
                        <ResumeEducation />

                        <div 
                            id="resume-content-skills" 
                            className="col-12 mt-5" 
                            data-aos="fade-up" 
                            data-aos-duration="1300"
                        >
                            <div className="resume-header-tab">
                                <div className="vertical-line d-none"></div>
                                <div className="text-center fs-4 text-hard-orange">Skills</div>
                                <div className="vertical-line"></div>
                            </div>

                            <div className="resume-content-skills">
                                <div className="row justify-content-center">
                                    <div className="text-center text-hard-orange fw-bold font-nunito col-8 col-md-4 col-lg-3 mb-4 p-2">
                                        Intermediate Skill Level
                                    </div>
                                </div>
                                <ResumeSkill list_items={IntermediateSkillLevel} />

                                <div className="row justify-content-center mt-3">
                                    <div className="text-center text-hard-orange fw-bold font-nunito col-8 col-md-4 col-lg-3 mb-4 p-2">
                                        Basic Skill Level
                                    </div>
                                </div>
                                <ResumeSkill list_items={BasicSkillLevel} />
                            </div>
                        </div>


                        <div 
                            id="resume-content-languages" 
                            className="col-12 mt-5" 
                            data-aos="fade-up" 
                            data-aos-duration="1300"
                        >
                            <div className="resume-header-tab">
                                <div className="vertical-line d-none"></div>
                                <div className="text-center fs-4 text-hard-orange">Languages</div>
                                <div className="vertical-line"></div>
                            </div>

                            <div className="resume-content-languages">
                                <div className="row justify-content-center">
                                    <div className="col-6 col-lg-4 p-2 text-center">
                                        <Progress percentage="100"/>
                                        <div className="py-2">Vietnamese</div>
                                        <small className="fst-italic">- Native proficiency -</small>
                                    </div>

                                    <div className="col-6 col-lg-4 p-2 text-center">
                                        <Progress percentage="70"/>
                                        <div className="py-2">English</div>
                                        <small className="fst-italic">- Full professional proficiency -</small>
                                    </div>

                                    <div className="col-6 col-lg-4 p-2 text-center">
                                        <Progress percentage="50"/>
                                        <div className="py-2">French</div>
                                        <small className="fst-italic">- Elementary proficiency -</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div 
                            className="row my-4" 
                            id="resume-pdf"
                            data-aos="fade-up" 
                            data-aos-duration="1300"
                        >
                            <a 
                                href="docs/PhuocTrongNguyen_RESUME.pdf" 
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
