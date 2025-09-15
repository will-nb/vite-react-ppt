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
        labels: ['Others', 'Duolingo'],
        datasets: [{
          data: [99.375, 0.625],
          backgroundColor: ['#3CCF91', '#FF7B54'],
          borderWidth: 0
        }]
      },
      options: { responsive: true, maintainAspectRatio: false, cutout: '45%', plugins: { legend: { display: false } } }
    });

    return () => chart.destroy();
  }, [step]);

  const served = [
    {
      name: 'Students',
      desc: 'Deepen understanding of complex subjects and ace exams.',
      img: '/assets/student.png'
    },
    {
      name: 'Content Creators',
      desc: 'Build a personal knowledge base and create high-quality content.',
      img: '/assets/creator.png'
    },
    {
      name: 'Professionals',
      desc: 'Stay ahead of the curve in your field and drive innovation.',
      img: '/assets/professional.png'
    },
    {
      name: 'Lifelong Learners',
      desc: 'Explore new topics and expand your horizons.',
      img: '/assets/lifelong_learners.png'
    },
  ];

  return (
    <div className={`slide market ${className || ''}`}>
      <div className="slide-content">
        <h2 className="anim-fade">
          {step < 1 && 'Mobile learning market'}
          {step >= 1 && step <= 4 && 'Who we serve'}
          {step >= 5 && 'Pricing & rewards'}
        </h2>

        {/* Use conditional rendering (&&) to completely remove elements from DOM */}
        
        {step < 1 && (
          <div className="market-view">
            <div className="chart-card">
              <div className="chart-container"><canvas id="marketPie"></canvas></div>
              <div className="legend">
                <span><span className="dot" style={{ background: '#3CCF91' }}></span>Mobile learning · $80B</span>
                <span><span className="dot" style={{ background: '#FF7B54' }}></span>Duolingo · $0.5B</span>
              </div>
            </div>
            <div className="notes">
              <ul>
                <li>~$80B market</li>
                <li>Room to grow</li>
                <li>Duolingo ~$0.5B</li><li>Share ~0.6%</li>
              </ul>
            </div>
          </div>
        )}

        {step >= 1 && step <= 4 && (
          <div className="serve-view">
            <div className="serve-left">
              <ul className="serve-list">
                {served.map((item, i) => (
                  <li key={i} className={step >= i + 1 ? 'show' : ''}>
                    <strong>{item.name}</strong>
                    <span>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="serve-right">
              {served.map((item, i) => (
                <figure key={i} className={step >= i + 1 ? 'show' : ''}>
                  <img src={item.img} alt={item.name} />
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Pricing */}
        {step >= 5 && (
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
    </div>
  );
};

export default SlideMarket;
