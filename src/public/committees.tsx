import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./components/TopBar";
import { ACTIVE_PAGES, SOCIALS, EMAIL, OFFICERS } from "./Config";
import Splash from "./components/Splash";
import DefaultSection from "./components/DefaultSection";
import SocialCard from "./components/SocialCard";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import CommitteeBox from "./components/CommitteeBox";

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
                    cta="The backbone of IEEE. Come help make a difference!"
                    delay={2000}
                    backgrounds={["/assets/img/backgrounds/committee.webp"]}
                ></Splash>
                <DefaultSection
                    title="Join us!"
                    paragraphs={[
                        "Interested in gaining experience in event planning and development, meeting new friends, and learning more about IEEE? Join one of our committees as an IEEEntern!",
                    ]}
                ></DefaultSection>
                <DefaultSection className={"committees"} title="Our Committees">
                    <div className="cards">
                        <CommitteeBox
                            boxTitle="Technical Committee"
                            image="/assets/img/committees/technical.webp"
                            description="The Technical Committee is responsible for maintaining and improving the organization's technical skills program. Through developing, planning, and executing a minimum of six technical events throughout the year, this chair seeks to improve students’ technical skills. Events can include PCB, soldering, hardware, and software. You can build anything with students!"
                        ></CommitteeBox>
                        <CommitteeBox
                            boxTitle="Social Committee"
                            image="/assets/img/committees/social.webp"
                            description="The Social Committee is in charge of planning and executing social events that create bonding opportunities for officers and our student members. Interested in arranging a hike at Torrey Pines? Sharing some free food and drinks in Warren Mall? Going out for an escape room challenge? There are tons of ideas waiting for you to implement!"
                        ></CommitteeBox>
                        <CommitteeBox
                            boxTitle="Professional Committee"
                            image="/assets/img/committees/professional.webp"
                            description="The Professional Committee is responsible for maintaining and improving the organization’s professional development program. Through developing, planning, and executing a minimum of six professional events throughout the year, such as, workshops on developing professional skills, company (sponsor) information sessions, tech talks, tours, and the annual ECE day (partnered with the VC External), this committee seeks to improve students’ professional skills."
                        ></CommitteeBox>
                        <CommitteeBox
                            boxTitle="PR Committee"
                            image="/assets/img/committees/pr.webp"
                            description="The PR Comittee is responsible for creating and printing flyers, photographs, and other media. They also aid in managing the Branch's social media presence by distributing the news of the Branch's events, projects, and outreach."
                        ></CommitteeBox>
                        <CommitteeBox
                            boxTitle="Outreach Committee"
                            image="/assets/img/committees/outreach.webp"
                            description="The Outreach Committee is responsible for hosting outreach events that will benefit K-12 students within the STEM fields including the annual Boy Scout STEM Merit Badge Fair, Girls STEM Fair, and Sumobot Robotics Competition. Up for the challenge to explain Ohm's Law to a 10-year-old?"
                        ></CommitteeBox>
                    </div>
                </DefaultSection>

                <div id="contact-us">
                    <DefaultSection title="Interested? Join our socials!">
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
                    <DefaultSection
                        className="contact"
                        title="Or... Contact one of our staff!"
                    >
                        <Carousel items={OFFICERS} itemsPerPage={6}></Carousel>
                    </DefaultSection>
                </div>

                <Footer></Footer>
            </>
        );
    }
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};
