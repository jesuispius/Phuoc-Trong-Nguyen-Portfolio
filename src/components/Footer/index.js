

const Footer = () => {
    return (
        <footer>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320"
            >
                <path 
                    fill="#FAC213" 
                    fillOpacity="1" 
                    d="M0,256L48,224C96,192,192,128,288,138.7C384,149,480,235,576,240C672,245,768,171,864,154.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >
                </path>
            </svg>
            <div className="text-center bg-hard-yellow text-dark pb-3">
                <span className="me-1">&#169;</span>
                2022 - Phuoc Nguyen
            </div>
        </footer>
    )
}

export default Footer;