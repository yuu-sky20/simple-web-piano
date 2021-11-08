import React from "react"
import ScientificPitchNotation from "../../../types/SPN"
import SoundPlay from "../../../utils/soundPlay"
import styled from "styled-components"

const CustomButton = styled.button`
    position: relative;
    pointer-events: initial;
    border-radius: 6px;
    border: solid 1px;
    width: 100%;
    height: 100%;
    background-color: gray;
    &:hover {
        background-color: #555555;
    };
    &:active {
        background-color: #222222;
    };
`

const BlackButton = ({note}: {note: ScientificPitchNotation}) => {
    return (
        <CustomButton
            onClick={() => SoundPlay(note)}
        />
    )
}

export default BlackButton