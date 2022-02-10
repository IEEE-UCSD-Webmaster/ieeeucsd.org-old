import * as React from "react";
import {Component} from "react";

interface CarouselProps {}
interface CarouselState {
	innerRef: React.Ref<HTMLDivElement>
}

export default class Carousel extends Component<CarouselProps, CarouselState> {
	constructor(props: CarouselProps) {
		super(props);
		this.state = {
			innerRef: React.createRef()
		};
	}

	private scrollToNext(e: MouseEvent) {
		let elem = (this.state.innerRef as any).current as HTMLDivElement;
		elem.scrollBy({left: elem.parentElement.getBoundingClientRect().width, behavior: "smooth"})
	}

	public render() {
		return <div className="carousel">
			<div className="carousel-inner" ref={this.state.innerRef}>
				{this.props.children}
			</div>
			<div className="carousel-next" onClick={this.scrollToNext.bind(this)}>&gt;</div>
		</div>;
	}
}