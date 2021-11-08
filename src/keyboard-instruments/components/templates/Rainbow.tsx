import React from "react"
import ScientificPitchNotation from "../../../types/SPN"
import { WhiteShortGroup, BlackShortGroup, WhiteLongGroup, BlackLongGroup } from "../organisms/RainbowKeysGroup"
import { Instrument, ShortGroup, LongGroup } from "./StyledInstrumentWrapper"

function RainbowPiano({shortGroup, longGroup}: {shortGroup: ScientificPitchNotation[], longGroup: ScientificPitchNotation[]}) {
    return (
        <Instrument>
            <ShortGroup>
                <BlackShortGroup key="rsb" notes={shortGroup.filter(({}, i) => i % 2 === 1)} />
                <WhiteShortGroup key="rsw" notes={shortGroup.filter(({}, i) => i % 2 === 0)} />
            </ShortGroup>
            <LongGroup>
                <BlackLongGroup key="rlb" notes={longGroup.filter(({}, i) => i % 2 === 1)} />
                <WhiteLongGroup key="rlw" notes={longGroup.filter(({}, i) => i % 2 === 0)} />
            </LongGroup>
        </Instrument>
    )
}

export default RainbowPiano