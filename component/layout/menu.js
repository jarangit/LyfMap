import styled from 'styled-components'
import { useState } from 'react'
import Modal from './modal'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Logo  from '../../lib/img/Microsite/Icon/Loveyou.png'


const MenuStyle = styled.div`
    background: white;
    border-top: solid 10px #f56991;
    width: 100vw;
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-width: 1024px;
        margin: 0 auto;
        padding: 5px 5px;
        input{
            width: 80%;
            border-style: none;
        }
        /* justify-content: space-between; */
    }

`
const ButSend =styled.div`
    border:solid 1px white;
    border-radius: 0.5rem;
    li{
        list-style:none;
    }
    a {
        text-decoration: none;
        color: white;   
    }
    :hover{
        background: white;
        a {
            color: #f56991;
        }
    }
    /* margin: 10px; */
`
const Menu = () => {

    return(
        <MenuStyle>
            <div>
                <div>
                    <FontAwesomeIcon icon = {faBars}  size="lg" color = '#f56991'/>
                </div>
                    <div>
                        ส่งต่อกำลังใจ สู้ COVID-19
                    </div>
                    <div><Link href="/LongDoMap" ><img src= {Logo} width='40'/></Link></div>
            </div>
                    <hr/>
           <div>
               <div><FontAwesomeIcon icon = {faSearch} size = 'lg' color = '#D1D1D1' /></div>
                <input type="text" placeholder="ค้นหาโรงพยาบาล" name="search2"/>
                <div><FontAwesomeIcon icon = {faCaretDown} size = "lg" color = '#D1D1D1'/></div>
           </div>
        </MenuStyle>
    )
}

export default Menu