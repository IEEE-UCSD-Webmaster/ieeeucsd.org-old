import React, {Component} from "react";

interface ImageGalleryProps {
	urls: string[];
	delay: number;
	alt: string;
}
interface ImageGalleryState {
	progress: number;
}

export default class ImageGallery extends Component<ImageGalleryProps, ImageGalleryState> {
	private interval: number;

	constructor(props: ImageGalleryProps) {
		super(props);
		this.state = {
			progress: 0
		};
		this.interval = setInterval(this.changeImage.bind(this), this.props.delay) as any as number;
	}

	private changeImage(): void {
		if (this.state.progress < this.props.urls.length) {
			this.setState({progress: this.state.progress + 1});
		} else {
			this.setState({progress: 0});
		}
	}

	public render() {
		return <div className="image-gallery">
			<img className="slideshow-image" src={this.props.urls[this.state.progress]} alt={this.props.alt}></img>
		</div>;
	}
}
