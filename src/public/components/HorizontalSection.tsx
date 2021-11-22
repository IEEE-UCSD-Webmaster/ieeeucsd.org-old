import React, {Component} from "react";

interface HorizontalSectionProps {
	link: string;
	title: string;
}
interface HorizontalSectionState {}

export default class HorizontalSection extends Component<HorizontalSectionProps, HorizontalSectionState> {
	constructor(props: HorizontalSectionProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="horizontal-section">
			<a className="section-title" href={this.props.link}>{this.props.title}</a>
			{this.props.children}
		</div>;
	}
}
