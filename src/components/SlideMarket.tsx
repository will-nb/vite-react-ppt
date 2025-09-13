import { forwardRef, useImperativeHandle, useState, useRef, useEffect } from 'react';
import { SlideHandle } from '../App';
import Chart from 'chart.js/auto';

const AUDIENCE = [
    { title: "Students", desc: "Exam preparation and language learning", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Student" },
    { title: "Professionals", desc: "Career skills and certification", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Professional" },
    { title: "Creators", desc: "Share expertise and monetize knowledge", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Creator" },
    { title: "Lifelong learners", desc: "Personal growth and hobbies", img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Learner" },
];


export const SlideMarket = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  const [step, setStep] = useState(0);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useImperativeHandle(ref, () => ({
    getStepCount: () => 7,
    nextStep: () => {
      if (step < 6) { setStep(s => s + 1); return true; }
      return false;
    },
    prevStep: () => {
      if (step > 0) { setStep(s => s - 1); return true; }
      return false;
    },
    setStep,
  }));

  useEffect(() => {
    if (!props.isActive || !chartRef.current) return;

    if (!chartInstance.current) {
        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;
        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Mobile learning'],
                datasets: [{ data: [100], backgroundColor: ['#3CCF91'], borderWidth: 0 }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '45%',
                plugins: { legend: { display: false } }
            }
        });
    }
    
    const chart = chartInstance.current;
    if (step === 0) {
        chart.data.labels = ['Mobile learning'];
        chart.data.datasets[0].data = [100];
        chart.data.datasets[0].backgroundColor = ['#3CCF91'];
    } else if (step === 1) {
        chart.data.labels = ['Others', 'Duolingo'];
        chart.data.datasets[0].data = [99.375, 0.625];
        chart.data.datasets[0].backgroundColor = ['#3CCF91', '#FF7B54'];
    }
    chart.update();

  }, [props.isActive, step]);


  const getTitle = () => {
    if (step <= 1) return 'Mobile learning market';
    if (step <= 5) return 'Who we serve';
    return 'Pricing & rewards';
  };

  return (
    <section className={`slide market4 ${props.isActive ? 'active' : 'inactive'}`}>
      <div className="content-wrapper" onClick={() => step < 6 && setStep(s => s + 1)}>
        <h2>{getTitle()}</h2>
        
        <div className="wrap" style={{ display: step <= 1 ? 'grid' : 'none' }}>
            <div className="chart-card">
                <div className="chart-container">
                    <canvas ref={chartRef}></canvas>
                </div>
                <div className="legend">
                    <span><span className="dot" style={{background:'#3CCF91'}}></span>Mobile learning · $80B</span>
                    {step === 1 && <span><span className="dot" style={{background:'#FF7B54'}}></span>Duolingo · $0.5B</span>}
                </div>
            </div>
            <div className="notes">
                <ul className="bullets">
                    <li>~$80B market</li>
                    <li>Room to grow</li>
                    {step === 1 && <li>Duolingo ~$0.5B</li>}
                    {step === 1 && <li>Share ~0.6%</li>}
                </ul>
            </div>
        </div>

        <div className="serve-wrap" style={{ display: step >= 2 && step <= 5 ? 'grid' : 'none' }}>
            <div className="serve-left">
                <ul className="serve-list">
                    {AUDIENCE.map((item, index) => (
                        <li key={item.title} className={index <= step - 2 ? 'show' : ''}>
                            <strong>{item.title}</strong>
                            <span>{item.desc}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="serve-right">
                {AUDIENCE.map((item, index) => (
                    <figure key={item.title} className={index <= step - 2 ? 'show' : ''}>
                        <img src={item.img} alt={item.title} />
                    </figure>
                ))}
            </div>
        </div>

        <div style={{ display: step === 6 ? 'block' : 'none' }}>
            <div className="pricing-wrap" style={{display: 'grid'}}>
                <div className="plan-card show">
                    <div className="plan-head"><span className="plan-title">Free</span></div>
                    <div className="plan-price">HK$0</div>
                    <ul className="plan-feats">
                        <li className="neg">Video ads (forced)</li>
                        <li>Add cards <span className="pill">credits</span></li>
                        <li>OCR to add <span className="pill">credits</span></li>
                        <li>Ask AI <span className="pill">credits</span></li>
                        <li>Premium models <span className="pill">credits</span></li>
                    </ul>
                </div>
                <div className="plan-card show" style={{transitionDelay: '120ms'}}>
                    <div className="plan-head"><span className="plan-title">Membership</span></div>
                    <div className="plan-price">HK$298 / year</div>
                     <ul className="plan-feats">
                        <li>No video ads</li>
                        <li>Add cards <span className="pill">base model free</span></li>
                        <li>OCR to add <span className="pill">base model free</span></li>
                        <li>Ask AI <span className="pill">base model free</span></li>
                        <li>Premium models <span className="pill">credits</span></li>
                    </ul>
                </div>
                <div className="plan-card featured show" style={{transitionDelay: '240ms'}}>
                    <div className="plan-head"><span className="plan-title">Lifetime</span><span className="plan-badge">Recommended</span></div>
                    <div className="plan-price">HK$998 one-time</div>
                     <ul className="plan-feats">
                        <li>No video ads</li>
                        <li>Add cards <span className="pill">base model free</span></li>
                        <li>OCR to add <span className="pill">base model free</span></li>
                        <li>Ask AI <span className="pill">base model free</span></li>
                        <li>Premium models <span className="pill">credits</span></li>
                    </ul>
                </div>
            </div>
            <div className="credits-wrap" style={{display: 'block'}}>
                <h3 style={{fontSize: '22px', fontWeight: 800, color: 'var(--brand-blue)', marginBottom: '12px'}}>Earn credits</h3>
                <ul className="credits-list">
                    <li>1) Daily check-in</li>
                    <li>2) Invite friends</li>
                    <li>3) Off-site campaigns</li>
                    <li>4) Renewal / top-up</li>
                </ul>
            </div>
            <div className="disclaimer" style={{display: 'block'}}>Note: Current membership labels are cost-based. In user-facing UI, we will present them in a more intuitive way. The underlying functionality remains unchanged.</div>
        </div>
      </div>
    </section>
  );
});
