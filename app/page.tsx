const marketCards = [
  { name: 'NIFTY 50', value: '24,853.45', change: '+1.24%', sentiment: 'Bullish', color: 'green' },
  { name: 'SENSEX', value: '81,726.18', change: '+1.18%', sentiment: 'Bullish', color: 'green' },
  { name: 'USD/INR', value: '83.42', change: '+0.18%', sentiment: 'Stable', color: 'blue' },
  { name: 'EUR/USD', value: '1.0834', change: '-0.12%', sentiment: 'Range', color: 'amber' },
  { name: 'BTC/USD', value: '$68,540', change: '+2.46%', sentiment: 'Bullish', color: 'green' },
  { name: 'ETH/USD', value: '$3,540', change: '+1.92%', sentiment: 'Bullish', color: 'green' },
];

const chartData = [
  { time: '09:00', open: 24825, high: 24890, low: 24780, close: 24872 },
  { time: '10:00', open: 24872, high: 24940, low: 24860, close: 24912 },
  { time: '11:00', open: 24912, high: 24992, low: 24884, close: 24960 },
  { time: '12:00', open: 24960, high: 25008, low: 24920, close: 24934 },
  { time: '13:00', open: 24934, high: 24980, low: 24870, close: 24896 },
  { time: '14:00', open: 24896, high: 24920, low: 24830, close: 24878 },
  { time: '15:00', open: 24878, high: 24952, low: 24862, close: 24918 },
  { time: '16:00', open: 24918, high: 24980, low: 24890, close: 24962 },
  { time: '17:00', open: 24962, high: 25030, low: 24955, close: 25017 },
  { time: '18:00', open: 25017, high: 25045, low: 24988, close: 25026 },
];

const backtestResults = [
  { strategy: 'Breakout Momentum', pnl: '+18.4%', winRate: '63%', maxDrawdown: '8.1%', trades: 42 },
  { strategy: 'EMA Crossover', pnl: '+12.7%', winRate: '58%', maxDrawdown: '6.6%', trades: 31 },
  { strategy: 'Mean Reversion', pnl: '+9.1%', winRate: '54%', maxDrawdown: '9.4%', trades: 46 },
];

const newsItems = [
  { title: 'RBI policy talk keeps traders on edge ahead of inflation data', category: 'India', time: '2h ago', impact: 'High' },
  { title: 'Fed commentary hints at a slower rate-cut path in Q4', category: 'Forex', time: '4h ago', impact: 'High' },
  { title: 'Bitcoin rebounds as ETF inflows accelerate across global markets', category: 'Crypto', time: '6h ago', impact: 'Medium' },
  { title: 'Trump speech updates to watch for tariff and tax policy signals', category: 'Politics', time: '1d ago', impact: 'High' },
  { title: 'Auto and banking stocks lead NIFTY strength after first-hour buying', category: 'India', time: '2d ago', impact: 'Medium' },
];

const economicCalendar = [
  { event: 'US CPI', time: 'Today, 18:30 IST', impact: 'High' },
  { event: 'ECB Policy', time: 'Tomorrow, 01:15 IST', impact: 'High' },
  { event: 'RBI Minutes', time: 'Wed, 12:00 IST', impact: 'Medium' },
  { event: 'US PMI', time: 'Thu, 19:00 IST', impact: 'Medium' },
];

