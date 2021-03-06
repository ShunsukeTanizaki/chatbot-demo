import React, { useState, useEffect, useCallback } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './ TextInput'



const FormDaialog = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    const inputName = useCallback((event) => {
        setName(event.target.value)
    }, [setName]);
    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail]);
    const inputDescription = useCallback((event) => {
        setDescription(event.target.value)
    }, [setDescription]);

    // Slackに問い合わせがあったことを通知する
    const submitForm = () => {

        const payload = {
            text: 'お問い合わせがありました\n' +
                'お名前：' + name + '\n' +
                'Email:' + email + '\n' +
                'お問い合わせ内容：\n' + description
        }

        // Slack
        // const url = 'https://hooks.slack.com/services/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'

        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(payload)
        // }).then(() => {
        //     alert('送信が完了しました。追ってご連絡します！');
        //     setName("")
        //     setEmail("")
        //     setDescription("")
        //     return props.handleClose()
        // })


        // chatwork
        const CHATWORK_API_KEY = '99f2588343faebfb0fc15c28b64f974b'
        const roomId = '168685393'
        const url = "https://api.chatwork.com/v2/rooms/" + roomId + "/messages?force=0";
        const options = {
            'method': 'POST',
            'headers': { 'X-ChatWorkToken': CHATWORK_API_KEY },
            'payload': { 'body': JSON.stringify(payload) }
        };

        fetch(url, options)
            .then((httpResponse) => {
                if (httpResponse.ok) {
                    return httpResponse.json();
                } else {
                    return Promise.reject("Fetch did not succeed");
                }
            })
            .catch(err => console.log(err));
    }

    
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
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
                <Button onClick={props.handleClose} color="primary">
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