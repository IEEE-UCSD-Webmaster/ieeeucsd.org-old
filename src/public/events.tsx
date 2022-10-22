import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./components/TopBar";
import { ACTIVE_PAGES, SOCIALS, EMAIL, OFFICERS } from "./Config";
import Splash from "./components/Splash";
import DefaultSection from "./components/DefaultSection";
import InvolveBox from "./components/InvolveBox";
import SocialCard from "./components/SocialCard";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

interface MainProps {}
interface MainState {}

class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {};
    }
    public render() {
        return (
            <>
                <TopBar links={ACTIVE_PAGES}></TopBar>
                <Splash
                    cta="Come out to our events!"
                    delay={2000}
                    backgrounds={["img/backgrounds/fa21social.webp"]}
                ></Splash>

                <DefaultSection title="Events">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=666sh64sku5n29qv2a2f4598jc%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                </DefaultSection>

                <DefaultSection title="Open Access Hours">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=c_gr3iim9ae4dv9784qkf8meb40c%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                </DefaultSection>

                <div id="contact-us">
                    <DefaultSection
                        className="contact"
                        title="Have questions? Contact us!"
                    >
                        <div className="join-scls">
                            {[...EMAIL, ...SOCIALS].map((n) => (
                                <SocialCard
                                    url={n.url}
                                    image={n.icon}
                                    message={n.message}
                                ></SocialCard>
                            ))}
                        </div>
                    </DefaultSection>
                </div>

                <Footer></Footer>
            </>
        );
    }
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};
