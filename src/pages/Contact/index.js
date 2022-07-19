import { 
    IoLogoFacebook,
    IoLogoLinkedin,
    IoLogoGithub
} from "react-icons/io5";
import "./contact.css";
import ContactFormImage from "../../image/Get in touch-cuate-yellow.svg";

const ContactForm = () => {
    return (
        <div className="contact-content row">
            <form className="col-12 contact-content-form">
                <h1 className="section-title-color">Contact me!</h1>

                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Name" 
                    />
                    <label htmlFor="name">Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="yourname@example.com" 
                    />
                    <label htmlFor="email">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea 
                        className="form-control" 
                        id="message" 
                        style={{height: "100px"}} 
                        placeholder="Please type your message here!"
                    >
                    </textarea>
                    <label htmlFor="message">Comments</label>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-md btn-warning"
                    style={{fontSize: "14px"}}
                >
                    <span className="me-1">Submit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </form>
    
            <small className="text-center text-dark">--- OR ---</small>
    
            <div className="col-12 contact-content-social">
                <div className="contact-content-social-items">
                <a 
                    type="button" 
                    className="btn btn-lg btn-my-primary" 
                    href="https://www.linkedin.com/in/phuoc-nguyen-trong/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                >
                    <IoLogoLinkedin
                    />
                </a>
    
                <a 
                    type="button" 
                    className="btn btn-lg btn-my-primary" 
                    href="https://github.com/jesuispius" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Github"
                >
                    <IoLogoGithub />
                </a>
    
                <a 
                    type="button" 
                    className="btn btn-lg btn-my-primary" 
                    href="https://www.facebook.com/Phuocpius/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Facebook"
                >
                    <IoLogoFacebook />
                </a>
                </div>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <section 
            id="contact" 
            className="container contact-section"
        >
            <div 
                data-aos="fade-down"
                data-aos-duration="3000"
                className="row align-item"
            >
                <div className="col-12 col-md-5 my-auto">
                    <img 
                        src={ContactFormImage}
                        className={"w-100"}
                        alt="Contact Form"
                    />
                </div>
                <div className="col-12 col-md-7">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact;