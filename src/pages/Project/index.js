import { Fragment } from "react";
import Carousels from "../../components/Carousel";

const images = [
    {
        image_link: "image/opensource-video-login.png",
        title: "Open Source Security Camera System - End-to-end Encryption",
        content: "",
        main_content: {
            title: "Open Source Security Camera System - End-to-end Encryption",
            carousel: [
                "image/opensource-video-login.png",
                "image/opensource-video-homepage-video.JPG",
                "image/opensource-video-homepage.JPG",
                "image/opensource-video-request.JPG",
                "image/opensource-video-profile.JPG"
            ],
            description: [
                "A prototype connecting a motion-based security camera system to a remote application of our creation using the Matrix chatroom protocol protects images and videos with end-to-end encryption. The application let users be notified when there are motion detection events, and provide images and videos to their devices from the security cameras. The communication between the two takes place using a Matrix chatroom protocol. Users can choose to host the Matrix server themselves, or use any hosting services as they please.",
                "Working as part of a seven-member team for the Capstones Software Development project during 5 months at Portland State University.",
            ],
            highlights: [
                "Participating in doing research on the Matrix Client, the encrypted/decrypted data parts, and the frontend with React Native and Flutter (no longer used) and with React JS.",
                "Drawing the UI wireframe using Figma and building the UI design of application", 
                "Collaborating to build the frontend of a web-based application.",
                "Taking responsibility for making requests from the interfaces to camera hub and showing the results in the interface, such as (showing the thumbnail as receiving the motion detect notifications, requesting and showing the recording videos, retrieving the camera config information, etc)",
                "Collaborating to build and maintain the authentication page allowing users to log in and log out",
                "Testing and collaborating to write reports."
            ],
            stacks: ["matrix", "react", "tailwindcss", "javascript", "nodejs", "bootstrap", "css3", "html"],
            link_demo: "v_Zcuo2PaQs",
            link_github: "https://github.com/Open-Source-Videos/Matrix-surveillant-camera-security-web",
            link_deploy: "https://securitycameracapstone.netlify.app/"
        }
    },
    {
        image_link: "image/bank-prediction.jpg",
        title: "Bank Marketing Campaigns Prediction",
        content: "",
        main_content: {
            title: "Bank Marketing Campaigns Prediction",
            carousel: [
                "image/bank-prediction-graph-plotting.jpg",
                "image/bank-prediction-graph-plotting2.jpg",
                "image/bank-prediction-graph-plotting3.jpg"
            ],
            description: [
                "Applying different Machine Learning methods (including Neural Networks, Naive Bayes, and K-Means) to analyze the customer marketing data from a bank, and to predict who would be a likely customer to buy a product if contacted for a marketing campaign. The data is related with direct marketing campaigns (phone calls) of a Portuguese banking institution.",
                "Working as part of a five-member team for the final project of CS 445 - Machine Learning course at Portland State University.",
            ],
            highlights: [
                "Participated in data processing/preprocessing", 
                "Building the Naive Bayes model", 
                "Graph plotting", 
                "Writing project report."
            ],
            stacks: ["python", "numpy", "pandas", "matplotlib", "tensorflow"],
            link_demo: "",
            link_github: "https://github.com/PSUOpenDev/FinalProjectMachineLearning",
            link_deploy: ""
        }
    },
    {
        image_link: "image/real-to-image-bg.jpg",
        title: "Real Image To Artistic Picture Transformation",
        content: "",
        main_content: {
            title: "Real Image To Artistic Picture Transformation",
            carousel: [
                "image/real-to-artistic.JPG",
                "image/real-to-artistic1.JPG",
                "image/real-to-artistic2.JPG",
                "image/real-to-artistic3.JPG"
            ],
            description: [
                "Building a tool to convert the real image to an artistic picture. We reimplement image processing algorithms without using OpenCV or any related package.  While reimplementing, we also improve the algorithms. In this project, the two main parts of the project are Edge Detection and Color Blending and Flattening. With Edge Detection, we research the Canny Edge Detection algorithm. For Color Blending and Flattening, we use Bilateral Filter with some improvement to make it run faster. Another thing about this project is applying parallel processing to all the algorithms.",
                "Working as part of a two-member team for the final project of CS 410 - Foundations of Computer Vision course at Portland State University.",
            ],
            highlights: [
                "Implementing image processing algorithms without using OpenCV or any related package.",
                "Taking responsibility to implement the color space transfer, some filter and blur algorithms.",
                "Building the user interface using Streamlit.",
                "Writing project report."
            ],
            stacks: ["python", "streamlit", "opencv", "numpy"],
            link_demo: "",
            link_github: "https://github.com/PSUOpenDev/FinalProjectCompVision",
            link_deploy: "https://jesuispius-real-image-to-artistic-picture--project-final-rpmdv9.streamlitapp.com/"
        }
    },
    {
        image_link: "image/stock-app.jpg",
        title: "Stock Tracking Dashboard Website (Frontend)",
        content: "",
        main_content: {
            title: "Stock Tracking Website",
            carousel: [
                "image/stock-tracking-app.JPG",
                "image/stock-tracking-app1.JPG"
            ],
            description: [
                "A frontend web application to keep track of stock market using stock API from Yahoo Finance API and Breaking News API.",
                "Working as part of a two-member team for the final project of CS 410P – Frontend Web Development course at Portland State University.",
            ],
            highlights: [
                "Fetch the stock API from Yahoo Finance API and Breaking News API.",
                "Drawing and showing charts.",
                "Showing the current price/value for well-known tocks indexes.",
                "Showing the relevant breaking news based upon the stock indicated.",
                "Design the wireframe for application using Figma.",
            ],
            stacks: ["react", "javascript", "html", "css3", "bootstrap"],
            link_demo: "",
            link_github: "https://github.com/PSUOpenDev/OpenStock",
            link_deploy: "https://openstockapp2021.herokuapp.com/"
        }
    },
    {
        image_link: "image/stock-app-cover.jpg",
        title: "Stock Tracking Dashboard Web Application (Fullstack)",
        content: "",
        main_content: {
            title: "Stock Tracking Dashboard Web Application",
            carousel: [
                "image/stack-track-app.JPG",
                "image/stack-track-app1.JPG"
            ],
            description: [
                "A fullstack web application to keep track of stock market using stock API from Yahoo Finance API and Breaking News API.",
                "Working as part of a two-member team for the final project of CS 465P – Fullstack Web Development course at Portland State University.",
            ],
            highlights: [
                "Fetch the stock API from Yahoo Finance API and Breaking News API.",
                "Authentication (login, logout) using Google Fire Base",
                "Getting the stock notifications, adding the stock into user's porfolio.",
                "Drawing and showing charts.",
                "Showing the current price/value for well-known tocks indexes.",
                "Showing the relevant breaking news based upon the stock indicated.",
                "Design the wireframe for application using Figma.",
            ],
            stacks: ["react", "javascript", "html", "css3", "nextjs", "materialui"],
            link_demo: "",
            link_github: "https://github.com/PSUOpenDev/FinalProjectFullStack",
            link_deploy: "https://open-portfolio-app.herokuapp.com/"
        }
    },
    {
        image_link: "image/qr-code.jpg",
        title: "Generate Customized QR Code Application",
        content: "",
        main_content: {
            title: "Generate Customized QR Code Application",
            carousel: [
                "image/generate-customized-qr-code-slide.JPG",
            ],
            description: [
                "A small and simple individual-project application allowing users to create their own customized QR Code.",
            ],
            highlights: [
                "Leverage of using Streamlit and QR_Code API.",
                "Be able to customize the QR version, box size, border, fill color, background color.",
                "Be able to download the final QR code under the PNG format.",
                "Testing and deploy on the Streamlit Community Cloud."
            ],
            stacks: ["python", "streamlit"],
            link_demo: "",
            link_github: "https://github.com/jesuispius/Generate-Customized-QR-Code-Streamlit",
            link_deploy: "https://jesuispius-generate-customized-qr-code-streamlit-main-ilijmp.streamlitapp.com/"
        }
    },
    {
        image_link: "image/attendance-system.jpg",
        title: "Simple Attendance Management System",
        content: "",
        main_content: {
            title: "Simple Attendance Management System",
            carousel: [
                "image/attendance-management-system-slide.JPG",
            ],
            description: [
                "With an idea of automatically taking attendance in class, I have built a small project allowing users giving the information and a captured frontal face for training and the camera will recognize the face and display the information as well. After recognizing the frontal face, the camera will automatically record the information, and store it into the csv file as an attendance evidence.",
                "*The camera is currently configured into the system is a webcam."
            ],
            highlights: [
                "Leverage of using pre-trained frontal face file of haarcascade.",
                "A user interface was built by Kivy and Tkinter, allowing users inputting the information, capturing the frontal face, and training data.",
                "Be able to storing the recorded data in a .csv file, helping teachers/managers to keep track of the attendance information.",
            ],
            stacks: ["python", "opencv"],
            link_demo: "",
            link_github: "https://github.com/jesuispius/Attendance_Management_System",
            link_deploy: "https://jesuispius-generate-customized-qr-code-streamlit-main-ilijmp.streamlitapp.com/"
        }
    }
];


export const ProjectCarousel = () => { 
    return (
        <Fragment>
            <div 
                className="container-fluid"
                data-aos="zoom-in-up"
                data-aos-duration="1600"
                id="project-section"
            >
                <h1 className="font-nunito section-title-color text-center my-5 fw-bold">What I have done?</h1>
                <Carousels content={images}/>
            </div>
        </Fragment>
    )
}

