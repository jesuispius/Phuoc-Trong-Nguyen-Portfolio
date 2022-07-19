
import React, {Fragment} from "react";
import PropTypes from "prop-types";
import iconPath from "./iconsLib";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Icon = ({ 
    size, 
    icon, 
    className, 
    style, 
    isPrinted,
    printClasses
}) => {
    const styles = { ...defaultStyles, ...style };
    return (
        <Fragment>
            {
                iconPath[icon] ? (
                    iconPath[icon].status === "api" ? (
                        <Fragment>
                            <i
                                className={`${iconPath[icon].path} ${className}`}
                                style={styles}
                                width={`${size}px`}
                                height={`${size}px`}
                            >
                            </i>

                            <br/>
                            {
                                isPrinted && (
                                    <small 
                                        className={`${printClasses}`}
                                        style={{fontSize: "10px"}}
                                    >
                                        { `${iconPath[icon].name}` }
                                    </small>
                                )
                            }
                        </Fragment>
                    ) : (
                        <Fragment>
                            <img
                                src={`${iconPath[icon].path}`}
                                className={`${className} mt-3 mb-2`}
                                style={styles}
                                width={`40px`}
                                height={`20px`}
                                alt={icon}
                            >
                            </img>

                            <br/>
                            {
                                isPrinted && (
                                    <small 
                                        className={`${printClasses}`}
                                        style={{fontSize: "10px"}}
                                    >
                                        { `${iconPath[icon].name}` }
                                    </small>
                                )
                            }
                        </Fragment>
                    )
                ) : (
                    isPrinted && (
                        <small 
                            className={`${printClasses}`}
                            style={{fontSize: "10px"}}
                        >
                            { `${icon}` }
                        </small>
                    )
                )
            }
        </Fragment>
    );
};

Icon.defaultProps = {
    size: 16,
    style: {},
    className: "",
    isPrinted: false,
    printClasses: "",
};

Icon.propTypes = {
    size: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    //style: PropTypes.shape(PropTypes.object),
    className: PropTypes.string,
    isPrinted: PropTypes.bool,
    printClasses: PropTypes.string,
};

export default Icon;
