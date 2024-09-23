import { ReactNode } from "react";

const style: React.CSSProperties = {
    position: "absolute",
    top: "-2rem",
    left: "0",
    fontSize: "0.9rem",
    fontStyle: "italic",
    fontWeight: "bold",
    textShadow: "0 0 6px white",
};

interface Props {
    children: ReactNode
    style?: React.CSSProperties
}

const TopLabel = (props: Props) => {
    const styles = Object.assign({}, style, props.style);
    return <p style={styles}>{props.children}</p>;
};

export default TopLabel;
