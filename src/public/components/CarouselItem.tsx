import * as React from "react";
import {Component} from "react";

interface CarouselItemProps {
	location: string;
	workshopName: string;
	image: string;
}
interface CarouselItemState {}

export default class CarouselItem extends Component<CarouselItemProps, CarouselItemState> {
	constructor(props: CarouselItemProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <a className="carousel-item" href={this.props.location}>
			<img src={this.props.image}></img>
			<a href={this.props.location}>{this.props.workshopName}</a>
		</a>;
	}
}
