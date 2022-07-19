import "./progress.css";

const Progress = ({percentage}) => {
    return (
        <div 
            role="progressbar" 
            aria-valuenow={percentage} 
            aria-valuemin="0" 
            aria-valuemax="100" 
            style={{"--value": `${percentage}`}}
        ></div>
    )
}

export default Progress;