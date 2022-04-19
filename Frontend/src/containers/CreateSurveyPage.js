import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
import * as SurveyCreatorCore from "survey-creator-core";
import * as SurveyCreator from "survey-creator-react";
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
    Survey
    .Serializer
    .removeProperty("panelbase", "visibleIf");
     Survey
    .Serializer
    .removeProperty("question", "visibleIf");
    Survey.Serializer
    .removeProperty("panellogic", "visibleIf");
    var options = {
      haveCommercialLicense: true, //Add this line
      questionTypes: ["text", "checkbox", "radiogroup"],
      showJSONEditorTab: false,
      pageEditMode: "single",
  };

    this.creator = new SurveyCreator.SurveyCreator(options);
    this.creator.saveSurveyFunc = this.saveMySurvey;
    this.creator
    .onShowingProperty
    .add(function (sender, options) {
        if (options.obj.getType() == "survey") {
            options.canShow = options.property.name == "title";
        }
    });
    this.creator.JSON = json;

  }
  render() {
    return (
      <SurveyCreator.SurveyCreatorComponent creator={this.creator} />);
  }
  saveMySurvey = () => {
    console.log(JSON.stringify(this.creator.text));
    
  };
}

export default CreateSurveyPage