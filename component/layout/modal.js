import styled from 'styled-components'
import { useState } from 'react'


const ModalSty = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  div{
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    width: 50%;
    border-radius: 1rem;
    text-align:center;

    span{
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        }
        ul{
            align-items:center;
            padding: 0;
            li{
                list-style:none;
                display:inline-block;
            }
        }
        textarea{
            width: 50%;
            height: 50px;
        }
    }

    @media all and  (max-width: 650px){
        div{
            width:85%;
        }
    }
   
`

const FB = styled.li`
    background: #4267b2;
    color:white;
    border: solid 1px #4267b2;;
    padding: 15px;
    margin: 15px 0;
    text-align: center;
    width: 50%;
    border-radius: 0.3rem;
    :hover{
        background: #5373b2;
        border: solid 1px #5373b2;;
    }

`
const GG = styled.li`
    background: #DA473A;
    color:white;
    border: solid 1px  #DA473A;
    padding: 15px;
    margin: 15px 0;
    text-align: center;
    width: 50%;
    border-radius: 0.3rem;
    :hover{
        background: #d6766f;
        border: solid 1px #d6766f;;
    }
`
const ButSubmit = styled.li`
    list-style:none;
    background: #f56991;
    color:white;
    border: solid 1px  #f56991;
    padding: 5px;
    margin: 15px auto;
    text-align: center;
    width: 20%;
    border-radius: 0.3rem;
    :hover{
        background: #f492ae;
        border: solid 1px #f492ae;

    }
`
const Img = styled.img`
    width: 100px;
`

const Modal = (props) => {
    const [ numStep, setNumStep ] = useState(true);
    const [ subStep, setSubStep ] = useState(true);
    console.log(subStep)
    const addSubStep = () => { setSubStep(!subStep) }
    const addSubStepClose = () => { setSubStep(true) }
    const ShowSubStep = () => {
        if(subStep === true){
            return(
                <div>
                    <span onClick = {props.onClose}>x</span>
                    <div>เขียนข้อความให้กำลังใจของคุณ</div>
                    <textarea></textarea>
                    <ButSubmit onClick = {addSubStep}>ส่งข้อความ</ButSubmit>
                </div>
            )
        }else{
            return(
                <div>
                    <span onClick = {props.onClose} width="50">x</span>
                    <Img src="https://png.pngtree.com/svg/20170609/correct_operation__609597.png"/>
                    <div>ส่งกำลังใจของคุณไปยังคุณหมอและพยาบาลเรียบร้อย</div>
                </div>
            )
        }
    }

    const addNumStep = () => { setNumStep(!numStep) }
    const ShowChillModal = () => {
        if(numStep === true){
            return(
                <div>
                    <span onClick = {props.onClose}>x</span>
                    <h2>Login Form</h2>
                    <ul>
                        <FB>Facebook</FB>
                        <GG>Google</GG>
                    </ul>
                    <p onClick ={ addNumStep }>Next ></p>
                </div>
            )
        }else{
            return ShowSubStep()
        }
    }
    const showModal = () => {
        if( props.isOpen === true){
            return(
                <ModalSty>
                    {ShowChillModal()}
                </ModalSty>
            )
        }else {
            return ''
        }
    }
    return showModal()
}

export default Modal