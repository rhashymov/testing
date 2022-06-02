import React from "react"
import { Route, Routes } from "react-router-dom"
import EntryFieldContainer from "./dialogs/EntryField/EntryFieldContainer"
import s from './Place.module.css'
import ProfileContainer from "./profile/ProfileContainer"
import UsersContainer from "./users/UsersContainer"

const Place = (props) => {
    return <div className={s.place}>
        <Routes>
            <Route path="/dialogs" element={<EntryFieldContainer  />  } />
            <Route path="/profile" element={<ProfileContainer  />} />
            <Route path="/users" element={<UsersContainer  />  } />
        </Routes>
    </div>
}

export default Place