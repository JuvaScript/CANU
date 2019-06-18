// Study Landing Page Component

import React from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

import Header from "../layout/Header";

class LandingStudy extends React.Component {
  // storing link to tasks
  state = {
    link: `/${this.props.match.params.studyid}/${
      this.props.match.params.groupid
    }/active`
  };

  render() {
    return (
      <div>
        <Header />
        <div className="home-content">
          <div className="left">
            <div className="forms">
              <div className="triangle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="293.386"
                  height="293.386"
                  viewBox="0 0 293.386 293.386"
                >
                  <defs>
                    <linearGradient
                      id="b"
                      x1="0.027"
                      y1="0.131"
                      x2="0.357"
                      y2="0.736"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#fff" stop-opacity="0" />
                      <stop offset="100%" stop-color="#0010ff" />
                    </linearGradient>
                  </defs>
                  <g transform="matrix(0.875, -0.485, 0.485, 0.875, 0, 104.629)">
                    <path d="M215.815,215.815H0V0Z" fill="#eef2ff" />
                    <path d="M0,215.815V0L215.815,215.815" fill="url(#b)" />
                  </g>
                </svg>
              </div>
              <div className="arc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="213.192"
                  height="266.784"
                  viewBox="0 0 213.192 266.784"
                >
                  <defs>
                    <linearGradient
                      id="c"
                      x1="0.06"
                      y1="0.162"
                      x2="0.567"
                      y2="0.981"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#fff" stop-opacity="0" />
                      <stop offset="100%" stop-color="#2af6ff" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(0 16.738) rotate(-5)">
                    <path
                      d="M0,232.422,94.59,0l97.457,231.224A250.048,250.048,0,0,1,0,232.422Z"
                      fill="#e3fcff"
                    />
                    <path
                      d="M0,232.422,94.59,0l97.457,231.224A250.048,250.048,0,0,1,0,232.422Z"
                      fill="url(#c)"
                    />
                  </g>
                </svg>
              </div>
              <div className="square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="241.585"
                  height="241.585"
                  viewBox="0 0 241.585 241.585"
                >
                  <defs>
                    <linearGradient
                      id="d"
                      x1="0.267"
                      y1="0.009"
                      x2="0.562"
                      y2="0.631"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0%" stop-color="#fff" stop-opacity="0" />
                      <stop offset="100%" stop-color="#15ff45" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(39.317) rotate(11)">
                    <rect width="206.054" height="206.054" fill="#dcffd2" />
                    <rect width="206.054" height="206.054" fill="url(#d)" />
                  </g>
                </svg>
              </div>
              <div className="half-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="199.241"
                  height="254.261"
                  viewBox="0 0 199.241 254.261"
                >
                  <defs>
                    <radialGradient
                      id="e"
                      cx="7.244"
                      cy="19.317"
                      r="72.176"
                      gradientTransform="translate(-7.244 -19.317) scale(2 2)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" stop-opacity="0" />
                      <stop offset="1" stop-color="#b500d4" />
                    </radialGradient>
                  </defs>
                  <g transform="translate(0 48.073) rotate(-25)">
                    <path
                      d="M113.752,227.5a113.752,113.752,0,0,1,0-227.5"
                      fill="#fbe9ff"
                    />
                    <path
                      d="M113.752,227.5a113.752,113.752,0,0,1,0-227.5"
                      fill="url(#e)"
                    />
                  </g>
                </svg>
              </div>
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="279.773"
                  height="279.774"
                  viewBox="0 0 279.773 279.774"
                >
                  <defs>
                    <radialGradient
                      id="f"
                      cx="66.394"
                      cy="34.552"
                      r="191.391"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fff" stop-opacity="0" />
                      <stop offset="1" stop-color="#ff1d25" />
                    </radialGradient>
                  </defs>
                  <g transform="translate(0 0)">
                    <ellipse
                      cx="139.887"
                      cy="139.887"
                      rx="139.887"
                      ry="139.887"
                      fill="#ffeef1"
                    />
                    <g opacity="0.84">
                      <ellipse
                        cx="139.887"
                        cy="139.887"
                        rx="139.887"
                        ry="139.887"
                        fill="url(#f)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="rectangle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="196.751"
                  height="272.758"
                  viewBox="0 0 196.751 272.758"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="-0.66"
                      y1="0.178"
                      x2="1.178"
                      y2="0.689"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#fff" stop-opacity="0" />
                      <stop offset="1" stop-color="#fdff15" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(137.84 0) rotate(30)">
                    <rect width="68.025" height="275.679" fill="#fffdde" />
                    <rect width="68.025" height="275.679" fill="url(#a)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="right">
            <p>
              Sehr geehrte Teilnehmerin, sehr geehrter Teilnehmer,
              <br />
              <br />
              vielen Dank, dass Sie uns bei unserer Forschung unterstützen
              möchten! Diese Studie wird im Rahmen eines interdisziplinären
              Projekts vom Lehrstuhl für Ergonomie an der Technischen
              Universität München durchgeführt. Projektverantwortlicher ist Herr
              Lorenz Prasch, M.Sc.
              <br />
              <br />
              Gegenstand dieser Studie ist ein neu entwickeltes Messinstrument
              in der Kreativitätsforschung. Anhand verschiedener Aufgabentypen
              wird ein Kreativitätsscore bestimmt. Zusätzlich werden weitere
              Eigenschaften abgefragt.
              <br />
              <br />
              Bitte lesen Sie sich jede Frage bzw. jede Aufgabe in Ruhe durch
              und beantworten Sie diese. Die Datenerhebung gilt ausschließlich
              der Evaluation des Messinstruments. Sie als Proband können nichts
              falsch machen. Die Bearbeitung der Studie wird ca. 30-40 Minuten
              in Anspruch nehmen.
              <br />
              <br />
              Unter den Teilnehmenden werden Amazon-Gutscheine im Wert von 3 x
              50 € sowie 5 x 10 € verlost.
              <br />
              <br />
              Die Ergebnisse und Daten dieser Studie werden für
              wissenschaftliche Veröffentlichungen herangezogen. Die Angaben der
              einzelnen Teilnehmer werden in pseudonymisierter Form
              ausschließlich am Lehrstuhl für Ergonomie der Technischen
              Universität München analysiert, gemäß der gesetzlichen
              Bestimmungen vertraulich behandelt und anonym ausgewertet. Durch
              die anonymisierte Form der Daten lassen Ergebnisse oder
              individuelle Antworten keinerlei Rückschlüsse auf Sie als
              Einzelperson zu. Mittels eines individuellen Codes, den Sie später
              im Verlauf des Versuchs erstellen, können Sie den Lehrstuhl
              jederzeit kontaktieren und eine Löschung Ihrer Daten verlangen.
              Ihre Angaben werden im Rahmen der Richtlinien zur Sicherung guter
              wissenschaftlicher Praxis für mindestens zehn Jahre archiviert.
              <br />
              <br />
              Mit Ihrer Teilnahme stimmen Sie der Erhebung und Verarbeitung
              Ihrer persönlichen Daten im Sinne der hier bereitgestellten
              Informationen zu.
              <br />
              <br />
              Für Rückfragen oder Anmerkungen stehen wir Ihnen gerne zur
              Verfügung: Lorenz Prasch (lorenz.prasch@tum.de)
              <br />
              <br />
              Technische Universität München:
              <br />
              Lehrstuhl für Ergonomie
            </p>
            <div className="btn-container">
              <Link to={this.state.link} className="btn">
                Start
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingStudy;
