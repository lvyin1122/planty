import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import styled from 'styled-components'
import { HomeWrapper } from "./style"

const RightWrapper = styled.div`
    flex: 6;
`

const Home = () => {
  return (
    <HomeWrapper>
        <Sidebar/>
        <RightWrapper/>
    </HomeWrapper>
  )
}

export default Home