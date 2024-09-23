import MermaidSvg from "./MermaidSvg";
import TopLabel from "./TopLabel";

interface GraphProps {
    graphCode: string;
}

const Graph = (props: GraphProps) => {
    return (
        <div style={{ position: "relative", width: "800px", height: "600px", backgroundColor: "white", border: "solid 1px black", margin: "0 1rem" }}>
            <TopLabel>Render Screen</TopLabel>
            
            <p style={{ position: "absolute", bottom: "-1.8rem", width: "100%", fontSize: "0.8rem", fontStyle: "italic" }}>
                Click the graph for a larger version of it.
            </p>
            <MermaidSvg code={props.graphCode} />
        </div>
    );
};

export default Graph;
