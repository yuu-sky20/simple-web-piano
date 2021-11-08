import React from "react";
import ScientificPitchNotation from "../../../types/SPN";
import { WhiteKeyShort, BlackKeyShort, WhiteKeyLong, BlackKeyLong } from "../molecules/DefaultKeys"
import { FrontLayer, BackLayer } from "./StyledKeysGroup";

export function WhiteShortGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <BackLayer>
            {notes.map(note => (
                <WhiteKeyShort key={"dsw" + note} note={note} />
            ))}
        </BackLayer>
    )
}

export function BlackShortGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <FrontLayer>
            {notes.map(note => (
                <BlackKeyShort key={"dsb" + note} note={note} />
            ))}
        </FrontLayer>
    )
}

export function WhiteLongGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <BackLayer>
            {notes.map(note => (
                <WhiteKeyLong key={"dlw" + note} note={note} />
            ))}
        </BackLayer>
    )
}

export function BlackLongGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <FrontLayer>
            {notes.map(note => (
                <BlackKeyLong key={"dlb" + note} note={note} />
            ))}
        </FrontLayer>
    )
}