
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
    background-color: #a3ffff;
    &:hover {
        background-color: #89ffff;
    };
    &:active {
        background-color: #7ffff0;
    };
`

const LightBlueButton = ({note}: {note: ScientificPitchNotation}) => {
    return (
        <CustomButton
            onClick={() => SoundPlay(note)}
        />
    )
}

export default LightBlueButton