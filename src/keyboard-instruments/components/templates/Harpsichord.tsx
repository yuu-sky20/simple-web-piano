import React from "react"
import ScientificPitchNotation from "../../../types/SPN"
import { WhiteShortGroup, BlackShortGroup, WhiteLongGroup, BlackLongGroup } from "../organisms/HarpsichordKeysGroup"
import { Instrument, ShortGroup, LongGroup } from "./StyledInstrumentWrapper"

function Harpsichord({shortGroup, longGroup}: {shortGroup: ScientificPitchNotation[], longGroup: ScientificPitchNotation[]}) {
    return (
        <Instrument>
            <ShortGroup>
                <WhiteShortGroup key="hsw" notes={shortGroup.filter(({}, i) => i % 2 === 1)} />
                <BlackShortGroup key="hsb" notes={shortGroup.filter(({}, i) => i % 2 === 0)} />
            </ShortGroup>
            <LongGroup>
                <WhiteLongGroup key="hlw" notes={longGroup.filter(({}, i) => i % 2 === 1)} />
                <BlackLongGroup key="hlb" notes={longGroup.filter(({}, i) => i % 2 === 0)} />
            </LongGroup>
        </Instrument>
    )
}

export default Harpsichord