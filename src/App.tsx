import { useNavigation } from './hooks/useNavigation';
import { useMediaQuery } from './hooks/useMediaQuery';
import Footer from './components/Footer';
import {
  SlideCover, SlideStory, SlideProgress, SlideMarket,
  SlideCreator,
  SlideRoadmap, SlideEnd
} from './components';
import './styles.css';

const slideComponents = [
  SlideCover, SlideStory, SlideProgress, SlideMarket,
  SlideCreator,
  SlideRoadmap, SlideEnd
];

const stepsPerSlide = [1, 3, 3, 6, 3, 1, 1];
const slideTitles = [
  "HKSTP Pitch",          // 1/7
  "Project Introduction", // 2/7
  "Team Building",        // 3/7
  "Market Analysis",      // 4/7
  "Creator Economy",      // 5/7
  "Roadmap",              // 6/7
  "Thank You & Q/A",      // 7/7
];

function App() {
  const { slideIndex, stepIndex } = useNavigation({
    slideCount: slideComponents.length,
    stepsPerSlide: stepsPerSlide,
  });
  const isLandscape = useMediaQuery('(orientation: landscape)');

  const CurrentSlideComponent = slideComponents[slideIndex];

  return (
    <div className={`stage-wrap ${slideIndex === 0 ? 'cover-mode' : ''}`}>
      <div className="stage">
        {isLandscape ? (
          <div className="slides-container-landscape" data-testid="landscape-container">
            <CurrentSlideComponent step={stepIndex} className="active" />
          </div>
        ) : (
          <div 
            className="slides-container portrait-scroll" 
            data-testid="portrait-container"
          >
            {slideComponents.map((SlideComponent, i) => (
              <SlideComponent key={i} step={0} />
            ))}
          </div>
        )}
        <Footer
          slideIndex={slideIndex}
          totalSlides={slideComponents.length}
          title={slideTitles[slideIndex]}
        />
      </div>
    </div>
  );
}

export default App;
