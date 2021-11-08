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
    background-color: #ffa3a3;
    &:hover {
        background-color: #ff8989;
    };
    &:active {
        background-color: #ff7f70;
    };
`

const RedButton = ({note}: {note: ScientificPitchNotation}) => {
    return (
        <CustomButton
            onClick={() => SoundPlay(note)}
        />
    )
}

export default RedButton