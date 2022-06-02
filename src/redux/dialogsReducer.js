const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'Rustam'},
        {id: 2, name: 'Yulia'}
    ],
    messages: [
        {id: 1, message: 'bye'},
        {id: 2, message: 'Hi'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id:3, 
                message:state.newMessageBody
            }
            let stateCopy = {...state, messages: [...state.messages]}
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageBody = ''
            return stateCopy
        case UPDATE_NEW_MESSAGE_TEXT: {
                let stateCopy = {...state}
                stateCopy.newMessageBody = action.newText
                return stateCopy
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
export default dialogsReducer