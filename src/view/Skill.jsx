import React,{useState,useEffect,useRef} from 'react'
import '../css/Skill.css'
import css from '../LogoProgramming/css.svg';
import git from '../LogoProgramming/git.svg';
import github from '../LogoProgramming/github.svg';
import html from '../LogoProgramming/html.svg';
import javascript from '../LogoProgramming/javascript.svg';
import mongodb from '../LogoProgramming/mongodb.svg';
import nodejs from '../LogoProgramming/nodejs.svg';
import reac from '../LogoProgramming/react.svg';

const Skill = () => {
  const images = [html,css,javascript,nodejs,reac,mongodb,git, github]; // Replace with your actual image imports

  const visibleSlides = 4;

  const duplicatedImages = [...images, ...images, ...images];

  const [currentIndex, setCurrentIndex] = useState(images.length); // Start at the first original image
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;

        if (newIndex >= duplicatedImages.length - visibleSlides) {
          setTimeout(() => {
            setTransitionEnabled(false); 
            setCurrentIndex(images.length); 
          }, 500); 
        }

        return newIndex;
      });
    }, 1500);

    return () => clearInterval(interval); 
  }, [images.length]);

  
  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 10); 
    }
  }, [transitionEnabled]);

  return (
    <div className='skill'>
      <h1>Skills</h1>
      <div className="slider-container">
        <div
          ref={sliderRef}
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill