import React from 'react'
import Layout from '../component/layout/layout'
import styled from 'styled-components'
import BgImg  from '../lib/img/Microsite/Line.jpg'
import Flower from '../lib/img/Microsite/Icon/Flower-pink.png'
import ButSendCon from '../component/layout/butSendContent'
import { withRouter } from 'next/router'


const SentPageSty = styled.div`
    margin: 20px 0;
    div{
        display: flex;
        justify-content:center;
        img{
            margin: 0 10px;
        }
    }
`
const BoxSent = styled.div`
    display:inline-block;
    background-color: #F8F8F8;
    width: 100%;
    div{
        padding: 20px;
        a{
            color:#f56991;
        }
        textarea{
            width: 100%;
            height: 100px;
            padding: 25px 25px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
    }
`
const InputCheckBox = styled.input`
    background-color:white;
`
const SentPage = ({router}) => {
    return(
        <Layout>
                <p> ย้อนกลับ </p>
            <SentPageSty>
                <div>
                    <h2>เลือกแบบดอกไม้</h2>
                    <img src = {Flower} width = "40"/>
                </div>
                <div>
                    this slide tap
                </div>
                </SentPageSty>

                <BoxSent>
                    <div>
                    <h4>ข้อความให้กำลังใจ</h4>
                        <textarea type="text" id="fname" name="firstname" placeholder="ใส่ข้อความ ()"/>
                    <InputCheckBox type="checkbox"/>
                    <label for="vehicle1">ยอมรับข้อตกลง <a href = "#">คลิกอ่าน</a></label>
                    </div>
                </BoxSent>
            <ButSendCon pathName = {router.pathname} />
        </Layout>
    )
}

export default withRouter(SentPage)