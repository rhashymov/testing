import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "../dialogItem/DialogItem"
import MessageItem from "../MessageItem/MessageItem"

const EntryField = (props) => {
    
    let message = React.createRef()
    let sendMessage = () => {
        
        props.sendMessage()
    }
    let onMessageChange = () => {
        let text = message.current.value
        props.onMessageChange(text)
    }
    let messagesItems = props.messages.map( m => <MessageItem message={m.message} key={m.id}/>)
    let dialogItems = props.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    return (<div>
    <div className={s.container}>
        <div>
            {dialogItems}
        </div>
        <div>
            {messagesItems}
        </div>
    </div><div>
            <textarea ref={message} value={props.newMessageBody} placeholder='Напишите Ваш текст' onChange={onMessageChange} />
        </div><div>
            <button onClick={sendMessage}>Отправить сообщение</button>
        </div>
        
        </div>)
}

export default EntryField