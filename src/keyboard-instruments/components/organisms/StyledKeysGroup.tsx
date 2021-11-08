import styled from "styled-components"

const FrontLayer = styled.div`
    display: flex;
    pointer-events: none;
    flex-direction: row;
    justify-content: space-evenly;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
`

const BackLayer = styled.div`
    display: flex;
    pointer-events: none;
    flex-direction: row;
    justify-content: space-evenly;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
`

export {FrontLayer, BackLayer}