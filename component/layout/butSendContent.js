import styled from 'styled-components'


const ModalSty = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 10px 0 ;
  div{
    background-color: #f56991;
    margin: auto;
    padding: 5px;
    border: 1px solid #f56991;
    width: 30%;
    border-radius: 3.5rem;
    color:white;
    text-align: center;
    :hover{
        background-color: white;
        border: 1px solid white;
        color: #f56991;

    }
    }
    @media all and  (max-width: 650px){
        div{
            width:80%;
        }
    }
`

const ButSendCon = (props) => {
    console.log(props.func)
    return(
        <ModalSty>
            <div onClick = {props.func}>
                <h4 >ส่งข้อความถึงคุณหมอ</h4>
            </div>
        </ModalSty>
    )
}

export default ButSendCon