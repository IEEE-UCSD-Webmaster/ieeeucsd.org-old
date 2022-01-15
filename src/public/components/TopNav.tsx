import React from "react";

interface TopNavProps {
	image: string;
	links: string[];
	names: string[];
	alt: string;
}
interface TopNavState {}

export default class TopNav extends React.Component<TopNavProps, TopNavState> {
	constructor(props: TopNavProps) {
		super(props);
		this.state = {};
	}

	public render() {
		let navLinks = this.props.links.map((url, i)=>{
			return <a className="nav-link" href={url} key={this.props.names[i]}>{this.props.names[i]}</a>;
		});

		return <div className="top-nav">
			<div className="nav-container">
				<img className="logo" src={this.props.image} alt={this.props.alt}></img>
				{navLinks}
			</div>
			<div className="bottom-bar"></div>
		</div>;
	}
}