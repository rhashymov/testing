import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from "./../Profile.module.css"
import Loader from "../../../../common/loader/Loader"



const Posts = (props) => {
    let posts = props.posts.map(p => <MyPosts posts={p.message} />)
    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    if(!props.profile) {
        return <Loader/>
    }
    return <div>
        <div>
            <img src={props.profile.photos.large} />
            <p>i am {props.profile.fullName}</p>
        </div>
        
        <div>
            <textarea className={s.post} ref={newPostElement} value={props.newPostText} placeholder="Напишите Ваш текст" onChange={onPostChange} />
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div>
            {posts}
        </div>
    </div>
}

export default Posts