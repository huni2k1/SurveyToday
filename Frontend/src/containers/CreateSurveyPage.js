import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
import * as SurveyCreatorCore from "survey-creator-core";
import * as SurveyCreator from "survey-creator-react";
//Import Survey localization
import "survey-core/survey.i18n.js";
//Import Survey Creator localization
import "survey-creator-core/survey-creator-core.i18n.js";

//Import Survey and Creator styles
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

export class CreateSurveyPage extends Component {
  constructor() {
    super();
    const json = {
        elements: [
            { type: "text", name: "customerName", title: "What is your name?", isRequired: true }
        ]
    };
    var options = {
      showLogicTab: true,
      haveCommercialLicense: true //Add this line
  };
    this.creator = new SurveyCreator.SurveyCreator(options);
    this.creator.saveSurveyFunc = this.saveMySurvey;
    this.creator.JSON = json;
  }
  render() {
    return (<div>
      <SurveyCreator.SurveyCreatorComponent creator={this.creator} />
    </div>);
  }
  saveMySurvey = () => {
    console.log(JSON.stringify(this.creator.text));
  };
}

export default CreateSurveyPage