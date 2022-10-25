import * as React from "react";
import { Component } from "react";
import SocialCard from "./SocialCard";
import { EMAIL_WHITE, SOCIALS_WHITE } from "../Config";

export default class Footer extends Component {
    constructor() {
        super({});
        this.state = {};
    }

    public render() {
        return (
            <div className="footer">
                <img src="/assets/img/logo_white.svg"></img>
                <div className="footer-scls">
                    {[...EMAIL_WHITE, ...SOCIALS_WHITE].map((n) => (
                        <SocialCard
                            key={n.url}
                            url={n.url}
                            image={n.icon}
                            message={n.message}
                        ></SocialCard>
                    ))}
                </div>
            </div>
        );
    }
}
