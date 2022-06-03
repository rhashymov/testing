import React from "react";
import { connect } from "react-redux";
import { followUserAC, unfollowUserAC, setUsersAC, setCurrentPage, setUsersCount } from "../../../../redux/usersReducer";
import Users from "./UsersC";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totolUsersCount: state.usersPage.totolUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followUserAC(userId))},
        unfollow: (userId) => {dispatch(unfollowUserAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPage(currentPage))},
        setUsersCount: (totalCount) => {dispatch(setUsersCount(totalCount))}
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer