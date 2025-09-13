import { useNavigation } from './hooks/useNavigation';
import { useMediaQuery } from './hooks/useMediaQuery';
import Footer from './components/Footer';
import {
  SlideCover, SlideStory, SlideProgress, SlideMarket,
  SlideCreator, SlideInnovQA, SlideInnovMemo, SlideInnovRewards,
  SlideRoadmap, SlideEnd
} from './components';
import './styles.css';

const slideComponents = [
  SlideCover, SlideStory, SlideProgress, SlideMarket,
  SlideCreator, SlideInnovQA, SlideInnovMemo, SlideInnovRewards,
  SlideRoadmap, SlideEnd
];

const stepsPerSlide = [1, 3, 4, 7, 1, 1, 1, 1, 1, 1];

function App() {
  const { slideIndex, stepIndex } = useNavigation({
    slideCount: slideComponents.length,
    stepsPerSlide: stepsPerSlide,
  });
  const isLandscape = useMediaQuery('(orientation: landscape)');

  const CurrentSlideComponent = slideComponents[slideIndex];

  return (
    <div className="stage-wrap">
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
        <Footer slideIndex={slideIndex} totalSlides={slideComponents.length} />
      </div>
    </div>
  );
}

export default App;
