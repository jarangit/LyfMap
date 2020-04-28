import Menu from "./menu"
import { createGlobalStyle } from 'styled-components'
import globalStyles from './globalSty.js'


const GlobalStyle = createGlobalStyle`
body,html{
    padding: 0 ;
    margin: 0 ; 
    height: 100%; 
  }
  body{
    display: flex;
    flex-direction: column;
  }
`

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