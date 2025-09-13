import { forwardRef, useImperativeHandle } from 'react';
import { SlideHandle } from '../App';

export const SlideCreator = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  useImperativeHandle(ref, () => ({
    getStepCount: () => 1,
    nextStep: () => false,
    prevStep: () => false,
    setStep: () => {},
  }));

  return (
    <section className={`slide creator5 ${props.isActive ? 'active' : 'inactive'}`}>
      <div className="head">
        <h2>Creator ecosystem · Activation key</h2>
        <p>Invite creators with free credits; give out activation keys for promotion and sales; partner with publishers in the future.</p>
      </div>
      <div className="grid">
        <div className="phone anim-fade">
          <div className="screen">
            <h3>Enter Activation Key</h3>
            <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" readOnly />
            <button>Activate</button>
            <p className="hint">You can buy or receive a key from a creator.</p>
          </div>
        </div>
        <ul className="bullets">
          <li className="reveal">Use free credits to invite creators</li>
          <li className="reveal" style={{animationDelay: '0.2s'}}>Provide activation keys (sell or give away)</li>
          <li className="reveal" style={{animationDelay: '0.4s'}}>Extend the same model to publishers</li>
        </ul>
      </div>
    </section>
  );
});
