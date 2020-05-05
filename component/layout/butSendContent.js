import styled from 'styled-components'
import Collaborate from '../../lib/img/Microsite/Icon/Collaborate.png'
import { withRouter } from 'next/router'

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
    console.log(props.pathName)
    const CheckPathName = () => {
        if (props.pathName === undefined){
            return(
                <div onClick = {props.func}>
                    <img  src = {Collaborate} width = '40'/>
                    <h3 >ร่วมส่งกำลังใจให้ หมอ - พยาบาล</h3>
                </div>
            )
        } else if (props.pathName === '/select'){
            return(
                <div onClick = {props.func}>
                    <h3 >เลือก</h3>
                </div>
            )
        }else {
            return''
        }
    }
    return(
        <ModalSty>
            {CheckPathName()}
        </ModalSty>
    )
}

export default withRouter(ButSendCon)