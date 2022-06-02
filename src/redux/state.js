import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'


export let rerenderEntireTree = () => {
    console.log('state changed')
}

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Rustam'},
                {id: 2, name: 'Yulia'}
            ],
            messages: [
                {id: 1, message: 'bye'},
                {id: 2, message: 'Hi'}
            ],
            newMessageBody: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'Напишите Ваш текст'
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    }
    ,
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    } 
}


export default store
window.store = store