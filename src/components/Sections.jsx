import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Sections({ title, description, backgroundImage, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgroundImage}>
            <Fade bottom>
                <ItemTex>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemTex>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && <RightButton>
                            {rightBtnText}
                        </RightButton>}

                    </ButtonGroup>
                </Fade>
                <DownArrow src="./images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url(./images/${props.bgImage})`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const ItemTex = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Buttons = styled.div`
    margin-bottom: 1px;
`

const LeftButton = styled.div`
    color: white;
    background-color: rgba(23,26,32,0.8);

    height: 40px;
    width: 256px;
    margin: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    opacity: 0.85;

    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    color: rgba(23,26,32,0.8);
    background-color: white;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

export default Sections