import React from 'react';

function Vocabulary() {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Vocabulary Resources</h1>
      
      {/* Strong and Weak Verbs Section */}
      <section className="mb-5">
        <h2 className="mb-3">Strong and Weak Verbs</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Three Forms of Verbs</h3>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Base Form</th>
                    <th>Past Simple</th>
                    <th>Past Participle</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Be</td>
                    <td>Was/Were</td>
                    <td>Been</td>
                    <td>Strong</td>
                  </tr>
                  <tr>
                    <td>Begin</td>
                    <td>Began</td>
                    <td>Begun</td>
                    <td>Strong</td>
                  </tr>
                  <tr>
                    <td>Break</td>
                    <td>Broke</td>
                    <td>Broken</td>
                    <td>Strong</td>
                  </tr>
                  {/* Add more verbs as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Vocabulary for Connectors Section */}
      <section className="mb-5">
        <h2 className="mb-3">Vocabulary for Connectors</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Addition</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Furthermore</li>
                  <li className="list-group-item">Moreover</li>
                  <li className="list-group-item">In addition</li>
                  <li className="list-group-item">Additionally</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Contrast</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">However</li>
                  <li className="list-group-item">Nevertheless</li>
                  <li className="list-group-item">On the other hand</li>
                  <li className="list-group-item">In contrast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Word Categories Section */}
      <section className="mb-5">
        <h2 className="mb-3">Common Word Categories</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Academic Words</h3>
                <p className="card-text">Essential vocabulary for academic writing and IELTS preparation.</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Business English</h3>
                <p className="card-text">Professional vocabulary for business communication.</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Daily Conversation</h3>
                <p className="card-text">Common words and phrases for everyday situations.</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Exercises Section */}
      <section className="mb-5">
        <h2 className="mb-3">Practice Exercises</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Test Your Knowledge</h3>
            <p className="card-text">
              Practice your vocabulary skills with our interactive exercises and quizzes.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button className="btn btn-primary me-md-2">Take a Quiz</button>
              <button className="btn btn-outline-primary">View Word Lists</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vocabulary; 