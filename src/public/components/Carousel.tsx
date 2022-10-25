import * as React from "react";
import { Component } from "react";
import { CarouselItemProps } from "./CarouselItem";
import CarouselPage from "./CarouselPage";

interface CarouselProps {
    items: CarouselItemProps[];
    itemsPerPage: number;
}
interface CarouselState {
    page: number;
}

export default class Carousel extends Component<CarouselProps, CarouselState> {
    constructor(props: CarouselProps) {
        super(props);
        this.state = {
            page: 0,
        };
    }

    private prevPage() {
        this.setState({
            page: this.state.page - 1 < 0 ? 0 : this.state.page - 1,
        });
    }

    private nextPage() {
        this.setState({
            page:
                this.state.page + 1 >
                Math.ceil(this.props.items.length / this.props.itemsPerPage) - 1
                    ? Math.ceil(
                          this.props.items.length / this.props.itemsPerPage
                      ) - 1
                    : this.state.page + 1,
        });
    }

    public render() {
        const arr = this.chunkArray(this.props.items);
        return (
            <div className="carousel">
                <img
                    className="carousel-left"
                    src="/assets/img/arrow.svg"
                    style={
                        this.state.page === 0 ? { visibility: "hidden" } : {}
                    }
                    onClick={this.prevPage.bind(this)}
                ></img>
                <div className="carousel-items">
                    {arr.map((items, i) => (
                        <CarouselPage
                            key={i}
                            items={items}
                            visible={i === this.state.page}
                        ></CarouselPage>
                    ))}
                </div>
                <img
                    className="carousel-right"
                    src="/assets/img/arrow.svg"
                    style={
                        this.state.page === arr.length - 1
                            ? { visibility: "hidden" }
                            : {}
                    }
                    onClick={this.nextPage.bind(this)}
                ></img>
            </div>
        );
    }

    private chunkArray(array: CarouselItemProps[]): CarouselItemProps[][] {
        const returnArr = [] as CarouselItemProps[][];
        for (let i = 0; i < array.length; i += this.props.itemsPerPage) {
            returnArr.push(array.slice(i, i + this.props.itemsPerPage));
        }
        return returnArr;
    }
}
