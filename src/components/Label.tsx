import { createElement } from "react";
import "./test/index.css";

type Props = {
    text: string,
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

const Label = ({ text, type = "p" }: Props) => {
    return (
        <div>
            {createElement(type, {}, text)}
        </div>
    )
}

export default Label