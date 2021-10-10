import AboutMe from '../AboutMe';
import Work from '../Work';
import Education from '../Education';
import './Content.css';

export function Content(props) {
    return (
        <div class='content'>
            <AboutMe />
            <Education />
            <Work />
        </div>
    )
}

