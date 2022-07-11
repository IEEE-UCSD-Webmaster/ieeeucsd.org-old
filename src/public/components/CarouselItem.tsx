import * as React from "react";
import {Component} from "react";

export interface CarouselItemProps {
	name: string;
	position: string;
	email: string;
	photo: string;
}
interface CarouselItemState {}

export default class CarouselItem extends Component<CarouselItemProps, CarouselItemState> {
	constructor(props: CarouselItemProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="carousel-item">
			<img src={this.props.photo}></img>
			<div className="carousel-name">{this.props.name}</div>
			<div className="carousel-pos">{this.props.position}</div>
		</div>;
	}
}
