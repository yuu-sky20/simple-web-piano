import React from "react"
import DefaultPiano from "../components/templates/Default"
import Harpsichord from "../components/templates/Harpsichord"
import RainbowPiano from "../components/templates/Rainbow"
import SetKeysSPN from "../../utils/setKeysSPN"
import styled from "styled-components"
import media from "styled-media-query"

const WrapperInstruments = styled.div`
    ${media.lessThan("medium")`
        margin: 1vw;
    `};
    ${media.between("medium", "large")`
        margin: 2vw;
    `};
    ${media.greaterThan("large")`
        margin: 3vw;
    `};
`

function KeyboardInstruments({selectedInstrument, pitch}: {selectedInstrument: string, pitch: number}) {
    const KeysSPN = React.useMemo(() => SetKeysSPN(pitch), [pitch])
    return (
        <WrapperInstruments>
            {selectedInstrument === "default" && <DefaultPiano shortGroup={KeysSPN.shortGroup} longGroup={KeysSPN.longGroup} />}
            {selectedInstrument === "harpsichord" && <Harpsichord shortGroup={KeysSPN.shortGroup} longGroup={KeysSPN.longGroup} />}
            {selectedInstrument === "rainbow" && <RainbowPiano shortGroup={KeysSPN.shortGroup} longGroup={KeysSPN.longGroup} />}
        </WrapperInstruments>
    )
}

export default KeyboardInstruments