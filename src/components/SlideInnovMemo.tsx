import { forwardRef, useImperativeHandle } from 'react';
import { SlideHandle } from '../App';

export const SlideInnovMemo = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  useImperativeHandle(ref, () => ({
    getStepCount: () => 1,
    nextStep: () => false,
    prevStep: () => false,
    setStep: () => {},
  }));

  return (
    <section className={`slide innov innov-memo ${props.isActive ? 'active' : 'inactive'}`}>
      <div className="head">
        <h2><span style={{color: 'var(--brand-orange)', marginRight: '8px'}}>2</span>Notes × Memorization</h2>
        <p className="lead">We combine <strong>note-taking with memorization</strong>: every card can stay as a note, or be set to one of three memory levels, and we generate the right practice card.</p>
        <div className="tagline">
          <span className="tag">Notes as Cards</span>
          <span className="tag">3 Memory Levels</span>
          <span className="tag alt">Adaptive Practice</span>
        </div>
      </div>
      <div className="grid">
        <div className="phone">
          <div className="screen" style={{ flexDirection: 'column', gap: '12px', justifyContent: 'space-around' }}>
            <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', boxShadow: 'var(--shadow-1)', textAlign: 'left', width: '100%' }}>
              <h4 style={{ margin: '0 0 8px', color: '#0f172a' }}>What is LoRA?</h4>
              <p style={{ fontSize: '16px', margin: 0, color: '#475569' }}>LoRA (Low-Rank Adaptation) is a technique to efficiently fine-tune large language models...</p>
            </div>
            <div style={{ fontSize: '24px', color: '#94a3b8' }}>⬇️</div>
            <div>
              <strong style={{ display: 'block', fontSize: '20px', color: 'var(--brand-blue)', marginBottom: '8px' }}>Set Memory Level:</strong>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <button>Familiar</button>
                  <button>Proficient</button>
                  <button>Verbatim</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="points">
            <li><span>Notes as Cards</span>: every piece of knowledge is a card, easy to manage</li>
            <li><span>3 Memory Levels</span>: Familiar / Proficient / Verbatim for different needs</li>
            <li><span>Adaptive Practice</span>: generates different types of practice based on memory level</li>
          </ul>
          <div className="note">Spoken: Second, we combine note-taking with memorization: every card can stay as a note, or be set to one of three memory levels—familiar, proficient, or verbatim. For each level, we generate the right practice card.</div>
        </div>
      </div>
    </section>
  );
});
