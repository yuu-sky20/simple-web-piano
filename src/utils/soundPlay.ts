import * as Tone from "tone"
import ScientificPitchNotation from "../types/SPN"

function SoundPlay(note: ScientificPitchNotation) {
    const synth = new Tone.Synth().toDestination()

    synth.triggerAttackRelease(`${note}`, "8n")
}

export default SoundPlay