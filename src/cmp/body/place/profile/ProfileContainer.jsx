import { connect } from "react-redux"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profileReducer"
import Profile from "./Profile"


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPostText:(text) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer