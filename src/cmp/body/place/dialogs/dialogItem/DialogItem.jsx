import { Link } from "react-router-dom"

const DialogItem = (props) => {
    return <div>
        <div><Link to={'/dialogs/' + props.id}>{props.name}</Link></div>
    </div>
    
}

export default DialogItem