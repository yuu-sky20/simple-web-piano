import React from "react"
import KeyboardInstruments from "../keyboard-instruments/selector/KeyboardInstruments"
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { MenuItem, Box, Slider, Button, Container } from "@mui/material"
import styled from "styled-components"

const SelectorWrapper = styled.div`
    position: relative;
    text-align: right;
    padding: 1em;
    gap: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
`
const SliderWrapper = styled.div`
    position: relative;
    padding: 1em;
    gap: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
`
const CustomFooter = styled.footer`
    position: relative;
    margin: 5vw auto;
`
const FooterWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1em;
    text-align: center;
    font-size: 0.8em;
    align-items: center;
    gap: 1em;
`

function App() {
    const [pitch, setPitch] = React.useState<number>(4);
    const [instrument, setInstrument] = React.useState("default")
    const instruments = ["default", "harpsichord", "rainbow"]
    const sliderHandleChange = ({ }, newValue: number | number[]) => {
        setPitch(newValue as number);
    }
    const selectHandleChange = (e: SelectChangeEvent) => {
        setInstrument(e.target.value)
    }
    return (
        <main>
            <Container>
                <SelectorWrapper>
                    <span>Change the Keyboard View</span>
                    <Box sx={{ width: 200 }}>
                        <Select onChange={selectHandleChange} value={instrument}>
                            {instruments.map((ins) => (
                                <MenuItem key={ins} value={ins}>{ins}</MenuItem>
                            ))}
                        </Select>
                    </Box>
                </SelectorWrapper>
                <SliderWrapper>
                    <span>Change Sound Pitch</span>
                    <Box sx={{ width: 200 }}>
                        <Slider
                            aria-label="scale-slider"
                            defaultValue={4}
                            valueLabelDisplay="auto"
                            marks
                            min={2}
                            max={8}
                            step={1}
                            onChange={sliderHandleChange}
                        />
                    </Box>
                </SliderWrapper>
            </Container>
            <KeyboardInstruments selectedInstrument={instrument} pitch={pitch} />
            <CustomFooter>
                <FooterWrapper>
                    <p>This Application is powered by yuu_sky.</p>
                    <Button variant="contained"
                        href="https://github.com/yuu-sky20/simple-web-piano"
                        target="_blank"
                    >Github</Button>
                </FooterWrapper>
            </CustomFooter>
        </main>
    )
}

export default App