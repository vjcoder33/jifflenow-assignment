import React, { Component } from 'react';
import QuestionText from './QuestionText';
import QuestionOptions from './QuestionOptions';
import Choices from './Choices';

class Question extends Component {

    render() {
        let { text, options, answer } = this.props.question;        
        return (
            <div className="question">
                <QuestionText text = { text }/>
                <QuestionOptions options = { options }/>
                <Choices nextQuestion = { this.props.nextQuestion } answer = { answer } />
            </div>            
        );
    }
}

export default Question;


