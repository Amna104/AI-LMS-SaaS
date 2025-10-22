const Subscription = () => {
  return (
    <main className="pricing-page">
      <section className="pricing-header">
        <h1 className="pricing-title">Choose Your Learning Journey</h1>
        <p className="pricing-subtitle">
          Start free, upgrade anytime. Unlock smarter Conversations, deeper
          insights, and unlimited potential with a plan that fits your goals.
        </p>
        <div className="upgrade-instructions">
          <p className="instructions-text">
            💡 <strong>Ready to upgrade?</strong> Go to your <strong>Account Settings → Billing</strong> to securely subscribe to any plan.
          </p>
        </div>
      </section>

      <section className="pricing-cards">
        {/* Basic Plan */}
        <div className="pricing-card basic-plan">
          <div className="plan-icon">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="plan-name">Basic plan</h3>
          <div className="plan-price">
            <span className="price">$0</span>
            <span className="period">/month</span>
          </div>
          <p className="plan-description">Perfect for testing the waters.</p>
          
          <ul className="features-list">
            <li className="feature included">
              <span className="checkmark">✓</span>
              10 Conversations/month
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              3 Active Companion
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Basic Session Recaps
            </li>
            <li className="feature excluded">
              <span className="x-mark">✕</span>
              Monthly Progress Reports
            </li>
            <li className="feature excluded">
              <span className="x-mark">✕</span>
              Save Conversation History
            </li>
            <li className="feature excluded">
              <span className="x-mark">✕</span>
              Full Performance Dashboards
            </li>
          </ul>
          
          <button className="upgrade-btn basic-btn">
            Get Started Free
          </button>
        </div>

        {/* Core Learner */}
        <div className="pricing-card core-plan">
          <div className="popular-badge">
            <span>Most popular!</span>
          </div>
          <div className="plan-icon">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="plan-name">Core Learner</h3>
          <div className="plan-price">
            <span className="price">$29</span>
            <span className="period">/month</span>
          </div>
          <p className="plan-description">More Companions. More growth.</p>
          
          <ul className="features-list">
            <li className="feature included">
              <span className="checkmark">✓</span>
              Everything in Free
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Unlimited Conversations
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Up to 10 Active Companions
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Save Conversation History
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Inline Quizzes & Recaps
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Monthly Progress Reports
            </li>
          </ul>
          
          <button className="upgrade-btn core-btn">
            Upgrade to Core
          </button>
        </div>

        {/* Pro Companion */}
        <div className="pricing-card pro-plan">
          <div className="plan-icon">
            <span className="text-2xl">💎</span>
          </div>
          <h3 className="plan-name">Pro Companion</h3>
          <div className="plan-price">
            <span className="price">$49</span>
            <span className="period">/month</span>
          </div>
          <p className="plan-description">Your personal AI-powered academy.</p>
          
          <ul className="features-list">
            <li className="feature included">
              <span className="checkmark">✓</span>
              Everything in Core
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Unlimited Companions
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Full Performance Dashboards
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Daily Learning Reminders
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Early Access to New Features
            </li>
            <li className="feature included">
              <span className="checkmark">✓</span>
              Priority Support
            </li>
          </ul>
          
          <button className="upgrade-btn pro-btn">
            Upgrade to Pro
          </button>
        </div>
      </section>
    </main>
  );
};

export default Subscription;