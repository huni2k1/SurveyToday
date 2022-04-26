import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
import * as SurveyCreatorCore from "survey-creator-core";
import * as SurveyCreator from "survey-creator-react";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { getDatabase, ref, onValue,set} from "firebase/database";
import { useNavigate } from "react-router-dom";
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
    const db = getDatabase();
    const x=ref(db, 'createdSurvey');
    onValue(x, (snapshot) => {
    const data = snapshot.val();
    if(data)
      this.id=Object.keys(data).length+1;
    else
      this.id=1;
    });
  }
  render() {
    return (
      <SurveyCreator.SurveyCreatorComponent creator={this.creator} />);
  }
  saveMySurvey = () => {
    console.log(this.creator.text);
    const db = getDatabase();
    set(ref(db, 'createdSurvey/' + this.id), {
      content:this.creator.text,
      user:localStorage.getItem('user'),
    });
    window.location.href = 'https://surveytoday2.web.app/homepage/pastsurveys';
  };
}

export default CreateSurveyPage