import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";
import "./carousel.css";
import CardOverlay from "../CardOverlay";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 3,
        paritialVisibilityGutter: 20
    },
    tablet: {
        breakpoint: { max: 1200, min: 768 },
        items: 2,
        paritialVisibilityGutter: 10
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        paritialVisibilityGutter: 0
    }
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const CarouselCustom = ({ deviceType, content }) => {
    return (
        <Carousel
            ssr
            partialVisible={true}
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
        {content && content.map((image, index) => {
            return (
                <CardOverlay 
                    img_link={image.image_link} 
                    card_title={image.title}
                    card_content={image.content}
                    main_content={image.main_content}
                    draggable={false}
                    key={index}
                />
            );
        })}
        </Carousel>
    );
};

const Carousels = ({ 
    deviceType, 
    content 
}) => {
    return (
        <CarouselCustom 
            deviceType={deviceType} 
            content={content} 
        />
    )
}

Carousels.getInitialProps = ({ req }) => {
    let userAgent;
    if (req) {
        userAgent = req.headers["user-agent"];
    } else {
        userAgent = navigator.userAgent;
    }
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return { deviceType };
};

export default Carousels;
