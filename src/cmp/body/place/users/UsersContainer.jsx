import React from "react";
import { connect } from "react-redux";
import { followUserAC, unfollowUserAC, setUsersAC } from "../../../../redux/usersReducer";
import Users from "./UsersC";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followUserAC(userId))},
        unfollow: (userId) => {dispatch(unfollowUserAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer