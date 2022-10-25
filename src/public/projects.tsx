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
        return (
            <>
                <TopBar links={ACTIVE_PAGES}></TopBar>
                <Splash
                    cta="Gain hands-on experience to make your resume stand out! No experience required!"
                    delay={2000}
                    backgrounds={["/assets/img/backgrounds/robocar.webp"]}
                ></Splash>


                <div className="project-desc">
                    <DefaultSection
                        title="Continuous Projects"
                        paragraphs={[
                            "Looking to use your developed skills or get involved in a project that competes with other schools? Annual projects allow students to become more acquainted with computer vision and embedded systems while building connections with other schools and students."
                        ]}
                    >
                    </DefaultSection>
                    <img src="/assets/img/backgrounds/micromouse.webp"></img>
                </div>

                <div className="project-desc">
                    <DefaultSection
                        title="Quarterly Projects"
                        paragraphs={[
                            "Getting started on hardware development or want to make your own project? IEEE's Quarterly Projects aims to provide students with project experience in a span of 10 weeks. During QP, students will acquire skills used in the industry such as C++ and the prototyping process with the assistance of our mentors."
                        ]}
                    >
                    </DefaultSection>
                    <img src="/assets/img/backgrounds/sp22qp.webp"></img>
                </div>

                <div id="contact-us">
                    <DefaultSection
                        className="contact"
                        title="Have questions? Contact us!"
                    >
                        <div className="join-scls">
                            {[...EMAIL, ...SOCIALS].map((n) => (
                                <SocialCard
                                    key={n.url} // Hacky fix: use url as key
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
