type PitchName = "C" | "C#" | "D" | "D#" | "E" | "F" | "F#" | "G" | "G#" | "A" | "A#" | "B"
type ScientificPitchNotation = `${PitchName}${number}`
export default ScientificPitchNotation
export type {PitchName}