import React from "react"
import { Route } from "react-router-dom"
import EntryFieldContainer from "./dialogs/EntryField/EntryFieldContainer"
import s from './Place.module.css'
import ProfileContainer from "./profile/ProfileContainer"
import UsersContainer from "./users/UsersContainer"

const Place = (props) => {
    return <div className={s.place}>
            <Route path="/dialogs" render={() => <EntryFieldContainer  />} />
            <Route path="/profile/:userId?" render={ () =>  <ProfileContainer  />} />
            <Route path="/users" render={() =>  <UsersContainer  /> } />
    </div>
}

export default Place