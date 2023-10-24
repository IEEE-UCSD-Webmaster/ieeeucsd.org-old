import * as React from "react";
import { Component } from "react";

export interface CarouselItemProps {
    name: string;
    position: string;
    email: string;
    photo: string;
}

export default class CarouselItem extends Component<CarouselItemProps> {
    constructor(props: CarouselItemProps) {
        super(props);
        this.state = {};

        this.handleImageError = this.handleImageError.bind(this);
    }
    handleImageError(e) {
        e.target.src = "/assets/img/officers/avatar.jpg"; // Default Image
    }

    public render() {
        return (
            <div className="carousel-item">
                <img
                    src={this.props.photo}
                    onError={this.handleImageError}
                ></img>
                <div className="carousel-name">{this.props.name}</div>
                <div className="carousel-pos">{this.props.position}</div>
                <div className="carousel-email">
                    <a href={"mailto:" + this.props.email}>
                        {this.props.email}
                    </a>
                </div>
            </div>
        );
    }
}
