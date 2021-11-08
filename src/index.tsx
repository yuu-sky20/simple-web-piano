import React from "react"
import ReactDOM from "react-dom"
import App from "./pages/App"
import { StylesProvider } from '@material-ui/styles'
import "../styles/normalize.css"
import "../styles/style.css"

ReactDOM.render(
    <React.StrictMode>
        <StylesProvider injectFirst>
            <App />
        </StylesProvider>
    </React.StrictMode>,
    document.getElementById("root")
)