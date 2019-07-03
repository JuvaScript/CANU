// Questionnaire Component

import React from "react";
import axios from "axios";

import * as Survey from "survey-react";
import "survey-react/survey.css";

import "./Questionnaire.css";

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

import Tasks from "./Tasks";

class Post_Questionnaire extends React.Component {
  state = {
    isCompleted: false,
    requiredQ: false,
    caInstructions: [],
    caScale: ["Nie", "1-2 Mal", "3-5 Mal", "6-10 Mal", "Mehr als 10 Mal"]
  };

  // onComplete(survey, options) {
  //     console.log("Survey results: " + JSON.stringify(survey.data));
  //     this.props.incrementSequenceCounter();
  // }

  onCompleteComponent = survey => {
    this.setState({ isCompleted: true });

    console.log(survey.data);
  };

  constructor() {
    super();
    const caInstructionStart =
      "Bitte kreuzen Sie für alle kreativen Aktivitäten aus dem Bereich ";
    const caInstructionEnd =
      " an, wie häufig Sie diese in den letzten 10 Jahren gemacht haben.";
    const caCategoryTitles = [
      "Literatur",
      "Musik",
      "Handarbeiten",
      "Kochen",
      "Sport",
      "bildende Kunst",
      "darstellende Kunst",
      "Technik & Naturwissenschaft"
    ];
    const caInstructions = [];
    for (var i = 0; i < 8; i++) {
      caInstructions.push(
        caInstructionStart + caCategoryTitles[i] + caInstructionEnd
      );
    }
    this.state.caInstructions = caInstructions;
  }

