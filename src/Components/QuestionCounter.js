import React, { Component } from 'react';

class QuestionCounter extends Component {

    render() {
        let { nth, totalQuestions } = this.props;        
        return (
            <div className="question-counter">
                Javascript Quiz { nth } of { totalQuestions }
            </div>            
        );
    }
}

export default QuestionCounter;