function Page() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Trading Intelligence</p>
          <h1>MarketPulse Pro</h1>
        </div>
        <nav className="topnav">
          <a href="#market">Markets</a>
          <a href="#chart">Chart</a>
          <a href="#backtest">Backtest</a>
          <a href="#news">News</a>
        </nav>
        <button className="primary-btn">Add Strategy</button>
      </header>

      <section className="hero-grid">
        <div className="hero-card info-panel">
          <div className="hero-label-row">
            <span className="signal-dot" />
            <span>Live market pulse</span>
          </div>
          <h2>Trade smarter with multi-market insights.</h2>
          <p>
            Monitor share market, forex, crypto and macro news from a single dashboard built for fast decision-making.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Open Dashboard</button>
            <button className="secondary-btn">Watchlist</button>
          </div>
        </div>

        <div className="hero-card summary-panel">
          <div className="summary-stat">
            <span>Portfolio P/L</span>
            <strong className="up">+₹1.48L</strong>
          </div>
          <div className="summary-stat">
            <span>Risk Exposure</span>
            <strong>32%</strong>
          </div>
          <div className="summary-stat">
            <span>Open Positions</span>
            <strong>08</strong>
          </div>
        </div>
      </section>

      <section id="market" className="section-block">
        <div className="section-heading">
          <h3>Market Overview</h3>
          <span className="muted">Updated just now</span>
        </div>

        <div className="market-grid">
          {marketCards.map((item) => (
            <article key={item.name} className="market-card">
              <div className="market-meta">
                <span>{item.name}</span>
                <span className={`pill ${item.color}`}>{item.sentiment}</span>
              </div>
              <h4>{item.value}</h4>
              <p className={item.change.startsWith('+') ? 'up' : 'down'}>{item.change}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="chart" className="section-block chart-block">
        <div className="section-heading">
          <h3>NIFTY 50 – Intraday</h3>
          <div className="range-pills">
            <span className="pill active">1D</span>
            <span className="pill">1W</span>
            <span className="pill">1M</span>
            <span className="pill">3M</span>
          </div>
        </div>

        <div className="chart-panel">
          <div className="price-header">
            <div>
              <span className="muted">NIFTY</span>
              <h4>24,853.45</h4>
            </div>
            <div className="value-badge up">+1.24%</div>
          </div>

          <svg viewBox="0 0 700 260" className="candlestick-chart" role="img" aria-label="Price chart">
            <defs>
              <linearGradient id="chartGlow" x1="0" x2="1">
                <stop offset="0%" stopColor="#52d6a7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1b9aaa" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {[...Array(10)].map((_, idx) => (
              <line key={`grid-${idx}`} x1="0" y1={25 + idx * 22} x2="700" y2={25 + idx * 22} stroke="rgba(255,255,255,0.06)" />
            ))}

            <path
              d="M 0 180 C 70 140, 120 110, 170 120 S 265 170, 300 140 S 390 80, 430 120 S 560 200, 700 90"
              fill="none"
              stroke="#52d6a7"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {chartData.map((item, index) => {
              const x = 40 + index * 62;
              const openY = 180 - ((item.open - 24750) / 80) * 100;
              const closeY = 180 - ((item.close - 24750) / 80) * 100;
              const highY = 180 - ((item.high - 24750) / 80) * 100;
              const lowY = 180 - ((item.low - 24750) / 80) * 100;
              const bodyTop = Math.min(openY, closeY);
              const bodyHeight = Math.max(6, Math.abs(closeY - openY));
              return (
                <g key={item.time}>
                  <line x1={x + 10} y1={highY} x2={x + 10} y2={lowY} stroke="#8ce3b4" strokeWidth="1.5" />
                  <rect x={x} y={bodyTop} width="20" height={bodyHeight} rx="3" fill="#52d6a7" opacity="0.9" />
                </g>
              );
            })}
          </svg>
        </div>
      </section>

      <section id="backtest" className="section-block two-column">
        <div className="panel-box">
          <div className="section-heading">
            <h3>Strategy Backtest</h3>
            <span className="muted">Portfolio mode</span>
          </div>

          <div className="strategy-form">
            <label>
              Market
              <select defaultValue="NIFTY 50">
                <option>NIFTY 50</option>
                <option>Bank NIFTY</option>
                <option>USD/INR</option>
                <option>BTC/USD</option>
              </select>
            </label>
            <label>
              Timeframe
              <select defaultValue="15m">
                <option>15m</option>
                <option>1h</option>
                <option>4h</option>
                <option>1D</option>
              </select>
            </label>
            <label>
              Strategy
              <select defaultValue="EMA Crossover">
                <option>EMA Crossover</option>
                <option>Breakout Momentum</option>
                <option>RSI Reversal</option>
                <option>VWAP Pullback</option>
              </select>
            </label>
            <button className="primary-btn full-width">Run Backtest</button>
          </div>
        </div>

        <div className="panel-box">
          <div className="section-heading">
            <h3>Recent Results</h3>
            <span className="muted">Last 90 days</span>
          </div>

          <div className="result-list">
            {backtestResults.map((item) => (
              <div key={item.strategy} className="result-row">
                <div>
                  <strong>{item.strategy}</strong>
                  <small>{item.trades} trades</small>
                </div>
                <div className="result-metrics">
                  <span className="up">{item.pnl}</span>
                  <span>{item.winRate}</span>
                  <span>{item.maxDrawdown}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="section-block three-column">
        <div className="panel-box news-box">
          <div className="section-heading">
            <h3>News Center</h3>
            <span className="muted">Latest</span>
          </div>
          <div className="news-list">
            {newsItems.map((item) => (
              <article key={item.title} className="news-card">
                <div className="news-topline">
                  <span className="tag">{item.category}</span>
                  <span className="impact">{item.impact}</span>
                </div>
                <p>{item.title}</p>
                <small>{item.time}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="panel-box">
          <div className="section-heading">
            <h3>Economic Calendar</h3>
            <span className="muted">Upcoming</span>
          </div>
          <div className="calendar-list">
            {economicCalendar.map((event) => (
              <div key={event.event} className="calendar-row">
                <div>
                  <strong>{event.event}</strong>
                  <small>{event.time}</small>
                </div>
                <span className="tag accent">{event.impact}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-box">
          <div className="section-heading">
            <h3>Trump Watch</h3>
            <span className="muted">Live updates</span>
          </div>
          <div className="trump-card">
            <h4>Policy signals to watch</h4>
            <ul>
              <li>Import tariffs and energy policy updates</li>
              <li>Tax cut or fiscal stimulus commentary</li>
              <li>Fed and rate-sensitive market reactions</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
