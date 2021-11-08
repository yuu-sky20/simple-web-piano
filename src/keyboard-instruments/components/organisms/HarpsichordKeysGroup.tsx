import React from "react";
import ScientificPitchNotation from "../../../types/SPN";
import { BlackKeyShort, WhiteKeyShort, BlackKeyLong, WhiteKeyLong, } from "../molecules/HarpsichordKeys";
import { FrontLayer, BackLayer } from "./StyledKeysGroup";

export function BlackShortGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <BackLayer>
            {notes.map(note => (
                <BlackKeyShort key={"hsb" + note} note={note} />
            ))}
        </BackLayer>
    )
}

export function WhiteShortGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <FrontLayer>
            {notes.map(note => (
                <WhiteKeyShort key={"hsw" + note} note={note} />
            ))}
        </FrontLayer>
    )
}

export function BlackLongGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <BackLayer>
            {notes.map(note => (
                <BlackKeyLong key={"hlb" + note} note={note} />
            ))}
        </BackLayer>
    )
}

export function WhiteLongGroup({ notes }: { notes: ScientificPitchNotation[] }) {
    return (
        <FrontLayer>
            {notes.map(note => (
                <WhiteKeyLong key={"hlw" + note} note={note} />
            ))}
        </FrontLayer>
    )
}