import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';AK
import Typography from '@material-ui/core/Typography';
import { getThemeProps } from '@material-ui/styles';

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    )
}

export default Chat