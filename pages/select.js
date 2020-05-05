import React from 'react'
import Layout from '../component/layout/layout'
import ButSendCon from '../component/layout/butSendContent'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import BgImg  from '../lib/img/Microsite/Line.jpg'
import HeartImg from '../lib/img/Microsite/Icon/Heart.png'
import SliderTest from '../component/layout/slideDoctor'

const SelectPageSty = styled.div`
    div{
        display:flex;
        justify-content:center;
        margin: 20px 0;
    }
    /* background-image: url(${BgImg}); */
    /* background-repeat: no-repeat; */
    height: 2000px;
`

const SelectPage = ({router}) => {
    console.log(BgImg)
    return(
        <Layout>
            <SelectPageSty>
                <div>
                    <h2>เลือกส่งต่อกำลังใจ</h2>
                    <img src = {HeartImg} width = '40'/>
                </div>
                <div>
                </div>
                    <SliderTest/>
                    <img  src = {BgImg} />
            </SelectPageSty>
            <ButSendCon pathName = {router.pathname}/>
        </Layout>
    )
}

export default withRouter(SelectPage)