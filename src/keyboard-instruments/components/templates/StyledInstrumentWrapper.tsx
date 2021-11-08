import styled from "styled-components"
const Instrument = styled.div`
    position: relative;
    width: 100%;
    height: 30vw;
    display: flexbox;
    flex-direction: row;
`
const ShortGroup = styled.div`
    position: relative;
    width: 40%;
    height: 100%;
`
const LongGroup = styled.div`
    position: relative;
    width: 60%;
    height: 100%;
`
export {Instrument, ShortGroup, LongGroup}