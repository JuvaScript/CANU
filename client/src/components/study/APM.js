// Questionnaire Component

import React from "react";
import axios from "axios";

import * as Survey from "survey-react";
import "survey-react/survey.css";

import "./Questionnaire.css";

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

import Tasks from "./Tasks";

class APM extends React.Component {
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
          name: "Schlussfolgerndes Denken",
          elements: [
            {
              type: "html",
              name: "info_Item",
              html:
                "<img src='/images/Item_1_0.png' width='600' alt='Test Item 1' align='middle'/>"
            },
            {
              type: "html",
              name: "info_Anweisung",
              html:
                "Sobald Sie sich für eine Antwortmöglichkeit entschieden haben, klicken Sie auf die Antwortmöglichkeit."
            },
            {
              type: "imagepicker",
              name: "APM_1",
              title: {
                de: " "
              },
              isRequired: this.state.requiredQ,
              colCount: 4,
              choices: [
                {
                  value: "1",
                  imageLink: "/images/Item_1_1.png"
                },
                {
                  value: "2",
                  imageLink: "/images/Item_1_2.png"
                },
                {
                  value: "3",
                  imageLink: "/images/Item_1_3.png"
                },
                {
                  value: "4",
                  imageLink: "/images/Item_1_4.png"
                },
                {
                  value: "5",
                  imageLink: "/images/Item_1_5.png"
                },
                {
                  value: "6",
                  imageLink: "/images/Item_1_6.png"
                },
                {
                  value: "7",
                  imageLink: "/images/Item_1_7.png"
                },
                {
                  value: "8",
                  imageLink: "/images/Item_1_8.png"
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
        <ProgressBar
          percent={((this.props.count + 1) / this.props.total) * 100}
          filledBackground="linear-gradient(to right,rgb(255, 187, 153), rgb(255, 134, 73))"
        />

        <div className="questionnaire-description">
          <div className="wrapper">
            <div className="task-heading">
              <span className="task-number-questionnaire">2</span>
              <h1 className="questionnaire-heading">
                Schlussfolgerndes Denken
              </h1>
            </div>
            <p className="questionnaire-task-description">
              Bitte lösen Sie die folgende Aufgabe.
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

    var onCompleteComponent = this.state.isCompleted ? (
      <Tasks tasks={this.props.tasks} />
    ) : null;

    return (
      <div>
        {surveyRender}
        {onCompleteComponent}

        {/* <Survey.Survey model={model} onComplete={this.onComplete} /> */}
      </div>
    );
  }
}

export default APM;
