import React from "react";

function References() {
  return (
    <div className="container">
      <h2>📖 References & Sources</h2>
      <p>
        The following sources support the feasibility, benefits, and necessity of the 
        <strong>Electrification of the Trans-Canada Railway, Free Public Transit, Clean Drinking Water initiatives, Infrastructure & Energy Pipelines, and Indigenous Economic Participation</strong>.
      </p>

      {/* Railway Electrification & Sustainability */}
      <div className="section">
        <h3>🚆 Railway Electrification & Sustainability</h3>
        <ul className="reference-list">
          <li>
            <span>🌍 </span>
            <strong>International Energy Agency (IEA)</strong> -  
            <a href="https://www.iea.org/reports/the-future-of-rail" target="_blank" rel="noopener noreferrer" className="reference-link">
              The Future of Rail: Opportunities for Energy & Sustainability
            </a>
          </li>
          <li>
            <span>🇬🇧 </span>
            <strong>Campaign to Electrify Britain's Railway</strong> -  
            <a href="https://en.wikipedia.org/wiki/Campaign_to_Electrify_Britain%27s_Railway" target="_blank" rel="noopener noreferrer" className="reference-link">
              Advocacy for Complete Electrification of UK Railways
            </a>
          </li>
          <li>
            <span>🇺🇸 </span>
            <strong>Caltrain's Transition to Electric Trains</strong> -  
            <a href="https://www.theverge.com/2024/8/12/24218547/caltrain-electric-train-us-lags-behind-india-china-eu" target="_blank" rel="noopener noreferrer" className="reference-link">
              Is the US Finally Getting 'All Aboard' with Electric Trains?
            </a>
          </li>
        </ul>
      </div>

      {/* Free Public Transit Initiatives */}
      <div className="section">
        <h3>🚍 Free Public Transit Initiatives</h3>
        <ul className="reference-list">
          <li>
            <span>🇱🇺 </span>
            <strong>Luxembourg Free Public Transit</strong> -  
            <a href="https://www.luxembourg.public.lu/en/living/mobility/free-public-transport.html" target="_blank" rel="noopener noreferrer" className="reference-link">
              Government of Luxembourg: Nationwide Free Transit Policy (2020)
            </a>
          </li>
          <li>
            <span>🇪🇪 </span>
            <strong>Tallinn, Estonia Free Transit Case Study</strong> -  
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0967070X19303030" target="_blank" rel="noopener noreferrer" className="reference-link">
              Evaluating the Economic & Social Impact of Free Public Transit
            </a>
          </li>
          <li>
            <span>🇺🇸 </span>
            <strong>Massachusetts Fare-Free Bus Pilot</strong> -  
            <a href="https://en.wikipedia.org/wiki/Free_public_transport_in_Massachusetts" target="_blank" rel="noopener noreferrer" className="reference-link">
              Free Public Transport in Massachusetts
            </a>
          </li>
          <li>
            <span>🇦🇺 </span>
            <strong>Melbourne's Free Tram Zone Analysis</strong> -  
            <a href="https://www.theguardian.com/australia-news/2025/jan/12/melbourne-free-trams-experiment-decade-critics" target="_blank" rel="noopener noreferrer" className="reference-link">
              A Decade into Melbourne's Free Trams Experiment, Has It Been Worth It?
            </a>
          </li>
          <li>
            <span>🇺🇸 </span>
            <strong>Orange County's Free Bus Rides Initiative</strong> -  
            <a href="https://www.timesunion.com/hudsonvalley/news/article/newburgh-middletown-free-county-transportation-20054291.php" target="_blank" rel="noopener noreferrer" className="reference-link">
              Orange County Offers Year-Round Free Bus Rides in Newburgh, Middletown
            </a>
          </li>
        </ul>
      </div>

      {/* Clean Drinking Water for Indigenous Communities */}
      <div className="section">
        <h3>💧 Clean Drinking Water for Indigenous Communities</h3>
        <ul className="reference-list">
          <li>
            <span>⚠️ </span>
            <strong>Government of Canada Report on Drinking Water</strong> -  
            <a href="https://www.sac-isc.gc.ca/eng/1506514143353/1533317130660" target="_blank" rel="noopener noreferrer" className="reference-link">
              Indigenous Services Canada: Progress on Drinking Water Advisories (2023)
            </a>
          </li>
          <li>
            <span>💧 </span>
            <strong>Neskantaga First Nation Water Crisis</strong> -  
            <a href="https://www.theguardian.com/world/2021/nov/16/canada-first-nations-water-crisis" target="_blank" rel="noopener noreferrer" className="reference-link">
              The Guardian: Indigenous Water Crisis in Canada
            </a>
          </li>
        </ul>
      </div>

      {/* Infrastructure & Energy Pipelines */}
      <div className="section">
        <h3>🔌 Infrastructure & Energy Pipelines</h3>
        <ul className="reference-list">
          <li>
            <span>🏗️ </span>
            <strong>Integrating Energy & Water Pipelines</strong> -  
            <a href="https://www.weforum.org/agenda/2020/07/smart-infrastructure-cities-energy-water-pipelines/" target="_blank" rel="noopener noreferrer" className="reference-link">
              World Economic Forum: The Role of Smart Infrastructure in Energy & Water Distribution
            </a>
          </li>
        </ul>
      </div>

      {/* Indigenous Economic Participation & Policy Framework */}
      <div className="section">
        <h3>🛠️ Indigenous Economic Participation & Policy Framework</h3>
        <ul className="reference-list">
          <li>
            <span>📜 </span>
            <strong>Government of Canada: Indigenous Economic Participation</strong> -  
            <a href="https://www.rcaanc-cirnac.gc.ca/eng/1551192823951/1551192979368" target="_blank" rel="noopener noreferrer" className="reference-link">
              Indigenous Reconciliation & Economic Development
            </a>
          </li>
          <li>
            <span>🏛️ </span>
            <strong>Indigenous Services Canada (ISC)</strong> -  
            <a href="https://www.sac-isc.gc.ca/eng/1626810144851/1626810173811" target="_blank" rel="noopener noreferrer" className="reference-link">
              ISC: Federal Investments in Infrastructure & Services
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default References;