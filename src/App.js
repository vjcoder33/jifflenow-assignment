import React, { Component } from 'react';
import Question from './Components/Question';
import QuestionCounter from './Components/QuestionCounter'
import Result from './Components/Result';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.currentQuestion = 0;
    this.questions = [];
    this.totalQuestions = this.questions.length;  
    this.resultList = []; // contains list of object { questionNo: <>, correctAnswer: <ans>, userAnswer: <ans> }     
    this.state = {
      showLoader: true
    }
}

  nextQuestion = (userAnswer) => {    
    this.updateResultList(userAnswer);
    this.currentQuestion = this.currentQuestion + 1;
    if(this.currentQuestion > this.totalQuestions - 1) {
      this.setState({
        showResult: true
      });
    } else {
      this.setState({
        question: this.questions[this.currentQuestion],
        currentQuestion: this.currentQuestion
      });
    }    
  }

  updateResultList = ({ userAnswer }) => {
    let question = this.getQuestion(this.currentQuestion);
    this.resultList.push({
      questionNo: this.currentQuestion + 1,
      questionText: question.text,
      correctAnswer: question.answer,      
      userAnswer: userAnswer
    });
  }

  getQuestion = (qNo) => {
    return this.questions[qNo];
  }

  render() {    
    let showLoader = this.state.showLoader;
    return (
      <div className="App center">    
        {
              showLoader ?
                <div className="center">Loding...</div> :              
                  this.state.showResult ? 
                ( <Result resultList = { this.resultList } /> ) :
                ( <div>
                    <QuestionCounter nth = { this.currentQuestion + 1 } totalQuestions = { this.totalQuestions }/>
                    <Question question = { this.state.question } nextQuestion = { this.nextQuestion.bind(this) }/>
                  </div> )              
        }
      </div>
    );
  }

  componentDidMount() {
    let url = "https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json";
    fetch(url)    
      .then((response) => {
        return response.json()
      })
      .then((questions) => {
        this.totalQuestions = questions.length;
        this.questions = questions;
        this.setState({
          showLoader: false,
          question: this.questions[this.currentQuestion],
          currentQuestion: this.currentQuestion,
          showResult: false,          
        })
      })
  }
  

}

export default App;