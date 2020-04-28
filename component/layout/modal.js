import styled from 'styled-components'


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

    span{
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        }
    }
    ul{
        width:auto;
        margin: 0 auto;
    }
`

const FB = styled.li`
    background: blue;
    color:white;
    border: solid 1px;
    padding: 15px;
    margin: 15px 0;
    text-align: center;
    width: 50%;
`
const GG = styled.li`
    background: red;
    color:white;
    border: solid 1px;
    padding: 15px;
    margin: 15px 0;
    text-align: center;
    width: 50%;
`

const Modal = (props) => {
    console.log(props.isOpen)
    const showModal = () => {
        if( props.isOpen === true){
            console.log(props.isOpen)
            return(
                <ModalSty>
                <div>
                    <span onClick = {props.onClose}>x</span>
                    <p>Login Form</p>
                    <ul>
                        <FB>Facebook</FB>
                        <GG>Google</GG>
                    </ul>
                </div>
                </ModalSty>
            )
        }else {
            return ''
        }
    }
    return showModal()
}

export default Modal