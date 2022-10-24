import * as React from "react";
import { Component } from "react";

interface InvolveBoxProps {
    boxTitle: string;
    image: string;
    description: string;
}

export default class InvolveBox extends Component<InvolveBoxProps> {
    constructor(props: InvolveBoxProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className="involve-card">
                <a
                    className="involve-title"
                    href={"/" + this.props.boxTitle.toLowerCase()}
                >
                    {this.props.boxTitle}
                </a>
                <img src={this.props.image}></img>
                <div className="involve-description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}
