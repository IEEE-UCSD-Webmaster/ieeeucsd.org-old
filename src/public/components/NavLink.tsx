import React from "react";

interface NavLinkProps {
	url: string;
	text: string;
}
interface NavLinkState {}

export default class NavLink extends React.Component<NavLinkProps, NavLinkState> {
	constructor(props: NavLinkProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="nav-link">
			<a href={this.props.url}>{this.props.text}</a>
		</div>;
	}
}