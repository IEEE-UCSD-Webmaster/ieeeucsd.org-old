import * as React from "react";
import {Component} from "react";
import SocialCard from "./SocialCard";
import {EMAIL_WHITE, SOCIALS_WHITE} from "../Config";

interface FooterProps {}
interface FooterState {}

export default class Footer extends Component<FooterProps, FooterState> {
	constructor(props: FooterProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="footer">
			<img src="img/logo_white.svg"></img>
			<div className="footer-scls">{
				[...EMAIL_WHITE, ...SOCIALS_WHITE].map(n => (
					<SocialCard url={n.url} image={n.icon} message={n.message}></SocialCard>
				))
			}</div>
		</div>;
	}
}
