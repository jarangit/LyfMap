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
                    <h3>ข้อความให้กำลังใจ</h3>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1">ยอมรับข้อตกลง <a href = "#">คลิกอ่าน</a></label>
                    </div>
                </BoxSent>
            <ButSendCon pathName = {router.pathname} />
        </Layout>
    )
}

export default withRouter(SentPage)