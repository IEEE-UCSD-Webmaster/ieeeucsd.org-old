import * as React from "react";
import { Component } from "react";

interface CommitteeBoxProps {
    boxTitle: string;
    image: string;
    description: string;
}

export default class CommitteeBox extends Component<CommitteeBoxProps> {
    constructor(props: CommitteeBoxProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className="committee-card">
                <div className="committee-title">{this.props.boxTitle}</div>
                <div className="committee-img">
                    <img src={this.props.image}></img>
                </div>
                <div className="committee-description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}
