import React from "react";
import { Answer } from './index'

const AnswersList = (props) => {
    return (
        <div className="c-grid__answer">
            {props.answers.map((value, index) => {
                return <Answer content={value.content} key={index.toString()} select={props.selectAnswer}/>
            })}
        </div>
    )
}

export default AnswersList