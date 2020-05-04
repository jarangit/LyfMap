import styled from 'styled-components'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons' 
import Link from 'next/link'


const ModalSty = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 50%; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    @media all and  (max-width: 650px){
        div{
            width:85%;
        }
    }
   
`
const Card =styled.div`
    background-color: #fefefe;
    margin: auto;
    width: 50%;
    padding: 20px;
    border-radius: 0.5rem;
    text-align:center;

    h2{
        color:#f56991;
    }
    h4{
        /* padding-bottom:20px; */
        color:#aaaaaa;
    }
    span{
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        }
        textarea{
            width: 50%;
            height: 50px;
        }

`
const FB = styled.li`
    background: #337AB7;
    border-radius: 0.3rem;
    a{
        width:100%;
        display:flex;
        align-items:center;
        text-decoration:none;
        color:white;
        p{
            width:100%;
            padding: 0 10%;
        }
        div{
        background-color:#22609D;
        width:20%;
        padding:10px 0;
        }
    }
   

`
const GG = styled.li`
    background: #D9534E;
    border-radius: 0.3rem;
    margin: 10px 0;
    a{
        width:100%;
        display:flex;
        align-items:center;
        text-decoration:none;
        color:white;
        p{
            width:100%;
            padding: 0 10%;
        }
        div{
        background-color:#CB3F3B;
        width:20%;
        padding:10px 0;
        }
    }
`
const TW = styled.li`
    background:#5BC0DE;
    border-radius: 0.3rem;
    margin: 10px 0;
    a{
        width:100%;
        display:flex;
        align-items:center;
        text-decoration:none;
        color:white;
        p{
            width:100%;
            padding: 0 10%;
        }
        div{
        background-color:#3CACCE;
        width:20%;
        padding:10px 0;
        }
    }
`
const Ul = styled.ul`
    margin:0;
    border-top: solid 1px #e2e2e2;
    padding: 30px 0;
    li{
        list-style: none;
    }
`


const Modal = (props) => {
    // const [ numStep, setNumStep ] = useState(true);
    // const [ subStep, setSubStep ] = useState(true);
    // const addSubStep = () => { setSubStep(!subStep) }
    // const addSubStepClose = () => { setSubStep(true) }
    // const ShowSubStep = () => {
    //     if(subStep === true){
    //         return(
    //             <div>
    //                 <span onClick = {props.onClose}>x</span>
    //                 <div>เขียนข้อความให้กำลังใจของคุณ</div>
    //                 <textarea></textarea>
    //                 <ButSubmit onClick = {addSubStep}>ส่งข้อความ</ButSubmit>
    //             </div>
    //         )
    //     }else{
    //         return(
    //             <div>
    //                 <span onClick = {props.onClose} width="50">x</span>
    //                 <Img src="https://png.pngtree.com/svg/20170609/correct_operation__609597.png"/>
    //                 <div>ส่งกำลังใจของคุณไปยังคุณหมอและพยาบาลเรียบร้อย</div>
    //             </div>
    //         )
    //     }
    // }

    // const addNumStep = () => { setNumStep(!numStep) }
    const ShowChillModal = () => {
        if(props.isOpen === true){
            return(
                   <ModalSty>
                    <Card>
                    <span onClick = {props.onClose}>x</span>
                    <h2>เข้าสู้ระบบด้วย</h2>
                    <h4>Socail Network</h4>
                    <Ul>
                        <FB>
                            <a href ="#">
                            <div><FontAwesomeIcon icon = {faFacebookF} color= "#FFFFFF"/></div>
                            <p>เข้าสู้ระบบด้วย Facebook</p>
                            </a>
                        </FB>
                        <TW>
                            <a href ="#">
                            <div><FontAwesomeIcon icon = {faFacebookF} color= "#FFFFFF"/></div>
                            <p>เข้าสู้ระบบด้วย Twitter</p>
                            </a>
                        </TW>
                        <GG>
                            <a href ="#">
                            <div><FontAwesomeIcon icon = {faGoogle} color= "#FFFFFF"/></div>
                            <p>เข้าสู้ระบบด้วย Google</p>
                            </a>
                        </GG>
                    </Ul>
                    </Card>
                 </ModalSty>
            )
        }else{
            return ''
        }
    }
    // const showModal = () => {
    //     if( props.isOpen === true){
    //         return(
    //             <ModalSty>
    //                 {ShowChillModal()}
    //             </ModalSty>
    //         )
    //     }else {
    //         return ''
    //     }
    // }
    return ShowChillModal()
}

export default Modal