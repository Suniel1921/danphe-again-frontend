import React from "react";
import "./ComparisonChart.css";

const ComparisonChart = () => {
  return (
    <div className="comparison-chart-container">
      {/* Main Content */}
      <h1 className="chart-title">Business Comparison Chart</h1>
      <p className="chart-description">
        Before you begin the incorporation process, you will need to choose a business structure...
      </p>

      <div className="comparison-chart">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>C Corp</th>
              <th>S Corp</th>
              <th>LLC</th>
              <th>General Partnership</th>
              <th>Sole Proprietor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Owners have limited liability for business debts and obligations</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Created by a state-level registration that usually protects the company name</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td></td>
              <td></td>
            </tr>
            {/* Add more rows here based on your data */}
          </tbody>
        </table>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <p>Ready to create your company?</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default ComparisonChart;
