import React, {Component} from "react";

interface HorizontalSectionProps {
	link: string;
	title: string;
	row?: boolean;
	id?: string;
}
interface HorizontalSectionState {}

export default class HorizontalSection extends Component<HorizontalSectionProps, HorizontalSectionState> {
	constructor(props: HorizontalSectionProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="horizontal-section" id={this.props.id ? this.props.id : ""}>
			<a className="section-title" href={this.props.link}>{this.props.title}</a>
			<div className={this.props.row == undefined ? "" : this.props.row ? "row-group" : "col-group"}>
				{this.props.children}
			</div>
		</div>;
	}
}
