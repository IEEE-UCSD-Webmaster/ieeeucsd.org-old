import React, {Component} from "react";

interface ImageScrollPanelProps {
	imageUrls: string[];
}
interface ImageScrollPanelState {}

export default class ImageScrollPanel extends Component<ImageScrollPanelProps, ImageScrollPanelState> {
	constructor(props: ImageScrollPanelProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <></>;
	}
}
