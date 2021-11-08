import React from "react";
import ScientificPitchNotation from "../../../types/SPN";
import { WhiteKeyShort, BlackKeyShort, WhiteKeyLong, BlackKeyLong } from "../molecules/RainbowKeys"
import { FrontLayer, BackLayer } from "./StyledKeysGroup";

export function WhiteShortGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <BackLayer>
            {notes.map(note => (
                <WhiteKeyShort key={"rsw" + note} note={note} />
            ))}
        </BackLayer>
    )
}

export function BlackShortGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <FrontLayer>
            {notes.map(note => (
                <BlackKeyShort key={"rsb" + note} note={note} />
            ))}
        </FrontLayer>
    )
}

export function WhiteLongGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <BackLayer>
            {notes.map(note => (
                <WhiteKeyLong key={"rlw" + note} note={note} />
            ))}
        </BackLayer>
    )
}

export function BlackLongGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <FrontLayer>
            {notes.map(note => (
                <BlackKeyLong key={"rlb" + note} note={note} />
            ))}
        </FrontLayer>
    )
}