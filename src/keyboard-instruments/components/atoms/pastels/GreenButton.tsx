import React from "react"
import ScientificPitchNotation from "../../../../types/SPN"
import SoundPlay from "../../../../utils/soundPlay"
import styled from "styled-components"

const CustomButton = styled.button`
    position: relative;
    pointer-events: initial;
    border-radius: 6px;
    border: solid 1px;
    width: 100%;
    height: 100%;
    border-color: whitesmoke;
    background-color: #a3ffa3;
    &:hover {
        background-color: #89ff89;
    };
    &:active {
        background-color: #7fff70;
    };
`

const GreenButton = ({note}: {note: ScientificPitchNotation}) => {
    return (
        <CustomButton
            onClick={() => SoundPlay(note)}
        />
    )
}

export default GreenButton