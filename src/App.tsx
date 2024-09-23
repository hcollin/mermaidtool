import { useState } from "react";
import "./App.css";
import Graph from "./components/Graph";
import TextInput from "./components/TextInput";
import FullScreen from "./components/FullScreen";
import { CiniaColors } from "./data/colors";
import Button from "./components/Button";

const BGCOLORS: string[] = ["#ffffff", CiniaColors.white, CiniaColors.gray, CiniaColors.blue];

function App() {
    const [code, setCode] = useState<string>("");
    const [fullScreenOn, setFullScreenOn] = useState<boolean>(false);

    const [bgColor, setBgColor] = useState<string>(BGCOLORS[0]);

    function bgToggle() {
        const index = BGCOLORS.indexOf(bgColor) + 1;
        setBgColor(BGCOLORS[index % BGCOLORS.length]);
    }

    return (
        <div className="app" style={{backgroundColor: bgColor}}>
            <h1>Mermaid Renderer</h1>
            <div className="actions" style={{margin: "2rem 0"}}>
                <Button onClick={bgToggle}>Toggle Background: {bgColor}</Button> 
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "top" }}>
                <TextInput onChange={(value) => setCode(value)} />
                <div onClick={() => setFullScreenOn(true)}>
                    <Graph graphCode={code} />
                </div>
                <FullScreen on={fullScreenOn} code={code} close={() => setFullScreenOn(false)} bgColor={bgColor}/>
            </div>
        </div>
    );
}

export default App;
