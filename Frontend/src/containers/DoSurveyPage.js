import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
//Import localization
import "survey-core/survey.i18n.js";
//Import Survey styles
import "survey-core/defaultV2.css";

export class DoSurveyPage extends Component {
    constructor() {
        super();
        const json = {
            elements: [
                { type: "text", name: "customerName", title: "What is your name?", isRequired: true }
            ]
        };
        this.survey = new Survey.Model(json);
        this.survey.onValueChanged.add((sender, options) => {
        console.log("value changed!");
        });
        this.survey.onComplete.add((sender, options) => {
        console.log("Complete! Response:" +  JSON.stringify(sender.data));
        });
    }
    render() {
        return <SurveyReact.Survey model={this.survey} />;
    }

} 

export default DoSurveyPage