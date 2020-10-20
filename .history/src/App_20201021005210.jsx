import React from 'react';
import defaultDataset from './dataset'
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            chats: [],
            currentId: "init",
            dataset: defaultDataset,
            open: false
        }
    }

    displayNextQuestion = (nextQuestionId) => {
        const chats = this.state.shats
        chats.push({
            text: this.state.dataset[nextQuestionId].question,
            type: 'question'
        })
        this.setState({
            answers: this.state.dataset[nextQuestionId].qustion,
            chats: chats,
            currentId: nextQuestionId
        })
    }

    selectAnswer = (selectedAnswer, nextQuestionId) => {
        switch (true) {
            case (nextQuestionId === 'init'):
                break;
            default:
                const chats = this.state.chats;
                chats.push({
                    text: selectedAnswer,
                    type: 'answer'
                })
        
                this.setState({
                    chats: chats
                })

                this.displayNextQuestion(nextQuestionId)
                break;
        }
    }
    
    initAnswer = () => {
        const initDataset = this.state.dataset[this.state.currentId];
        const initAnswers = initDataset.answers;
        this.setState({
            answers: initAnswers
        })
    }

    componentDidMount() {
        this.initChats();
        this.initAnswer()
    }

    render() {
        return (
            <section className="c-section">
                <div className="c-box">
                    <Chats chats={this.state.chats}/>
                    <AnswersList answers={this.state.answers}/>
                </div>
            </section>
        );
    }
}

