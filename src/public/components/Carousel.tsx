import * as React from "react";
import {Component} from "react";

interface CarouselProps {}
interface CarouselState {}

export default class Carousel extends Component<CarouselProps, CarouselState> {
	constructor(props: CarouselProps) {
		super(props);
		this.state = {};
	}

	private scrollToNext(e: MouseEvent) {
		// implement later
	}

	public render() {
		return <div className="carousel">
			{this.props.children}
			<div className="carousel-next" onClick={this.scrollToNext.bind(this)}>&gt;</div>
		</div>;
	}
}