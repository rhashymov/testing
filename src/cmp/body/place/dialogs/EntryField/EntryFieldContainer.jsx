import React from "react"
import { connect } from "react-redux"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../../redux/dialogsReducer"
import EntryField from "./EntryField"



// const EntryFieldContain1er = (props) => {
//     return(
//     <StoreContext.Consumer>
//     { store => {
//     let state = store.getState().dialogsPage
//     let sendMessage = () => {
//         store.dispatch(addMessageActionCreator())
//     }
//     let onMessageChange = (text) => {
//        store.dispatch(updateNewMessageTextActionCreator(text))
//     }
    
//     return (<EntryField newMessageBody={state.newMessageBody} sendMessage={sendMessage} onMessageChange={onMessageChange} />)
//     }
//     }
//     </StoreContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        newMessageBody:state.dialogsPage.newMessageBody,
        messages:state.dialogsPage.messages,
        dialogs:state.dialogsPage.dialogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {dispatch(updateNewMessageTextActionCreator(text))},
        sendMessage: () => {dispatch(addMessageActionCreator())}
    }
}

const EntryFieldContainer = connect(mapStateToProps, mapDispatchToProps)(EntryField)

export default EntryFieldContainer