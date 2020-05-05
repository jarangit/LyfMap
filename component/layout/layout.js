import Menu from "./menu"
import { createGlobalStyle } from 'styled-components'
import globalStyles from './globalSty.js'
import Document, { Head, Main, NextScript } from 'next/document'



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