// Questionnaire Component

import React from "react";
import axios from "axios";

import * as Survey from "survey-react";
import "survey-react/survey.css";

import "./Questionnaire.css";

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

import Tasks from "./Tasks";

class ICAA extends React.Component {
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

    console.log("completetriggered");
    // Änderung
    this.props.incrementSequenceCounter();

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

    // Anpassung der Farbe notwendig, wenn APM als Teil des Fragebogens umgesetzt werden
    var defaultThemeColors = Survey.StylesManager.ThemeColors["default"];
    defaultThemeColors["$main-color"] = "#3200ff";
    defaultThemeColors["$main-hover-color"] = "#f55000";
    Survey.StylesManager.applyTheme();
    let json = {
      locale: "de",
      pages: [
        {
          name: "Kreative Aktivitäten",
          elements: [
            {
              type: "matrix",
              name: "Literatur",
              title: {
                de: this.state.caInstructions[0]
              },
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "1",
                  text: {
                    de: this.state.caScale[0]
                  }
                },
                {
                  value: "2",
                  text: {
                    de: this.state.caScale[1]
                  }
                },
                {
                  value: "3",
                  text: {
                    de: this.state.caScale[2]
                  }
                },
                {
                  value: "4",
                  text: {
                    de: this.state.caScale[3]
                  }
                },
                {
                  value: "5",
                  text: {
                    de: this.state.caScale[4]
                  }
                }
              ],
              rows: [
                {
                  value: "lit_item_1",
                  text: {
                    de: "ein kurzes Werk (Gedicht/Kurzgeschichte) geschrieben"
                  }
                },
                {
                  value: "lit_item_2",
                  text: {
                    de: "ein langes Werk (Buch, Theaterstück) geschrieben"
                  }
                },
                {
                  value: "lit_item_3",
                  text: {
                    de: "einen Beitrag für eine Zeitung geschrieben"
                  }
                },
                {
                  value: "lit_item_4",
                  text: {
                    de: "eine originelle Rede entworfen"
                  }
                },
                {
                  value: "lit_item_5",
                  text: {
                    de: "einen Witz erfunden"
                  }
                },
                {
                  value: "lit_item_6",
                  text: {
                    de: "einen Blogeintrag geschrieben"
                  }
                }
              ]
            },
            {
              type: "matrix",
              name: "Musik",
              title: {
                de: this.state.caInstructions[1]
              },
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "1",
                  text: {
                    de: this.state.caScale[0]
                  }
                },
                {
                  value: "2",
                  text: {
                    de: this.state.caScale[1]
                  }
                },
                {
                  value: "3",
                  text: {
                    de: this.state.caScale[2]
                  }
                },
                {
                  value: "4",
                  text: {
                    de: this.state.caScale[3]
                  }
                },
                {
                  value: "5",
                  text: {
                    de: this.state.caScale[4]
                  }
                }
              ],
              rows: [
                {
                  value: "mus_item_1",
                  text: {
                    de: "ein Musikstück geschrieben"
                  }
                },
                {
                  value: "mus_item_2",
                  text: {
                    de: "ein Musikstück kreativ abgeändert/neu interpretiert"
                  }
                },
                {
                  value: "mus_item_3",
                  text: {
                    de: "eine Melodie ausgedacht"
                  }
                },
                {
                  value: "mus_item_4",
                  text: {
                    de: "einen Rhythmus ausgedacht"
                  }
                },
                {
                  value: "mus_item_5",
                  text: {
                    de: "Töne künstlich erzeugt (z.B. mit Synthesizer)"
                  }
                },
                {
                  value: "mus_item_6",
                  text: {
                    de:
                      "eine Musikzusammenstellung erstellt (z.B. DJ, CD-Sampler)"
                  }
                }
              ]
            },
            {
              type: "matrix",
              name: "Handarbeiten",
              title: {
                de: this.state.caInstructions[2]
              },
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "1",
                  text: {
                    de: this.state.caScale[0]
                  }
                },
                {
                  value: "2",
                  text: {
                    de: this.state.caScale[1]
                  }
                },
                {
                  value: "3",
                  text: {
                    de: this.state.caScale[2]
                  }
                },
                {
                  value: "4",
                  text: {
                    de: this.state.caScale[3]
                  }
                },
                {
                  value: "5",
                  text: {
                    de: this.state.caScale[4]
                  }
                }
              ],
              rows: [
                {
                  value: "han_item_1",
                  text: {
                    de: "einen Alltagsgegenstand gebastelt"
                  }
                },
                {
                  value: "han_item_2",
                  text: {
                    de: "einen Alltagsgegenstand verschönert"
                  }
                },
                {
                  value: "han_item_3",
                  text: {
                    de: "ein Geschenk gebastelt"
                  }
                },
                {
                  value: "han_item_4",
                  text: {
                    de: "originelle Dekoration gestaltet"
                  }
                },
                {
                  value: "han_item_5",
                  text: {
                    de: "einen Garten geplant"
                  }
                },
                {
                  value: "han_item_6",
                  text: {
                    de: "Kleidung entworfen oder genäht"
                  }
                }
              ]
            },
            {
              type: "matrix",
              name: "Kochen",
              title: {
                de: this.state.caInstructions[3]
              },
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "1",
                  text: {
                    de: this.state.caScale[0]
                  }
                },
                {
                  value: "2",
                  text: {
                    de: this.state.caScale[1]
                  }
                },
                {
                  value: "3",
                  text: {
                    de: this.state.caScale[2]
                  }
                },
                {
                  value: "4",
                  text: {
                    de: this.state.caScale[3]
                  }
                },
                {
                  value: "5",
                  text: {
                    de: this.state.caScale[4]
                  }
                }
              ],
              rows: [
                {
                  value: "koc_item_1",
                  text: {
                    de: "ein originelles Gericht gekocht"
                  }
                },
                {
                  value: "koc_item_2",
                  text: {
                    de: "ein Gericht kreativ angerichtet"
                  }
                },
                {
                  value: "koc_item_3",
                  text: {
                    de: "Kekse/Torte kreativ verziert"
                  }
                },
                {
                  value: "koc_item_4",
                  text: {
                    de: "eine Skulptur aus Essen gemacht"
                  }
                },
                {
                  value: "koc_item_5",
                  text: {
                    de: "ein eigenes Rezept erfunden"
                  }
                },
                {
                  value: "koc_item_6",
                  text: {
                    de: "ein neues Getränk/Cocktail kreiert"
                  }
                }
              ]
            },
            {
              type: "matrix",
              name: "Sport",
              title: {
                de: this.state.caInstructions[4]
              },
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "1",
                  text: {
                    de: this.state.caScale[0]
                  }
                },
                {
                  value: "2",
                  text: {
                    de: this.state.caScale[1]
                  }
                },
                {
                  value: "3",
                  text: {
                    de: this.state.caScale[2]
                  }
                },
                {
                  value: "4",
                  text: {
                    de: this.state.caScale[3]
                  }
                },
                {
                  value: "5",
                  text: {
                    de: this.state.caScale[4]
                  }
                }
              ],
              rows: [
                {
                  value: "spo_item_1",
                  text: {
                    de:
                      "Neue Tricks/Bewegungsabfolgen erfunden im Geschicklichkeitssport (z.B. Jonglieren)"
                  }
                },
                {
                  value: "spo_item_2",
                  text: {
                    de:
                      "neue Tricks/Bewegungsabfolgen erfunden im Wintersport (z.B. Schifahren, Snowboard)"
                  }
                },
                {
                  value: "spo_item_3",
                  text: {
                    de:
                      "neue Tricks/Bewegungsabfolgen erfunden im Sommersport (z.B. Fahrrad, Skateboard)"
                  }
                },
                {
                  value: "spo_item_4",
                  text: {
                    de:
                      "neue Tricks/Bewegungsabfolgen erfunden im Kampfsport (z.B. Karate, Judo)"
                  }
                },
                {
                  value: "spo_item_5",
                  text: {
                    de:
                      "neue Tricks/Bewegungsabfolgen erfunden in anderen Sportbereichen"
                  }
                },
                {
                  value: "spo_item_6",
                  text: {
                    de: "ein abwechslungsreiches Sporttraining geplant"
                  }
                }
              ]
            },
            {
              type: "matrix",
              name: "Bildende_Kunst",
              title: {
                de: this.state.caInstructions[5]
              },
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "1",
                  text: {
                    de: this.state.caScale[0]
                  }
                },
                {
                  value: "2",
                  text: {
                    de: this.state.caScale[1]
                  }
                },
                {
                  value: "3",
                  text: {
                    de: this.state.caScale[2]
                  }
                },
                {
                  value: "4",
                  text: {
                    de: this.state.caScale[3]
                  }
                },
                {
                  value: "5",
                  text: {
                    de: this.state.caScale[4]
                  }
                }
              ],
              rows: [
                {
                  value: "bik_item_1",
                  text: {
                    de: "eine Fotozusammenstellung oder Fotomontage gemacht"
                  }
                },
                {
                  value: "bik_item_2",
                  text: {
                    de: "ein Logo/Banner entworfen"
                  }
                },
                {
                  value: "bik_item_3",
                  text: {
                    de: "ein Gebäude geplant"
                  }
                },
                {
                  value: "bik_item_4",
                  text: {
                    de: "ein Bild/eine Grafik ausgedacht und gemalt"
                  }
                },
                {
                  value: "bik_item_5",
                  text: {
                    de: "eine Skulptur entworfen"
                  }
                },
                {
                  value: "bik_item_6",
                  text: {
                    de:
                      "eine Skizze für Neugestaltung eines Innenraums angefertigt"
                  }
                }
              ]
            },
            {
              type: "matrix",
              name: "Darstellende_Kunst",
              title: {
                de: this.state.caInstructions[6]
              },
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "1",
                  text: {
                    de: this.state.caScale[0]
                  }
                },
                {
                  value: "2",
                  text: {
                    de: this.state.caScale[1]
                  }
                },
                {
                  value: "3",
                  text: {
                    de: this.state.caScale[2]
                  }
                },
                {
                  value: "4",
                  text: {
                    de: this.state.caScale[3]
                  }
                },
                {
                  value: "5",
                  text: {
                    de: this.state.caScale[4]
                  }
                }
              ],
              rows: [
                {
                  value: "dak_item_1",
                  text: {
                    de: "eine Rolle in einem Theater gespielt"
                  }
                },
                {
                  value: "dak_item_2",
                  text: {
                    de: "ein Puppentheater/Kasperltheater aufgeführt"
                  }
                },
                {
                  value: "dak_item_3",
                  text: {
                    de: "einen neuen Tanz ausgedacht"
                  }
                },
                {
                  value: "dak_item_4",
                  text: {
                    de: "einen Tanz neu interpretiert"
                  }
                },
                {
                  value: "dak_item_5",
                  text: {
                    de: "einen Film/Video gemacht"
                  }
                },
                {
                  value: "dak_item_6",
                  text: {
                    de:
                      "eine Animation (z.B. Stop Motion, Trickfilm, etc.) gemacht"
                  }
                }
              ]
            },
            {
              type: "matrix",
              name: "Technik_und_Naturwissenschaft",
              title: {
                de: this.state.caInstructions[7]
              },
              isRequired: this.state.requiredQ,
              columns: [
                {
                  value: "1",
                  text: {
                    de: this.state.caScale[0]
                  }
                },
                {
                  value: "2",
                  text: {
                    de: this.state.caScale[1]
                  }
                },
                {
                  value: "3",
                  text: {
                    de: this.state.caScale[2]
                  }
                },
                {
                  value: "4",
                  text: {
                    de: this.state.caScale[3]
                  }
                },
                {
                  value: "5",
                  text: {
                    de: this.state.caScale[4]
                  }
                }
              ],
              rows: [
                {
                  value: "tun_item_1",
                  text: {
                    de: "eine wissenschaftliche Arbeit geschrieben"
                  }
                },
                {
                  value: "tun_item_2",
                  text: {
                    de: "eine Theorie entwickelt um Phänomene zu erklären"
                  }
                },
                {
                  value: "tun_item_3",
                  text: {
                    de:
                      "ein praktisches Problem mit einem eigenen technischen Trick gelöst"
                  }
                },
                {
                  value: "tun_item_4",
                  text: {
                    de:
                      "etwas konstruiert, das wissenschaftliches Wissen erfordert"
                  }
                },
                {
                  value: "tun_item_5",
                  text: {
                    de: "Computerprogramm geschrieben"
                  }
                },
                {
                  value: "tun_item_6",
                  text: {
                    de: "eine eigene Webseite erstellt"
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
          percent={((this.props.count + 1) / this.props.total + 3) * 100}
          filledBackground="linear-gradient(to right,rgb(255, 187, 153), rgb(255, 134, 73))"
        /> */}

        <div className="questionnaire-description">
          <div className="wrapper">
            <div className="task-heading">
              <span className="task-number-questionnaire">
                {this.props.index + 1}
              </span>
              <h1 className="questionnaire-heading">Kreative Aktivitäten</h1>
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

    // var onCompleteComponent = this.state.isCompleted
    //   ? this.props.incrementSequenceCounter()
    //   // ? this.props.history.push("/post_questionnaire")
    //   : null;

    return (
      <div>
        {surveyRender}
        {/* {onCompleteComponent} */}

        {/* <Survey.Survey model={model} onComplete={this.onComplete} /> */}
      </div>
    );
  }
}

export default ICAA;
