import ScientificPitchNotation, {PitchName} from "../types/SPN"
const cMajor: PitchName[] = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
]
export default function SetKeysSPN(pitch = 4) {
    if (pitch <= 0) pitch = 4
    const shortGroup : ScientificPitchNotation[] = []
    const longGroup : ScientificPitchNotation[] = []
    for (let i = 0; i < 5; i++){
        shortGroup.push(`${cMajor[i]}${pitch}`)
    }
    for (let i = 5; i < 12; i++){
        longGroup.push(`${cMajor[i]}${pitch}`)
    }
    return {
        shortGroup: shortGroup,
        longGroup: longGroup
    }
}