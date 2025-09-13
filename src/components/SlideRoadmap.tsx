import { forwardRef, useImperativeHandle } from 'react';
import { SlideHandle } from '../App';

const QUARTERS = [
    { milestone: "M1-3", title: "Public Beta", tasks: ["Learning App", "Gather Feedback", "Collect Training Data"] },
    { milestone: "M4-6", title: "Creator Tools", tasks: ["LoRA Fine-tuning", "Creator Tool Launch", "Original Decks"] },
    { milestone: "M7-9", title: "Compliance", tasks: ["ISBN Verification", "Reporting System", "Web-based Payments"] },
    { milestone: "M10-12", title: "Global Launch", tasks: ["On-device Models", "Multi-language", "Worldwide Rollout"] },
];

export const SlideRoadmap = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  useImperativeHandle(ref, () => ({
    getStepCount: () => 1,
    nextStep: () => false,
    prevStep: () => false,
    setStep: () => {},
  }));

  return (
    <section className={`slide roadmap ${props.isActive ? 'active' : 'inactive'}`}>
      <h2>Roadmap</h2>
      <div className="timeline">
        {QUARTERS.map((q, index) => (
          <div key={q.milestone} className="quarter anim-fade" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
            <div className="milestone">{q.milestone}</div>
            <h3>{q.title}</h3>
            <ul>
              {q.tasks.map(task => <li key={task}>{task}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
});
