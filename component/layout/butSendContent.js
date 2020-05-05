import styled from 'styled-components'
import Collaborate from '../../lib/img/Microsite/Icon/Collaborate.png'
import { withRouter } from 'next/router'

const ModalSty = styled.div`
    a{
        text-decoration: none;

    }
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
        margin: 0 30px;
    }
    h4{
        margin: 20px 50px 20px 0;
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
                <a href = "sent">
                    <div>
                        <h3 >เลือก</h3>
                    </div>
                </a>
            )
        }
        else if (props.pathName === '/sent'){
            return(
                <a href = "sent">
                    <div width="50">
                    <img src = {Collaborate} width = '40'/>
                        <h4 >ร่วมส่งกำลังใจไปยังบุคลากรทางการแพทย์และเจ้าหน้าที่ทุกท่าน</h4>
                    </div>
                </a>
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