import React, { useState, useEffect, useCallback } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './ TextInput'



const FormDaialog = () => {
        super(props);
        this.state = {
            name: "",
            email: "",
            description: ""
        }
        this.inputName = this.inputName.bind(this)
        this.inputEmail = this.inputEmail.bind(this)
        this.inputDescription = this.inputDescription.bind(this)

    const inputName = (event) => {
        this.setState({name: event.target.value}) 
    }
    const inputEmail = (event) => {
        this.setState({email: event.target.value}) 
    }
    const inputDescription= (event) => {
        this.setState({description: event.target.value}) 
    }

    // Slackに問い合わせがあったことを通知する
    const submitForm = () => {
        const name = this.state.name
        const email = this.state.email
        const description = this.state.description

        const payload = {
            text: 'お問い合わせがありました\n' +
                'お名前：' + name + '\n' +
                'Email:' + email + '\n' +
                'お問い合わせ内容：\n' + description
        }

        const url = 'https://hooks.slack.com/services/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'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert('送信が完了しました。追ってご連絡します！')
            this.setState({
                name: "",
                email: "",
                description: ""
            })
            return this.props.handleClose()
        })
    }

    return (
        <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
            <DialogContent>
                <TextInput
                    label={"お名前(必須)"}
                    multiline={false}
                    rows={1}
                    value={name}
                    type={"text"}
                    onChange={inputName}
                />
                <TextInput
                    label={"メールアドレス(必須)"}
                    multiline={false}
                    rows={1}
                    value={email}
                    type={"email"}
                    onChange={inputEmail}
                />
                <TextInput
                    label={"お問い合わせ内容(必須)"}
                    multiline={true}
                    rows={5}
                    value={description}
                    type={"text"}
                    onChange={inputDescription}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    キャンセル
                </Button>
                <Button onClick={submitForm} color="primary" autoFocus>
                    送信する
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormDaialog