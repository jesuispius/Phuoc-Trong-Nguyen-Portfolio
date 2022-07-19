import { 
	Fragment, 
	useEffect 
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import Intro from './pages/Intro';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
//import BreakImage from "./image/stacked-peaks-haikei.svg";
import BreakImage from "./image/stacked-peaks-haikei-yellow.svg";
//import LineWaveImage from "./image/line-wave3.svg";
//import LineWaveImage from "./image/wave-haikei-yel.svg";
import LineWaveImage from "./image/wave-haikei-line-breaker.svg";
import { ProjectCarousel } from './pages/Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

	return (
		<Fragment>
			<Helmet>
            	<link 
					rel="stylesheet" 
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" 
				/>
				<script 
					src="js/backToTop.js" 
					type="text/javascript" 
				/>
				<script 
					src="js/navbar.js" 
					type="text/javascript" 
				/>
    		</Helmet>

			<Intro />
			<div>
				<img
					src={LineWaveImage} 
					alt="break"
					className='w-100 h-5'
				/>
			</div>
			<About />
			<div>
				<img
					src={BreakImage} 
					alt="break"
					className='w-100 h-5'
				/>
			</div>
			<Resume/>
			<div>
				<img
					src={BreakImage} 
					alt="break"
					className='w-100 h-5'
				/>
			</div>

			<ProjectCarousel />
			<div>
				<img
					src={LineWaveImage} 
					alt="break"
					className='w-100 h-5'
				/>
			</div>
			
			<div className="mt-5">
				<Contact />
			</div>


			<div className='mt-5'>
				<Footer />
			</div>
			
		</Fragment>
	)
}
export default App;
