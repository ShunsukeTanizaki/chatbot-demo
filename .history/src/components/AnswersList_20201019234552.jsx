import React from "react";
import { Answer } from './index'

const AnswersList = () => {
    return (
        <div className="c-grid__answer">
            <Answer color="primary"/>
            <Answer />
            <Answer />
            <Answer />
        </div>
    )
}

export default AnswersList