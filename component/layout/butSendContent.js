import styled from 'styled-components'
import Collaborate from '../../lib/img/Microsite/Icon/Collaborate.png'

const ModalSty = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  div{
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 0 auto;
    background-color: #f56991;
    margin: auto;
    padding: 5px;
    border: 1px solid #f56991;
    width: 30%;
    color:white;
    text-align: center;
    :hover{
        background-color: white;
        border: 1px solid white;
        color: #f56991;

    }
    img{
        margin: 0 10px;
    }
    }
    @media all and  (max-width: 650px){
        div{
            width:100%;
        }
    }
`

const ButSendCon = (props) => {
    console.log(props.func)
    return(
        <ModalSty>
            <div onClick = {props.func}>
                <img  src = {Collaborate} width = '40'/>
                <h3 >ร่วมส่งกำลังใจให้ หมอ - พยาบาล</h3>
            </div>
        </ModalSty>
    )
}

export default ButSendCon