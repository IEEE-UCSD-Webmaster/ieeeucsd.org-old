import * as React from "react";
import { Component } from "react";

interface TopBarProps {
    links: {
        name: string;
        url: string;
    }[];
}
interface TopBarState {
    showBurger: boolean;
    menuVisible: boolean;
}

export default class TopBar extends Component<TopBarProps, TopBarState> {
    private static HAMBURGER_POINT = 1290;
    constructor(props: TopBarProps) {
        super(props);
        this.state = {
            showBurger: this.shouldShowBurger(),
            menuVisible: false,
        };
        this.toggleMenu.bind(this);
        window.addEventListener("resize", this.checkResize.bind(this));
    }

    private toggleMenu() {
        this.setState({ menuVisible: !this.state.menuVisible });
    }

    private checkResize() {
        this.setState({ showBurger: this.shouldShowBurger() });
    }

    private shouldShowBurger(): boolean {
        return window.innerWidth < TopBar.HAMBURGER_POINT;
    }

    public render() {
        return (
            <div
                className={`topbar${
                    this.state.showBurger ? " burger-bar" : ""
                }`}
            >
                <div className="img-cont">
                    <a href="/">
                        <img src="img/logo.svg"></img>
                    </a>
                    <div
                        className="burger"
                        style={{
                            display: this.state.showBurger ? "initial" : "none",
                        }}
                        onClick={this.toggleMenu}
                        role="menubar"
                    >
                        ≡
                    </div>
                </div>
                <div className="links">
                    <div
                        className={`link-items${
                            this.state.showBurger ? " burger-time" : ""
                        }`}
                        style={{
                            display: this.state.showBurger
                                ? this.state.menuVisible
                                    ? "flex"
                                    : "none"
                                : "initial",
                        }}
                    >
                        {this.props.links.map((l) => {
                            return (
                                <a className="navlink" href={l.url} key={l.url}>
                                    {l.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
