import { forwardRef, useImperativeHandle } from 'react';
import { SlideHandle } from '../App';

export const SlideInnovQA = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  useImperativeHandle(ref, () => ({
    getStepCount: () => 1,
    nextStep: () => false,
    prevStep: () => false,
    setStep: () => {},
  }));

  return (
    <section className={`slide innov innov-qa ${props.isActive ? 'active' : 'inactive'}`}>
      <div className="head">
        <h2><span style={{color: 'var(--brand-orange)', marginRight: '8px'}}>1</span>AI Q&A with Context</h2>
        <p className="lead">We merge <strong>card search with AI Q&A</strong> — when you ask AI inside Granostack, your existing cards are fed into the context, making answers more accurate.</p>
        <div className="tagline">
          <span className="tag">In-app AI Q&A</span>
          <span className="tag">Personalized Context</span>
          <span className="tag alt">Answer to Card</span>
        </div>
      </div>
      <div className="grid">
        <div className="phone">
          <div className="screen">
            <img src="/assets/grok.PNG" alt="AI Q&A with context" />
          </div>
        </div>
        <div>
          <ul className="points">
            <li><span>AI Q&A with Context</span>: your notes provide context for more accurate answers</li>
            <li><span>Answer to Card</span>: turn useful answers into new cards in one click</li>
            <li><span>Deepen Understanding</span>: ask follow-up questions to explore topics</li>
          </ul>
          <div className="note">Spoken: First, we merge card search with AI Q&A—when you ask AI inside Granostack, your existing cards are fed into the context, making answers more accurate. If you like the result, you can turn it into a new card instantly.</div>
        </div>
      </div>
    </section>
  );
});
