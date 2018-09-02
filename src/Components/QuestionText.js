import React, { Component } from 'react';

class QuestionText extends Component {

    render() {
        return (
            <div className="question-text">
                { this.props.text }
            </div>
        );
    }
}

export default QuestionText;


