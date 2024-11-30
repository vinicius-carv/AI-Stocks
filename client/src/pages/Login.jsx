import React from 'react';

const Login = () => {
  return (
    <div className="Login">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>AI-Powered Stock Analysis</h1>
          <p>Revolutionize your investment strategy with AI-driven insights. Stay ahead of the market and make smarter decisions effortlessly.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="/assets/images/hero-image.png" alt="AI Stocks Hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose AI Stocks?</h2>
        <div className="features-grid">
          <div className="feature">
            <img src="/assets/icons/insight-icon.png" alt="Market Insights" />
            <h3>Real-Time Insights</h3>
            <p>Get up-to-the-minute stock market analysis, trends, and forecasts.</p>
          </div>
          <div className="feature">
            <img src="/assets/icons/ai-icon.png" alt="AI-Powered" />
            <h3>AI-Powered Analytics</h3>
            <p>Leverage cutting-edge AI to analyze stocks and predict performance.</p>
          </div>
          <div className="feature">
            <img src="/assets/icons/customize-icon.png" alt="Customizable" />
            <h3>Customizable Alerts</h3>
            <p>Receive personalized alerts tailored to your investment strategy.</p>
          </div>
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section className="cta">
        <h2>Take Control of Your Investments</h2>
        <p>Sign up today to gain access to powerful tools and insights that can transform the way you invest.</p>
        <button className="cta-button">Join Now</button>
      </section>
    </div>
  );
};

export default Login;
