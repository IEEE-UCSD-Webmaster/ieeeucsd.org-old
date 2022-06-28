import * as React from "react";
import {Component} from "react";

interface SocialCardProps {
	url: string;
	image: string;
	message: string;
}
interface SocialCardState {}

export default class SocialCard extends Component<SocialCardProps, SocialCardState> {
	constructor(props: SocialCardProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <a href={this.props.url} className="social-card">
			<img src={this.props.image}></img>
			<div className="social-message">{this.props.message}</div>
		</a>;
	}
}
