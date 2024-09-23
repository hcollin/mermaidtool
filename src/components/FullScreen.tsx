import MermaidSvg from "./MermaidSvg";



interface FullScreenProps {
    on: boolean;
    code: string;
    close: () => void;
    bgColor: string;

}

const fullScreenStyle: React.CSSProperties = {
    background: "white",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    padding: "1rem",

}

const FullScreen = (props: FullScreenProps) => {

    if(props.on === false || props.code === "") {
        return null;
    }

    const styles = Object.assign({}, fullScreenStyle, {background: props.bgColor});

    return (
        <div style={styles} onClick={props.close}>
            <MermaidSvg code={props.code} />
        </div>
    )
}

export default FullScreen;