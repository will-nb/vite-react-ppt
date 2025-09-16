import { useNavigation } from './hooks/useNavigation';
import { useMediaQuery } from './hooks/useMediaQuery';
import Footer from './components/Footer';
import {
  SlideCover, SlideInnovation, SlideProgress, SlideMarket,
  SlideRoadmap, SlideEnd
} from './components';
import './styles.css';

const slideComponents = [
  SlideCover, SlideInnovation, SlideProgress, SlideMarket,
  SlideRoadmap, SlideEnd
];

const stepsPerSlide = [1, 4, 3, 3, 1, 1];
const slideTitles = [
  "HKSTP Pitch",                      // 1/6
  "Innovativeness",                   // 2/6
  "Team Competency",                  // 3/6
  "Business Development Potential",   // 4/6
  "Research Development Plan",        // 5/6
  "Thank You & Q/A",                  // 6/6
];

function App() {
  const { slideIndex, stepIndex } = useNavigation({
    slideCount: slideComponents.length,
    stepsPerSlide: stepsPerSlide,
  });
  const isPortrait = useMediaQuery('(orientation: portrait)');

  if (isPortrait) {
    return (
      <>
        <div className="orientation-prompt">
          <p>请旋转您的设备以获得最佳浏览体验</p>
        </div>
        {/* In portrait mode, we render all slides for vertical scrolling */}
        <div className="slides-container-portrait portrait-scroll" data-testid="portrait-container">
          {slideComponents.map((SlideComponent, index) => (
            <div key={index} className="slide slide-wrapper-portrait">
              <SlideComponent step={0} className="active" />
            </div>
          ))}
        </div>
      </>
    );
  }

  const CurrentSlideComponent = slideComponents[slideIndex];

  return (
    <div className={`stage-wrap ${slideIndex === 0 ? 'cover-mode' : ''}`}>
      <div className="stage">
        <div className="slides-container-landscape" data-testid="landscape-container">
          <CurrentSlideComponent step={stepIndex} className="active" />
        </div>
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
