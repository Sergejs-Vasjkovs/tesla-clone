import React from 'react'
import styled from 'styled-components'
import Sections from './Sections'

function Home() {
    return (
        <Container>
            <Sections
                title="title model-s"
                description="descriptio"
                backgroundImage="model-s.jpg"
                leftBtnText="leftBtnText"
                rightBtnText="rightBtnText"
            />
            <Sections
                title="title model-3"
                description="descriptio"
                backgroundImage="model-3.jpg"
                leftBtnText="leftBtnText"
                rightBtnText="rightBtnText"
            />
            <Sections
                title="title model-x"
                description="descriptio"
                backgroundImage="model-x.jpg"
                leftBtnText="leftBtnText"
                rightBtnText="rightBtnText"
            />
            <Sections
                title="title model-y"
                description="descriptio"
                backgroundImage="model-y.jpg"
                leftBtnText="leftBtnText"
                rightBtnText="rightBtnText"
            />
            <Sections
                title="solar-roof"
                description="descriptio"
                backgroundImage="solar-roof.jpg"
                leftBtnText="leftBtnText"
                rightBtnText="rightBtnText"
            />
            <Sections
                title="solar-panel"
                description="descriptio"
                backgroundImage="solar-panel.jpg"
                leftBtnText="leftBtnText"
                rightBtnText="rightBtnText"
            />

            <Sections
                title="accessories"
                description="descriptio"
                backgroundImage="accessories.jpg"
                leftBtnText="accessories"
            />
        </Container>

    )
}

export default Home

const Container = styled.div`
height:100vh;
`