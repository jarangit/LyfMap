import Menu from "./menu"
import globalStyles from './globalSty.js'



const Layout = (props) => {
    return(
        <div>
            <Menu/>
            {props.children}
            <style jsx global>
                {globalStyles}
            </style>
        </div>
    )
}

export default Layout