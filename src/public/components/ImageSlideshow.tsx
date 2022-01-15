import React, {Component} from "react";

interface ImageSlideshowProps {
	urls: string[];
	delay: number;
	alt: string;
}
interface ImageSlideshowState {
	progress: number;
}

export default class ImageSlideshow extends Component<ImageSlideshowProps, ImageSlideshowState> {
	private interval: number;

	constructor(props: ImageSlideshowProps) {
		super(props);
		this.state = {
			progress: 0
		};
		this.interval = setInterval(this.changeImage.bind(this), this.props.delay) as any as number;
	}

	private changeImage(): void {
		if (this.state.progress < this.props.urls.length - 1) {
			this.setState({progress: this.state.progress + 1});
		} else {
			this.setState({progress: 0});
		}
	}

	public render() {
		return <div className="image-slideshow">
			<img className="slideshow-image" src={this.props.urls[this.state.progress]} alt={this.props.alt}></img>
		</div>;
	}
}
