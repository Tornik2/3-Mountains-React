import React from "react"
import Nav from "./components/Nav.js"
import Main from "./components/Main.js"
import data from "./data.js"

const mountainData = data.map(mountain => {
    return (
        <Main
        key = {mountain.title}
        {...mountain}
        />
    )
})

export default function App() {
    return (
        <div className="container">
            <Nav />
            {mountainData}
        </div>
    )
}