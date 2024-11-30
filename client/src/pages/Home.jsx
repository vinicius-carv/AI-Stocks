import React from 'react';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle('AI Stocks')

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className='container d-flex flex-column flex-md-row justify-content-between gap-5 gap-md-0'>
          <div className="hero-content">
            <h1>AI-Powered Stock Analysis</h1>
            <p>Revolutionize your investment strategy with AI-driven insights. Stay ahead of the market and make smarter decisions effortlessly.</p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image overflow-hidden">
            <img className='w-100' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d5f77c104128975.5f5bdc0d6d7b6.gif" alt="AI Stocks Hero" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className='container'>
          <h2>Why Choose AI Stocks?</h2>
          <div className="features-grid d-flex flex-column flex-md-row">
            <div className="feature">
              <img src="https://www.clipartmax.com/png/middle/147-1473607_digital-pr-insight-icon.png" alt="Market Insights" />
              <h3>Real-Time Insights</h3>
              <p>Get up-to-the-minute stock market analysis, trends, and forecasts.</p>
            </div>
            <div className="feature">
              <img src="https://w7.pngwing.com/pngs/150/625/png-transparent-artificial-intelligence-ai-chip-computer-technology-artificial-intelligence-icon-thumbnail.png" alt="AI-Powered" />
              <h3>AI-Powered Analytics</h3>
              <p>Leverage cutting-edge AI to analyze stocks and predict performance.</p>
            </div>
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/512/487/487622.png" alt="Customizable" />
              <h3>Customizable Alerts</h3>
              <p>Receive personalized alerts tailored to your investment strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section className="cta">
        <div className='container'>
          <h2>Take Control of Your Investments</h2>
          <p>Sign up today to gain access to powerful tools and insights that can transform the way you invest.</p>
          <button className="cta-button">Join Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
