import * as React from "react";
import {Component} from "react";

interface ButtonLinkProps {
	url: string;
}
interface ButtonLinkState {}

export default class ButtonLink extends Component<ButtonLinkProps, ButtonLinkState> {
	constructor(props: ButtonLinkProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <button className="link-button" onClick={
				(()=>(window.location as any)=this.props.url).bind(this)
			}>
			{this.props.children}
		</button>;
	}
}
