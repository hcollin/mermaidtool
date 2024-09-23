

interface props {
    children: React.ReactNode;
    onClick: () => void;

    style?: React.CSSProperties;
    disabled?: boolean;

}

const buttonStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
}

const Button = (props: props) => {

    const styles = Object.assign({}, buttonStyle, props.style);
    return (
        <button onClick={props.onClick} style={styles} disabled={props.disabled || false}>{props.children}</button>
    );
}

export default Button;