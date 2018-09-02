import React, { Component } from 'react';

class Choices extends Component {

    getChoices = () => {        
        return (
            <ul className = "choices-list" onClick={ this.choiceSelected }>
                <li data-option="1">
                    <span className="center" > A </span>
                </li>
                <li data-option="2">
                    <span className="center"> B </span>
                </li>
                <li data-option="3">
                    <span className="center"> C </span>
                </li>
                <li data-option="4">
                    <span className="center"> D </span>
                </li>                
            </ul>
        )
    };

    render() {        
        return (
            <div className="choices-container">                
                { this.getChoices() }
            </div>
        );
    }

    choiceSelected = (evt) => {        
        let liDOM = evt.target.closest('li');
        if(liDOM) {            
            let correctAnswer = this.props.answer;
            let userAnswer = parseInt(liDOM.dataset.option, 10);
            this.props.nextQuestion({
                userAnswer: userAnswer,
                correctAnswer: correctAnswer
            });
        }        
    }

}

export default Choices;


