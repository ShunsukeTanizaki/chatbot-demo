import React { useState, useEffect, useCallback }from 'react';
// import defaultDataset from './dataset' // local
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';
import FormDialog from './components/Forms/ FormDialog'
import { db } from './firebase/index'
import { useCallback } from 'react';

const App = () => {
    const [answers, setAnswers] = useState([]);
    const [chats, setchats] = useState([]);
    const [currentId, setCurrentId] = useState("init");
    const [dataset, setDataset] = useState({});
    const [open, setOpen] = useState(false);

        this.selectAnswer = this.selectAnswer.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)

    displayNextQuestion = (nextQuestionId) => {
        const chats = this.state.chats
        chats.push({
            text: this.state.dataset[nextQuestionId].question,
            type: 'question'
        })
        this.setState({
            answers: this.state.dataset[nextQuestionId].answers,
            chats: chats,
            currentId: nextQuestionId
        })
    }

    selectAnswer = (selectedAnswer, nextQuestionId) => {
        switch (true) {
            case (nextQuestionId === 'init'):
                setTimeout(() => { this.displayNextQuestion(nextQuestionId) }, 500);
                break;
            
            case (nextQuestionId === 'contact'):
                this.handleClickOpen();
                break;
            
            case (/^https:*/.test(nextQuestionId)):
                const a = document.createElement('a');
                a.href = nextQuestionId;
                a.target = '_brank';
                a.click();
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

                setTimeout(()=> { this.displayNextQuestion(nextQuestionId) }, 1000) 
                break;
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    initDataset = (dataset) => {
        this.setState({dataset: dataset})
    }

    componentDidMount() {
        (async () => {
            const dataset = this.state.dataset
            await db.collection('questions').get().then(snapshots => {
                snapshots.forEach(doc => {
                    const id = doc.id
                    const data = doc.data()
                    dataset[id] = data
                })
            })
            this.initDataset(dataset)
            const initAnswer = "";
            this.selectAnswer(initAnswer, this.state.currentId)
        })()
    }

    componentDidUpdate() {
        const scrollArea = document.getElementById('scroll-area')
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight
        }
    }

    render() {
        return (
            <section className="c-section">
                <div className="c-box">
                    <Chats chats={this.state.chats}/>
                    <AnswersList answers={this.state.answers} select={this.selectAnswer} />
                    <FormDialog open={this.state.open} handleClose={this.handleClose}/>
                </div>
            </section>
        );
    }
}

export default App