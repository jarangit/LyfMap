import React from 'react'
import Layout from '../component/layout/layout'
import ButSendCon from '../component/layout/butSendContent'
import { withRouter } from 'next/router'

const SelectPage = ({router}) => {
    return(
        <Layout>
            this select page
            <ButSendCon pathName = {router.pathname}/>
        </Layout>
    )
}

export default withRouter(SelectPage)