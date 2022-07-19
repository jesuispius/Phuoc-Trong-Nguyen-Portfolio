import "./card-overlay.scss";
import "./card-overlay.css";
import React, { 
    Fragment, 
    useState 
} from "react";
import { 
    Button, 
    Modal, 
    Carousel, 
    Badge 
} from "react-bootstrap";
import YoutubeEmbed from "../YoutubeEmbeded";
import Icon from "../DevIcon";
import { 
    IoDesktopSharp,
    IoLogoGithub,
    IoCloseCircleSharp
} from "react-icons/io5";


const VerticallyCenteredModal = ({
    show,
    onHide,
    content
}) => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Modal
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            className={"ps-0"}
            scrollable
        >
            <Modal.Body 
                className="" 
                style={{backgroundColor: "#fcf398"}}
            >
                <div className="text-center">
                    <img 
                        src="image/Telecommuting-pana.svg" 
                        height="300px" 
                        width="auto" 
                        alt="portfolio"
                    />
                </div>

                <div className="row-cols-2">
                    <h4 className="text-center mx-auto my-3 fw-bold section-title-color font-roboto-mono">
                        { content.title }
                    </h4>
                </div>

                { content.description && (
                    <div className="container my-3 text-center">
                        <Badge 
                            pill 
                            bg="dark" 
                            text="white" 
                            className="font-roboto-mono fs-6 my-3 py-2 px-3 bg-sugar-lollipop"
                        >
                            Overview
                        </Badge>

                        <div className="container section-frame">
                        {
                            content.description.length > 0 ? (
                                content.description.map((each, index) => {
                                    return (
                                        <div 
                                            key={index}
                                            className={"text-start font-nunito my-2"}
                                        >
                                            { each }
                                        </div>
                                    )
                                })
                            ) : (
                                <></>
                            )
                        }
                        </div>
                    </div>
                )}

                { 
                    content.carousel && (
                        <Fragment>
                            <div className="container text-center my-4">
                                <Badge 
                                    pill 
                                    bg="dark" 
                                    text="white" 
                                    className="font-roboto-mono fs-6 my-3 py-2 px-3 bg-sugar-lollipop"
                                >
                                    Slideshow
                                </Badge>

                                <div className="row col-12 col-lg-8 mx-auto">
                                    <Carousel>
                                        {
                                            content.carousel.map((each, index) => {
                                                return (
                                                    <Carousel.Item 
                                                        interval={1000} 
                                                        key={index} 
                                                    >
                                                        <img
                                                            className="d-block w-100"
                                                            src={each}
                                                            alt={index}
                                                        />
                                                    </Carousel.Item>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </div>
                            </div>
                        </Fragment>
                    )
                }

                { content.link_demo && (
                    <div className="container my-3 text-center">
                        <Badge 
                            pill 
                            bg="dark" 
                            text="white" 
                            className="font-roboto-mono fs-6 my-3 py-2 px-3 bg-sugar-lollipop"
                        >
                            Demo
                        </Badge>
                        <div className="row col-12 col-lg-8 mx-auto">
                            <YoutubeEmbed embedId={content.link_demo} />
                        </div>
                    </div>
                )}

                { content.highlights && (
                    <div className="container text-center">
                        <Badge 
                            pill 
                            bg="dark" 
                            text="white" 
                            className="font-roboto-mono fs-6 my-3 py-2 px-3 bg-sugar-lollipop"
                        >
                            Highlights
                        </Badge>
                        <ul className="text-start section-frame font-nunito">
                            { 
                                content.highlights.map((each, index) => {
                                    return (
                                        <li key={index}>
                                            {each}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )}

                { content.stacks && (
                    <div className="container text-center">
                        <Badge 
                            pill 
                            bg="dark" 
                            text="white" 
                            className="font-roboto-mono fs-6 my-3 py-2 px-3 bg-sugar-lollipop"
                        >
                            Technologies
                        </Badge>

                        <div className="container row gap-2 m-0 justify-content-center">
                        { 
                            content.stacks.map((item, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className={"p-2 col-4 col-sm-3 col-md-2 col-lg-1 text-center"}
                                    >
                                        <Icon 
                                            icon={item}
                                            className={"fs-1"} 
                                            styles={""}
                                            isPrinted={true}
                                            printClasses={"text-dark fw-bold"}
                                        />
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer className="bg-hard-yellow">
                { content.link_deploy && (
                    <Button 
                        onClick={() => openInNewTab(content.link_deploy)}
                        className={"btn-sugar-lollipop"}
                    >
                        Deploy
                        <span className={"ms-2"}>
                            <IoDesktopSharp width={"20px"} height={"20px"} />
                        </span>
                    </Button>
                )}
                
                { content.link_github && (
                    <Button 
                        onClick={() => openInNewTab(content.link_github)}
                        className={"btn-dark"}
                    >
                        Github
                        <span className={"ms-2"}>
                            <IoLogoGithub width={"20px"} height={"20px"} />
                        </span>
                    </Button>
                )}

                <Button 
                    onClick={onHide}
                    className="btn-danger"
                >
                    Close
                    <span className={"ms-2"}>
                        <IoCloseCircleSharp width={"20px"} height={"20px"} />
                    </span>
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const CardOverlay = ({
    img_link,
    card_title,
    card_content,
    main_content
}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className="container">
                <div className="card">
                    <figure className="card__thumb m-0" style={{borderRadius: "20px"}}>
                        <img src={img_link} alt={img_link} className="card__image" />
                        <figcaption className="card__caption">
                            <h2 className="card__title">{ card_title }</h2>
                            <p className="card__snippet">{ card_content }</p>
                            <Button className="card__button" onClick={() => setModalShow(true)}>
                                Read more
                            </Button>
                        </figcaption>
                    </figure>
                </div>

                <VerticallyCenteredModal 
                    show={modalShow} 
                    onHide={() => setModalShow(false)}
                    content={ main_content }
                />
            </div>
        </>
    )
}

export default CardOverlay;