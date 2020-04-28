import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import Modal from './modal'


const MenuStyle = styled.div`
    background: #f56991;
    width: 100vw;
    display: flex;
    div{
        max-width: 1024px;
        margin: 0 auto;
        color: white;
        padding: 10px 5px;
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
                    <h2>
                        LYF COVID-19
                    </h2>
            </div>
            {/* <div>
            <ButSend>
                    <li>
                    <Link href = "#">
                            ร่วมส่งกำลังใจให้หมอ-พยาบาล
                    </Link>
                    </li>
            </ButSend>
            </div> */}
        </MenuStyle>
    )
}

export default Menu