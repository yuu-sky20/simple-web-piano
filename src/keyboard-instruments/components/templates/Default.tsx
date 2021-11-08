import React from "react"
import ScientificPitchNotation from "../../../types/SPN"
import { WhiteShortGroup, BlackShortGroup, WhiteLongGroup, BlackLongGroup } from "../organisms/DefaultKeysGroup"
import { Instrument, ShortGroup, LongGroup } from "./StyledInstrumentWrapper"

function DefaultPiano({shortGroup, longGroup}: {shortGroup: ScientificPitchNotation[], longGroup: ScientificPitchNotation[]}) {
    return (
        <Instrument>
            <ShortGroup>
                <BlackShortGroup key="dsb" notes={shortGroup.filter(({}, i) => i % 2 === 1)} />
                <WhiteShortGroup key="dsw" notes={shortGroup.filter(({}, i) => i % 2 === 0)} />
            </ShortGroup>
            <LongGroup>
                <BlackLongGroup key="dlb" notes={longGroup.filter(({}, i) => i % 2 === 1)} />
                <WhiteLongGroup key="dlw" notes={longGroup.filter(({}, i) => i % 2 === 0)} />
            </LongGroup>
        </Instrument>
    )
}

export default DefaultPiano