  render() {
    // var model = new Survey.Model(this.json);

    console.log(this.props.count + 1, this.props.total);

<<<<<<< HEAD
=======
    // Anpassung der Farbe notwendig, wenn APM als Teil des Fragebogens umgesetzt werden
>>>>>>> master
    var defaultThemeColors = Survey.StylesManager.ThemeColors["default"];
    defaultThemeColors["$main-color"] = "#3200ff";
    defaultThemeColors["$main-hover-color"] = "#f55000";
    Survey.StylesManager.applyTheme();
<<<<<<< HEAD
=======

>>>>>>> master
    let json = {
      locale: "de",
      pages: [
        {
          name: "Kreative Leistungen",
          elements: [
            {
              type: "multipletext",
              name: "Kreative_Leistungen",
              title: {
                de:
                  "Bitte nennen Sie nun die drei kreativsten Leistungen/Errungenschaften Ihres Lebens. Wählen Sie jene Leistungen aus die einer anderen Person am ehesten ermöglichen Ihre Kreativität einzuschätzen. Ihre Antworten können auch aus anderen Bereichen als denen im vorangehenden Fragebogen kommen. Nennen Sie erst Ihre kreativste Leistung, dann die zweit-kreativste Leistung, und so weiter. Beschreiben Sie bitte jede Leistung mit einem kurzen prägnanten Satz in den entsprechenden untenstehenden Feldern. Wenn es weniger als drei relevante Leistungen geben sollte, lassen Sie die verbleibenden Felder einfach frei."
              },
              isRequired: this.state.requiredQ,
              items: [
                {
                  name: "text1",
                  title: {
                    de: "1."
                  }
                },
                {
                  name: "text2",
                  title: {
                    de: "2."
                  }
                },
                {
                  name: "text3",
                  title: "3."
                }
              ]
            }
          ]
        },
        {
          name: "Demographie",
          elements: [
            {
              type: "text",
              name: "Alter",
              title: "Wie alt sind Sie?",
              isRequired: this.state.requiredQ,
              validators: [
                {
                  type: "numeric",
                  minValue: 1,
                  maxValue: 120
                }
              ]
            },
            {
              type: "radiogroup",
              name: "Geschlecht",
              title: "Welches biologische Geschlecht haben Sie?",
              isRequired: this.state.requiredQ,
              choices: [
                {
                  value: "0",
                  text: "Weiblich"
                },
                {
                  value: "1",
                  text: "Männlich"
                },
                {
                  value: "2",
                  text: "Divers"
                }
              ]
            },
            {
              type: "radiogroup",
              name: "Abschluss",
              title: "Wie ist Ihr höchster Bildungsabschluss?",
              isRequired: this.state.requiredQ,
              hasOther: true,
              choices: [
                {
                  value: "0",
                  text: "Kein Schulabschluss"
                },
                {
                  value: "1",
                  text: "Hauptschulabschluss"
                },
                {
                  value: "2",
                  text: "Mittlere Reife"
                },
                {
                  value: "3",
                  text: "Fachhochschulreife"
                },
                {
                  value: "4",
                  text: "Abitur"
                },
                {
                  value: "5",
                  text: "Berufsausbildung"
                },
                {
                  value: "6",
                  text: "Bachelor"
                },
                {
                  value: "7",
                  text: "Master / Diplom / Magister"
                },
                {
                  value: "8",
                  text: "Promotion"
                },
                {
                  value: "9",
                  text: "Habilitation"
                }
              ],
              otherText: "Anderen"
            },
            {
              type: "radiogroup",
              name: "Branche",
              title:
                "In welchem Bereich würden Sie Ihr Studium/Ihre Ausbildung/Ihren Beruf verorten?",
              isRequired: this.state.requiredQ,
              hasOther: true,
              choices: [
                {
                  value: "0",
                  text: "Agrar- & Forstwissenschaften"
                },
                {
                  value: "1",
                  text: "Gesellschaftswissenschaften"
                },
                {
                  value: "2",
                  text: "Informatik & Mathematik"
                },
                {
                  value: "3",
                  text: "Kunst, Gestaltung & Musik"
                },
                {
                  value: "4",
                  text: "Medien & Kommunikation"
                },
                {
                  value: "5",
                  text: "Medizin & Gesundheitswesen"
                },
                {
                  value: "6",
                  text: "Naturwissenschaften"
                },
                {
                  value: "7",
                  text: "Sprach- & Kulturwissenschaften"
                },
                {
                  value: "8",
                  text: "Technik & Ingenieurwesen"
                },
                {
                  value: "9",
                  text: "Wirtschaft & Recht"
                }
              ],
              otherText: "Anderen"
            },
            {
              type: "radiogroup",
              name: "Sprachfähigkeit",
              title: "Wie schätzen Sie Ihre deutsche Sprachfähigkeit ein?",
              isRequired: this.state.requiredQ,
              choices: [
                {
                  value: "0",
                  text: "Muttersprache"
                },
                {
                  value: "1",
                  text: "Niveau C2 (annähernd muttersprachliche Kenntnisse)"
                },
                {
                  value: "2",
                  text: "Niveau C1 (Fachkundige Sprachkenntnisse)"
                },
                {
                  value: "3",
                  text: "Niveau B2 (Selbstständige Sprachverwendung)"
                },
                {
                  value: "4",
                  text: "Niveau B1 (Fortgeschrittene Sprachverwendung)"
                },
                {
                  value: "5",
                  text: "Niveau A2 (Grundlegende Kenntnisse)"
                },
                {
                  value: "6",
                  text: "Niveau A1 (Anfänger)"
                }
              ]
            },
            {
              type: "radiogroup",
              name: "Legasthenie",
              title:
                "Haben Sie eine Lese- und Rechtschreibschwäche oder Legasthenie (Entwicklungsstörung beim Erlernen des Lesens und Rechtschreibens von Wörter)?",
              isRequired: this.state.requiredQ,
              choices: [
                {
                  value: "0",
                  text: "Nein"
                },
                {
                  value: "1",
                  text: "Ja"
                }
              ]
            },
            {
              type: "matrix",
              name: "Offenheit",
              title: "Inwieweit treffen die folgenden Aussagen auf Sie zu?",
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "1",
                  text: "trifft überhaupt nicht zu"
                },
                {
                  value: "2",
                  text: "trifft eher nicht zu"
                },
                {
                  value: "3",
                  text: "weder noch"
                },
                {
                  value: "4",
                  text: "eher zutreffend"
                },
                {
                  value: "5",
                  text: " trifft voll und ganz zu"
                }
              ],
              rows: [
                {
                  value: "Row 1",
                  text: "Ich habe nur wenig künstlerisches Interesse."
                },
                {
                  value: "Row 2",
                  text:
                    "Ich habe eine aktive Vorstellungskraft, bin fantasievoll."
                }
              ]
            },
            {
              type: "matrix",
              name: "Spiele",
              title:
                "Wie gut schätzen Sie Ihre Fähigkeiten in den folgenden Spielen ein?",
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "0",
                  text: "ich kenne das Spiel nicht"
                },
                {
                  value: "1",
                  text: "schlecht"
                },
                {
                  value: "2",
                  text: "eher schlecht"
                },
                {
                  value: "3",
                  text: "mittel"
                },
                {
                  value: "4",
                  text: "eher gut"
                },
                {
                  value: "5",
                  text: "gut"
                }
              ],
              rows: ["Tetris", "Ubongo", "Scrabble"]
            },
            {
              type: "html",
              name: "info",
              html:
                "<table><body><row><td><b>Ubongo:</b></td><td><img src='/images/Ubongo.png' width='200px' /></td><td><b>Scrabble:</b></td><td><img src='/images/Scrabble.png' width='200px' /></td></row></body></table>"
            }
          ]
        },
        {
          name: "Verabschiedung",
          elements: [
            {
              type: "text",
              name: "Email_Adresse",
              title: {
                de:
                  "Hinterlassen Sie uns Ihre E-Mail-Adresse, falls Sie an dem Gewinnspiel teilnehmen möchten."
              }
            },
            {
              type: "html",
              name: "Info_Code",
              html: {
                de:
                  "<br>Um Ihre Anonymität zu wahren und Ihnen dennoch die Möglichkeit zu geben eine Löschung Ihrer Daten zu beantragen, verwenden wir  einen anonymen persönlichen Code.<br><br>1. Bitte geben Sie in das Feld unten zuerst die ersten zwei Buchstaben des Vornamens Ihrer Mutter ein.<br>2. Bitte geben Sie nun die ersten zwei Ziffern des Geburtstages Ihrer Mutter ein.<br>3. Bitte geben Sie abschließend die ersten zwei Ziffern Ihres Geburtstages ein.<br><br><b>Beispiel:</b> Heißt Ihre Mutter <b>Su</b>sanne, ist sie am <b>08</b>.01.1960 geboren und Sie sind am <b>23</b>.01.1990 geboren, so lautet Ihr Code: <b>SU0823</b>"
              }
            },
            {
              type: "text",
              name: "Code",
              title: "",
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "Zukunftsproband",
              title: {
                de:
                  "Um nachvollziehen zu können, inwieweit sich bei Ihnen bestimmte Merkmale im Laufe der Zeit verändern, würden wir Sie in einigen Monaten gerne noch einmal befragen. Stehen Sie hierfür zur Verfügung?"
              },
              choices: [
                {
                  value: "1",
                  text: {
                    de: "Ja"
                  }
                },
                {
                  value: "0",
                  text: {
                    de: "Nein"
                  }
                }
              ]
            }
          ]
        }
      ],
      showPrevButton: false,
      showQuestionNumbers: "off",
      pageNextText: {
        de: "Weiter"
      },
      completeText: {
        de: "Weiter"
      },
      requiredText: ""
    };

    var surveyRender = !this.state.isCompleted ? (
      <div>
        {/* <ProgressBar
          percent={(this.props.total / this.props.total) * 100}
          filledBackground="linear-gradient(to right,rgb(255, 187, 153), rgb(255, 134, 73))"
        /> */}

        <div className="questionnaire-description">
          <div className="wrapper">
            <div className="task-heading">
              <span className="task-number-questionnaire">4</span>
              <h1 className="questionnaire-heading">Nachbefragung</h1>
            </div>
            <p className="questionnaire-task-description">
              Bitte beantworten Sie die folgenden Fragen.
            </p>
          </div>
        </div>
        <Survey.Survey
          json={json}
          showCompletedPage={false}
          onComplete={this.onCompleteComponent}
        />
      </div>
    ) : null;

    var onCompleteComponent = this.state.isCompleted
      ? this.props.incrementSequenceCounter()
      : // this.props.history.push("/finished")
        null;

    return (
      <div>
        {surveyRender}
        {onCompleteComponent}

        {/* <Survey.Survey model={model} onComplete={this.onComplete} /> */}
      </div>
    );
  }
}

export default Post_Questionnaire;
