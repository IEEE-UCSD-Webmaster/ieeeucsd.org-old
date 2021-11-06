import React from "react";
import NavLink from "./NavLink";

interface TopNavProps {
	image: string;
	links: string[];
	alt: string;
}
interface TopNavState {}

export default class TopNav extends React.Component<TopNavProps, TopNavState> {
	constructor(props: TopNavProps) {
		super(props);
		this.state = {};
	}

	public render() {
		let navLinks = this.props.links.map(name=>{
			return <NavLink text={name} url={"/"+name.toLowerCase()} key={name}></NavLink>;
		});

		return <div className="top-nav">
			<img className="logo" src={this.props.image} alt={this.props.alt}></img>
			{navLinks}
		</div>;
	}
}