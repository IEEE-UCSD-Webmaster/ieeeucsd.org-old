import * as React from "react";
import {Component} from "react";

interface OfficerProps {
	name: string;
	position: string;
	photo: string;
}
interface OfficerState {}

export default class Officer extends Component<OfficerProps, OfficerState> {
	constructor(props: OfficerProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="officer">
			<img className="officer-image" src={this.props.photo}></img>
			<span className="officer-name">{this.props.name}</span>
			<span className="officer-position">{this.props.position}</span>
		</div>;
	}
}
