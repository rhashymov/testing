import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setUsersCount, toogleIsFetching } from "../../../../redux/usersReducer";
import Users from "./UsersC"
import Loader from "../../../common/loader/Loader";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (p) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <>
            { this.props.isFatching ? <Loader /> : null}
            <Users totolUsersCount={this.props.totolUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totolUsersCount: state.usersPage.totolUsersCount,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => { dispatch(followUserAC(userId)) },
//         unfollow: (userId) => { dispatch(unfollowUserAC(userId)) },
//         setUsers: (users) => { dispatch(setUsersAC(users)) },
//         setCurrentPage: (currentPage) => { dispatch(setCurrentPage(currentPage)) },
//         setUsersCount: (totalCount) => {dispatch(setUsersCount(totalCount))},
//         toogleIsFetching: (isFetching) => {dispatch(toogleIsFetching(isFetching))}
//     }
// }



const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersCount, toogleIsFetching })(UsersAPIContainer)
export default UsersContainer