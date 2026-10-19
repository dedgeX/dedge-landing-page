export default function Report() {
  return (
    <div className="report">
      <div className="report-top">
        <span>
          <i className="status-dot" /> WALLET OVERVIEW
        </span>
        <span className="sample">ILLUSTRATIVE REPORT</span>
      </div>
      <div className="report-wallet">
        <div className="wallet-avatar">◈</div>
        <div>
          <strong>Sample wallet</strong>
          <p>Research the track record</p>
        </div>
        <span className="window">15D WINDOW</span>
      </div>
      <div className="report-metrics">
        <div>
          <span>Win rate</span>
          <strong>
            64.3<span>%</span>
          </strong>
          <small>18 of 28 closed trades</small>
        </div>
        <div>
          <span>Net SOL</span>
          <strong className="green">+12.84</strong>
          <small>Realized trading result</small>
        </div>
      </div>
      <div className="chart-title">
        <span>PER-TRADE RETURN DISTRIBUTION</span>
        <span>28 trades</span>
      </div>
      <div
        className="histogram"
        role="img"
        aria-label="Illustrative distribution: 10 losing trades and 18 winning trades"
      >
        <div style={{ height: "23%" }} />
        <div style={{ height: "42%" }} />
        <div style={{ height: "65%" }} />
        <div style={{ height: "91%" }} />
        <div style={{ height: "74%" }} />
        <div style={{ height: "48%" }} />
        <div style={{ height: "27%" }} />
        <div style={{ height: "16%" }} />
      </div>
      <div className="chart-axis">
        <span>−100%</span>
        <span>0%</span>
        <span>+100%</span>
        <span>+300%</span>
      </div>
      <div className="report-bottom">
        <span>Read the distribution. Not just the headline.</span>
        <span>↗</span>
      </div>
    </div>
  );
}
