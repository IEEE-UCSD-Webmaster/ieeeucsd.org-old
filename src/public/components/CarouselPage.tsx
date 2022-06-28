import * as React from "react";
import {Component} from "react";
import CarouselItem, { CarouselItemProps } from "./CarouselItem";

interface CarouselPageProps {
	items: CarouselItemProps[];
	visible: boolean;
}
interface CarouselPageState {}

export default class CarouselPage extends Component<CarouselPageProps, CarouselPageState> {
	constructor(props: CarouselPageProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="carousel-page" style={this.props.visible ? {} : {display: "none"}}>{
			this.props.items.map(n=>(
				<CarouselItem {...n}></CarouselItem>
			))
		}</div>;
	}
}
