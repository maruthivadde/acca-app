import "./index.css";

const Skills = () => (
  <div className="skill-container">
    <h1 className="skill-heading">
      What will you <span className="learn">Learn</span> in ACCA?
    </h1>
    <div className="skill-cards-container">
      <div className="skill-card">
        <div className="header-card">Knowledge Level</div>
        <div className="body-card">
          <li className="body-list-name">Business and Technology (BT)</li>
          <li className="body-list-name">Management Accounting (MA)</li>
          <li className="body-list-name">Financial Accounting (FA)</li>
        </div>
        <div className="footer-card">3 papers</div>
      </div>

      <div className="skill-card">
        <div className="header-card">Skill Level</div>
        <div className="body-card">
          <li className="body-list-name">Corporate and Business Law (LW)</li>
          <li className="body-list-name">Performance Management (PM)</li>
          <li className="body-list-name">Taxation (TX)</li>
          <li className="body-list-name">Financial Reporting (FR)</li>
          <li className="body-list-name">Audit and Assurance (AA)</li>
          <li className="body-list-name">Financial Management (FM)</li>
        </div>
        <div className="footer-card">6 papers</div>
      </div>

      <div className="skill-card">
        <div className="header-card">Professional Level</div>
        <div className="body-card">
          <p className="body-heading"> Compulsory</p>
          <li className="body-list-name">SBL - Strategic Business Leader</li>
          <li className="body-list-name">SBR - Strategic Business Reporting</li>
          <p className="body-heading"> Two out of the following</p>
          <li className="body-list-name">
            Advanced Financial Management (AFM)
          </li>
          <li className="body-list-name">
            Advanced Performance Management (APM)
          </li>
          <li className="body-list-name">Advanced Taxation (ATX)</li>
          <li className="body-list-name">Advanced Audit and Assurance (AAA)</li>
        </div>
        <div className="footer-card">4 papers</div>
      </div>
    </div>
  </div>
);

export default Skills;
