import './LeftContainer.css';
import About from '../About/About.js';
import Navigation from '../Navigation/Navigation.js';
import Contact from '../Contact/Contact.js';

function LeftContainer() {
    return (
        <div id="left-side-container">
            <div id="upper-left-container">
                <About 
                title="Hello, I'm Eric Morales." 
                description="I’m a prospect Software Engineer currently studying at Make School inside the heart of San Francisco, California. I most likely will be specialized on data science, and iOS mobile development by fall of 2022. I can't say I'm a full fletch Software Engineer yet. Nevertheless, that won't stop me from letting you know about my skills. That's why I will be sharing my biggest projects at the moment and some of my skills that can be put to use here."
                />

                <Navigation 
                titles={['Projects', 'Skills']}
                hrefs={['#projects', '#skills']}
                />
            </div>
            <div id="bottom-left-container">
                <Contact />
            </div>
        </div>
    )
}

export default LeftContainer