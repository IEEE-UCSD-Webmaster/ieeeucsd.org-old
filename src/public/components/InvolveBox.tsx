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
        if (this.props.boxTitle) {
            return (
                <a
                    href={"/" + this.props.boxTitle.toLowerCase()}
                    className="involve-card"
                >
                    <div className="involve-title">{this.props.boxTitle}</div>
                    <div className="involve-img">
                        <img src={this.props.image}></img>
                    </div>
                    <div className="involve-description">
                        {this.props.description}
                    </div>
                </a>
            );
        } else {
            return (
                <div className="involve-card">
                    <div className="involve-title">{this.props.boxTitle}</div>
                    <div className="involve-img">
                        <img src={this.props.image}></img>
                    </div>
                    <div className="involve-description">
                        {this.props.description}
                    </div>
                </div>
            );
        }
    }
}
