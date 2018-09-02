import React, { Component } from 'react';

class Result extends Component {

    getResultList = (resultList) => {
        return resultList.map((result, index) => { 
            let answerClass = result.correctAnswer === result.userAnswer ? "correct-answer" : "wrong-answer";
            return  (
                        <div className="result" key={ index }>
                            <div className="question-no"> { result.questionNo }</div>
                            <div className="question-text"> { result.questionText } </div>
                            <div className={ answerClass }></div>                            
                        </div>
                    );
        });
    }

    render() {        
        let { resultList } = this.props;
        return (
            <div className="result-list center">
                { this.getResultList(resultList) }
            </div>
        )
    }
}

export default Result;