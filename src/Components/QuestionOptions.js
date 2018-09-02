import React, { Component } from 'react';

class QuestionOptions extends Component {

    renderOptions = () => {
        // This should be in some Utils
        let slNoHash = {
            0: 'A',
            1: 'B',
            2: 'C',
            3: 'D',
            4: 'E'
        };
        return this.props.options.map((option, index)=>{
            return (
                <li key={ index } className="option">
                    <span className=""> { slNoHash[index] } - </span>
                    <span className=""> { option } </span>
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="options-list">
                { this.renderOptions() }
            </ul>
        );
    }
}

export default QuestionOptions;


