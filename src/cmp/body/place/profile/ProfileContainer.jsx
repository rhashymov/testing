import { Component } from "react"
import * as axios from "axios";
import { connect } from "react-redux"
import { addPost, setUserProfile, updateNewPostText } from "../../../../redux/profileReducer"
import Posts from "./Posts/Posts"
import { withRouter } from "react-router-dom";


class ProfileAPI extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <Posts {...this.props } />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = {
        addPost,
        setUserProfile,
        updateNewPostText
}

const withRouteProfileContainer = withRouter(ProfileAPI)
export default connect(mapStateToProps, mapDispatchToProps)(withRouteProfileContainer)

