import React from "react";
import ScientificPitchNotation from "../../../types/SPN";
import RedButton from "../atoms/pastels/RedButton";
import LightRedButton from "../atoms/pastels/LightRedButton";
import PinkButton from "../atoms/pastels/PinkButton";
import PurpleButton from "../atoms/pastels/PurpleButton";
import DarkBlueButton from "../atoms/pastels/DarkBlueButton";
import BlueButton from "../atoms/pastels/BlueButton";
import LightBlueButton from "../atoms/pastels/LightBlueButton";
import LightGreenButton from "../atoms/pastels/LightGreenButton";
import GreenButton from "../atoms/pastels/GreenButton";
import GreenYellowButton from "../atoms/pastels/GreenYellowButton";
import YellowButton from "../atoms/pastels/YellowButton";
import OrangeButton from "../atoms/pastels/OrangeButton";
import styled from "styled-components"

const WhiteShortSize = styled.div`
    position: relative;
    width: 33.3%;
    height: 100%;
`
const BlackShortSize = styled.div`
    position: relative;
    width: 20%;
    height: 60%;
    top: 0;
`
const WhiteLongSize = styled.div`
    position: relative;
    width: 25%;
    height: 100%;
`
const BlackLongSize = styled.div`
    position: relative;
    width: 14%;
    height: 60%;
    top: 0;
`

export function WhiteKeyShort({ note }: { note: ScientificPitchNotation }) {
    return (
        <WhiteShortSize>
            {note.match(`C\\d+`) && <RedButton note={note} />}
            {note.match(`D\\d+`) && <PinkButton note={note} />}
            {note.match(`E\\d+`) && <DarkBlueButton note={note} />}
        </WhiteShortSize>
    )
}

export function BlackKeyShort({ note }: { note: ScientificPitchNotation }) {
    return (
        <BlackShortSize>
            {note.match(`C#\\d+`) && <LightRedButton note={note} />}
            {note.match(`D#\\d+`) && <PurpleButton note={note} />}
        </BlackShortSize>
    )
}

export function WhiteKeyLong({ note }: { note: ScientificPitchNotation }) {
    return (
        <WhiteLongSize>
            {note.match(`F\\d+`) && <BlueButton note={note} />}
            {note.match(`G\\d+`) && <LightGreenButton note={note} />}
            {note.match(`A\\d+`) && <GreenYellowButton note={note} />}
            {note.match(`B\\d+`) && <OrangeButton note={note} />}
        </WhiteLongSize>
    )
}

export function BlackKeyLong({ note }: { note: ScientificPitchNotation }) {
    return (
        <BlackLongSize>
            {note.match(`F#\\d+`) && <LightBlueButton note={note} />}
            {note.match(`G#\\d+`) && <GreenButton note={note} />}
            {note.match(`A#\\d+`) && <YellowButton note={note} />}
        </BlackLongSize>
    )
}