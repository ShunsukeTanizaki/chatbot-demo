import React from 'react';
import './App.css';
import defaultDataset from './dataset'
import './assets/styles/style.css';

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

    render() {
        return (
            <div>

            </div>
        );
    }
}

