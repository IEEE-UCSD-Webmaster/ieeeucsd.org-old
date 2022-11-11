import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./components/TopBar";
import { ACTIVE_PAGES } from "./Config";
import Splash from "./components/Splash";
import Footer from "./components/Footer";

class Main extends React.Component {
    constructor() {
        super({});
        this.state = {};
    }

    public render() {
        return (
            <>
                <TopBar links={ACTIVE_PAGES}></TopBar>
                <Splash
                    cta="Page Not Found"
                    delay={2000}
                    backgrounds={["/assets/img/backgrounds/fa21qp.webp"]}
                ></Splash>
                <Footer></Footer>
            </>
        );
    }
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};
