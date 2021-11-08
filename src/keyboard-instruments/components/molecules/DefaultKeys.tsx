import React from "react";
import ScientificPitchNotation from "../../../types/SPN";
import WhiteButton from "../atoms/WhiteButton";
import BlackButton from "../atoms/BlackButton";
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
            <WhiteButton note={note} />
        </WhiteShortSize>
    )
}

export function BlackKeyShort({ note }: { note: ScientificPitchNotation }) {
    return (
        <BlackShortSize>
            <BlackButton note={note} />
        </BlackShortSize>
    )
}

export function WhiteKeyLong({ note }: { note: ScientificPitchNotation }) {
    return (
        <WhiteLongSize>
            <WhiteButton note={note} />
        </WhiteLongSize>
    )
}

export function BlackKeyLong({ note }: { note: ScientificPitchNotation }) {
    return (
        <BlackLongSize>
            <BlackButton note={note} />
        </BlackLongSize>
    )
}