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
    background-color: #a3d1ff;
    &:hover {
        background-color: #89c4ff;
    };
    &:active {
        background-color: #7fbff0;
    };
`

const BlueButton = ({note}: {note: ScientificPitchNotation}) => {
    return (
        <CustomButton
            onClick={() => SoundPlay(note)}
        />
    )
}

export default BlueButton