import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"



const Profile = (props) => {
    let posts = props.posts.map(p => <MyPosts posts={p.message} />)
    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return <div>
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

export default Profile