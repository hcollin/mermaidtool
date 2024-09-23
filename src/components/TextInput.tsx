import React, { useEffect, useState } from "react";
import TopLabel from "./TopLabel";
import Button from "./Button";
import mermaid from "mermaid";

interface TextInputProps {
    onChange: (value: string) => void;
    style?: React.CSSProperties;
}

const textStyle: React.CSSProperties = {
    borderRight: "solid 2px black",
    padding: "0 1rem",
    position: "relative",
};

const TextInput = (props: TextInputProps) => {
    const [value, setValue] = useState("");

    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        async function validate() {
            const valid = await mermaid.parse(value, { suppressErrors: true });
            if (!valid) {
                setIsValid(false);
            } else {
                setIsValid(true);
            }
        }

        validate();
    }, [value]);

    function ok() {
        props.onChange(value);
    }

    const styles = Object.assign({}, textStyle, props.style);

    const txStyle: React.CSSProperties = isValid ? { } : { boxShadow: "0 0 3px 3px red" };

    return (
        <div style={styles}>
            <TopLabel>Mermaid Code Window </TopLabel>
            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows={30}
                cols={80}
                style={txStyle}
            />
            <br />
            <Button onClick={ok} disabled={!isValid}>
                Render
            </Button>
        </div>
    );
};

export default TextInput;
