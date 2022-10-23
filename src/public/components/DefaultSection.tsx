import * as React from "react";
import { Component } from "react";

interface DefaultSectionProps {
    title: string;
    paragraphs?: string[];
    className?: string;
    children?: React.ReactNode;
}

export default class DefaultSection extends Component<DefaultSectionProps> {
    constructor(props: DefaultSectionProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div
                className={`default-section ${
                    this.props.className ? this.props.className : ""
                }`}
            >
                <div className="section-title">{this.props.title}</div>
                {(this.props.paragraphs ? this.props.paragraphs : []).map(
                    (n) => (
                        <p key={n}>{n}</p>
                    )
                )}
                {this.props.children}
            </div>
        );
    }
}
