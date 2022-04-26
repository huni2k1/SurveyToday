import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
import "survey-core/survey.i18n.js";
import "survey-core/defaultV2.css";
import "./DoSurveyPage.css";
import { useNavigate } from 'react-router-dom';

export class DoSurveyPage extends Component {
    constructor() {
        super();
        this.survey = new Survey.Model();
        this.survey.onValueChanged.add((sender, options) => {
            console.log("value changed!");
        });
        this.survey.onComplete.add((sender, options) => {
            console.log("Complete! Response:" + JSON.stringify(sender.data));
        });
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const {navigation} = this.props;
        navigation('/homepage/dosurvey/'+this.state.value);

    }
    render() {
        return <form className="dosurveyform">
            <label>
                Input the SurveyID:
                <input type="text" value={this.state.value} onChange={this.handleChange} name="name" />
            </label>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>;
    }

}

export default function(props){
    const navigation = useNavigate();
    return <DoSurveyPage navigation={navigation} />;
}