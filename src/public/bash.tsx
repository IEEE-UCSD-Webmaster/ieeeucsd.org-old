import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./components/TopBar";
import { ACTIVE_PAGES, SOCIALS, EMAIL } from "./Config";
import Splash from "./components/Splash";
import DefaultSection from "./components/DefaultSection";
import InvolveBox from "./components/InvolveBox";
import SocialCard from "./components/SocialCard";
import Footer from "./components/Footer";

class Main extends React.Component {
    constructor() {
        super({});
        this.state = {};
    }

    public render() {
        return <h1>Hello World</h1>;
    }
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};
