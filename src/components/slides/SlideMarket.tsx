// src/components/slides/SlideMarket.tsx
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './SlideMarket.css';
import { SlideProps } from './types';

const SlideMarket: React.FC<SlideProps> = ({ step, className }) => {

  useEffect(() => {
    const canvas = document.getElementById('marketPie') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: step < 1 ? ['Mobile learning'] : ['Others', 'Duolingo'],
        datasets: [{
          data: step < 1 ? [100] : [99.375, 0.625],
          backgroundColor: step < 1 ? ['#3CCF91'] : ['#3CCF91', '#FF7B54'],
          borderWidth: 0
        }]
      },
      options: { responsive: true, maintainAspectRatio: false, cutout: '45%', plugins: { legend: { display: false } } }
    });

    return () => chart.destroy();
  }, [step]);

  const serveListItems = [
    { title: 'Students', desc: 'Exam preparation and language learning' },
    { title: 'Professionals', desc: 'Career skills and certification' },
    { title: 'Creators', desc: 'Share expertise and monetize knowledge' },
    { title: 'Lifelong learners', desc: 'Personal growth and hobbies' },
  ];

  const audienceImages = ['Student', 'Professional', 'Creator', 'Learner'];

  return (
    <div className={`slide market ${className || ''}`}>
      <h2 className="anim-fade">
        {step < 2 && 'Mobile learning market'}
        {step >= 2 && step <= 5 && 'Who we serve'}
        {step >= 6 && 'Pricing & rewards'}
      </h2>

      {/* Use conditional rendering (&&) to completely remove elements from DOM */}
      
      {step < 2 && (
        <div className="market-view">
          <div className="chart-card">
            <div className="chart-container"><canvas id="marketPie"></canvas></div>
            <div className="legend">
              <span><span className="dot" style={{ background: '#3CCF91' }}></span>Mobile learning · $80B</span>
              {step === 1 && <span><span className="dot" style={{ background: '#FF7B54' }}></span>Duolingo · $0.5B</span>}
            </div>
          </div>
          <div className="notes">
            <ul>
              <li>~$80B market</li>
              <li>Room to grow</li>
              {step === 1 && <><li>Duolingo ~$0.5B</li><li>Share ~0.6%</li></>}
            </ul>
          </div>
        </div>
      )}

      {step >= 2 && step <= 5 && (
        <div className="serve-view">
          <div className="serve-left">
            <ul className="serve-list">
              {serveListItems.map((item, i) => (
                <li key={i} className={step >= i + 2 ? 'show' : ''}>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="serve-right">
            {audienceImages.map((seed, i) => (
              <figure key={i} className={step >= i + 2 ? 'show' : ''}>
                <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`} alt={seed} />
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* Step 6: Pricing */}
      {step >= 6 && (
        <div className="pricing-view">
          <div className="pricing-wrap">
            {/* Free Plan */}
            <div className="plan-card show"><div className="plan-head"><span className="plan-title">Free</span></div><div className="plan-price">HK$0</div><ul className="plan-feats"><li className="neg">Video ads (forced)</li><li>Add cards <span className="pill">credits</span></li><li>OCR to add <span className="pill">credits</span></li><li>Search cards (free)</li><li>Ask AI <span className="pill">credits</span></li><li>Premium models <span className="pill">credits</span></li></ul><a className="plan-cta" href="#">Get started</a></div>
            {/* Membership Plan */}
            <div className="plan-card show"><div className="plan-head"><span className="plan-title">Membership</span></div><div className="plan-price">HK$298 / year</div><ul className="plan-feats"><li>No video ads</li><li>Add cards <span className="pill">base model free</span></li><li>OCR to add <span className="pill">base model free</span></li><li>Search cards (free)</li><li>Ask AI <span className="pill">base model free</span></li><li>Premium models <span className="pill">credits</span></li></ul><a className="plan-cta" href="#">Become a member</a></div>
            {/* Lifetime Plan */}
            <div className="plan-card featured show"><div className="plan-head"><span className="plan-title">Lifetime</span><span className="plan-badge">Recommended</span></div><div className="plan-price">HK$998 one-time</div><ul className="plan-feats"><li>No video ads</li><li>Add cards <span className="pill">base model free</span></li><li>OCR to add <span className="pill">base model free</span></li><li>Search cards (free)</li><li>Ask AI <span className="pill">base model free</span></li><li>Premium models <span className="pill">credits</span></li><li>One-time payment, own for life</li></ul><a className="plan-cta" href="#">Buy once</a></div>
          </div>
          <div className="credits-wrap show">
            <div className="credits-title">Earn credits</div>
            <ul className="credits-list"><li>1) Daily check-in</li><li>2) Invite friends</li><li>3) Off-site campaigns</li><li>4) Renewal / top-up</li></ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideMarket;
