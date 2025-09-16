// src/components/slides/SlideMarket.tsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './SlideMarket.module.css';
import { SlideProps } from './types';
import DeviceMockup from '../common/DeviceMockup';

const marketSteps = [
  // Step 0: Market Analysis
  {
    type: 'market',
    title: 'A Far From Saturated Market',
    insights: [
      'Global mobile learning is projected to reach <strong>$86.4B in 2024</strong>.',
      'Even a top app like Duolingo holds <strong>less than 1%</strong> of this market.',
      'The opportunity for specialized, high-quality learning tools is immense.'
    ],
    chartData: {
      labels: ['Mobile Learning Market', 'Duolingo Revenue'],
      data: [99.13, 0.87],
    }
  },
  // Step 1: Who We Serve (now a single step with multiple profiles)
  {
    type: 'users',
    title: 'Who We Serve',
    profiles: [
      { name: 'Students', description: 'Deepen understanding of complex subjects and ace exams.', image: '/assets/student.png' },
      { name: 'Content Creators', description: 'Build a personal knowledge base and create high-quality content.', image: '/assets/creator.png' },
      { name: 'Professionals', description: 'Stay ahead of the curve in your field and drive innovation.', image: '/assets/professional.png' },
      { name: 'Lifelong Learners', description: 'Explore new topics and expand your horizons.', image: '/assets/lifelong_learners.png' }
    ]
  },
  // Step 2: Pricing
  {
    type: 'pricing',
    title: 'Pricing & Rewards',
    plans: [
      { name: 'Free', price: 'HK$0', features: ['Video ads (forced)', 'Limited credits for cards, OCR, and AI', 'Free search'], cta: 'Get started' },
      { name: 'Membership', price: 'HK$298 / year', features: ['No video ads', 'Unlimited base model usage', 'Premium models require credits'], cta: 'Become a member' },
      { name: 'Lifetime', price: 'HK$998 one-time', features: ['Everything in Membership', 'One-time payment, own for life'], cta: 'Buy once', featured: true },
    ],
    rewards: ['Daily check-in', 'Invite friends', 'Off-site campaigns', 'Renewal / top-up']
  }
];

const SlideMarket: React.FC<SlideProps> = ({ step = 0, className = '' }) => {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentStep = marketSteps[step] || marketSteps[0];

  useEffect(() => {
    if (currentStep.type === 'market' && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      // Destroy previous chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: currentStep.chartData.labels,
          datasets: [{
            data: currentStep.chartData.data,
            backgroundColor: ['#34D399', '#FF7B54'],
            borderWidth: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '50%',
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => `${context.label}: ${context.raw}%`
              }
            }
          }
        }
      });
    }
    // Cleanup on step change or unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [currentStep]);

  const renderContent = () => {
    switch (currentStep.type) {
      case 'market':
        return (
          <div className={styles.gridSplit}>
            <div className={styles.textColumn}>
              <h2 className={styles.title}>{currentStep.title}</h2>
              <ul className={styles.insightsList}>
                {currentStep.insights.map((insight, i) => <li key={i} dangerouslySetInnerHTML={{ __html: insight }} />)}
              </ul>
            </div>
            <div className={styles.visualColumn}>
              <div className={styles.chartContainer}>
                <canvas ref={canvasRef}></canvas>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className={styles.usersLayout}>
            <h2 className={styles.title}>{currentStep.title}</h2>
            <div className={styles.userProfiles}>
              {currentStep.profiles.map((profile, index) => (
                <div key={index} className={styles.userProfileCard}>
                  <div className={styles.profileImageContainer}>
                    <img src={profile.image} alt={profile.name} className={styles.profileImage} />
                  </div>
                  <div className={styles.profileText}>
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'pricing':
        return (
          <div className={styles.gridCenter}>
            <h2 className={styles.title}>{currentStep.title}</h2>
            <div className={styles.pricingContainer}>
              {currentStep.plans.map(plan => (
                <div key={plan.name} className={`${styles.planCard} ${plan.featured ? styles.featured : ''}`}>
                  {plan.featured && <div className={styles.planBadge}>Recommended</div>}
                  <h3>{plan.name}</h3>
                  <div className={styles.planPrice}>{plan.price}</div>
                  <ul className={styles.planFeatures}>
                    {plan.features.map(feat => <li key={feat}>{feat}</li>)}
                  </ul>
                  <button className={styles.planCta}>{plan.cta}</button>
                </div>
              ))}
            </div>
            <div className={styles.rewardsSection}>
              <h3>Earn Credits</h3>
              <div className={styles.rewardsList}>
                {currentStep.rewards.map(reward => <span key={reward}>{reward}</span>)}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`${styles.slideMarket} slide ${className}`}>
      <div className="slide-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default SlideMarket;
