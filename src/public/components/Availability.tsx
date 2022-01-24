import * as React from "react";
import {Component} from "react";

interface AvailabilityProps {}
interface AvailabilityState {
	available: boolean;
}

export default class Availability extends Component<AvailabilityProps, AvailabilityState> {
	constructor(props: AvailabilityProps) {
		super(props);
		this.state = {
			available: false
		};
	}

	public render() {
		return <div className="availability">
			{}
		</div>;
	}
}
