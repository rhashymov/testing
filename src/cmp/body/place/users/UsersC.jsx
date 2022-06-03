import * as axios from "axios";
import React from "react";
import styles from './Users.module.css';
import userPhoto from './../../../../img/avatar.jpg'

class User extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then( response =>  {
            this.props.setUsers(response.data.items)
            this.props.setUsersCount(response.data.totalCount)
        }) 
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then( response =>  {
            this.props.setUsers(response.data.items)
        }) 
    }
    render() {

        let pagesCount = Math.ceil(this.props.totolUsersCount / this.props.pageSize) 
        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);
        return <div>
            <div>
                {slicedPages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage} onClick={ (e) => {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
        {
        this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt='logo' />
                </div>
                <div>
                    {u.followed 
                    ? <button onClick={() => {this.props.unfollow(u.id)}}>unfollow</button>
                    : <button onClick={() => {this.props.follow(u.id)}}>follow</button>
                }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)
        }
    </div>
    }
}

export default User