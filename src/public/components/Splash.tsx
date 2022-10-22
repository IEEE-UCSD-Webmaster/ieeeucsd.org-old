import * as React from "react";
import { Component } from "react";
import { SOCIALS_WHITE } from "../Config";

interface SplashProps {
    cta: string;
    backgrounds: string[];
    delay: number;
}
interface SplashState {
    progress: number;
}

export default class Splash extends Component<SplashProps, SplashState> {
    private interval: number;
    constructor(props: SplashProps) {
        super(props);
        this.state = {
            progress: 0,
        };
        this.interval = setInterval(
            this.changeImage.bind(this),
            this.props.delay
        ) as any as number;
    }

    private changeImage(): void {
        if (this.state.progress < this.props.backgrounds.length - 1) {
            this.setState({ progress: this.state.progress + 1 });
        } else {
            this.setState({ progress: 0 });
        }
    }

    public render() {
        return (
            <div
                className="splash"
                style={{
                    backgroundImage: `url("${
                        this.props.backgrounds[this.state.progress]
                    }")`,
                }}
            >
                <div className="call-to-action">{this.props.cta}</div>
                <div className="splash-socials">
                    {SOCIALS_WHITE.map((n) => (
                        <a href={n.url} key={n.icon}>
                            <img src={n.icon}></img>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
