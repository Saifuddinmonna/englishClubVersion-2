import React from 'react';
import './Navbar.css';
import './layout.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary py-1">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <button type="button" className="btn btn-outline-light me-3 p-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <img className="img-fluid shadow max pe-1 rounded-circle" src="/images/logo.png" alt="logo" style={{maxWidth: '30px'}} />
          </button>
          <ul className="navbar-nav me-auto mb-0 fw-normal fst-italic fw-bolder">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="/vocabulary" id="vocabularyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Vocabulary
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-start" aria-labelledby="vocabularyDropdown">
                <li><a className="dropdown-item" href="/documents/3-forms-of-verb">Strong Verb and Weak Verb</a></li>
                <li><a className="dropdown-item" href="/vocabulary/connectors">Vocabulary for Connectors</a></li>
                <li><a className="dropdown-item" href="/vocabulary/others">Others</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="/grammar" id="grammarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Grammar
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-start" aria-labelledby="grammarDropdown">
                <li><a className="dropdown-item" href="/auxiliary-verb">Auxiliary Verb</a></li>
                <li><a className="dropdown-item" href="/sentences">Sentences</a></li>
                <li><a className="dropdown-item" href="/tense">Tense in One Page</a></li>
                <li><a className="dropdown-item" href="/case">Case</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="/writing" id="writingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Writing
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-start" aria-labelledby="writingDropdown">
                <li><a className="dropdown-item" href="/paragraph">Paragraph Writing</a></li>
                <li><a className="dropdown-item" href="/padma-bridge">Padma Bridge - Paragraph</a></li>
                <li><a className="dropdown-item" href="/covid19">Covid-19 Paragraph</a></li>
                <li><a className="dropdown-item" href="/application">Application Writing</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="/syllabus" id="syllabusDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Syllabus
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-start" aria-labelledby="syllabusDropdown">
                <li><a className="dropdown-item" href="/syllabus/hsc">HSC</a></li>
                <li><a className="dropdown-item" href="/syllabus/ssc">SSC</a></li>
                <li><a className="dropdown-item" href="/syllabus/jsc">JSC</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#courses-section">Courses</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="/exam" id="examDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Take an Exam
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-start" aria-labelledby="examDropdown">
                <li><a className="dropdown-item" href="/exam/grammar">Grammar</a></li>
                <li><a className="dropdown-item" href="/exam/writing">Writing</a></li>
                <li><a className="dropdown-item" href="/exam/other">Other Topics</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</a>
            </li>
          </ul>
          <form className="d-flex">
            <div className="collapse" id="collapseExamplesearch">
              <div className="position-relative">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="btn btn-outline-light position-absolute end-0 top-0 h-100" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <button className="btn btn-outline-light ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExamplesearch" aria-expanded="false" aria-controls="collapseExamplesearch">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 