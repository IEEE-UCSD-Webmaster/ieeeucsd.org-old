import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./components/TopBar";
import {ACTIVE_PAGES, SOCIALS, EMAIL, OFFICERS} from "./Config";
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
		return <>
			<TopBar links={ACTIVE_PAGES}></TopBar>
			<Splash cta="The backbone of IEEE. Come help make a difference!" delay={2000} backgrounds={["img/backgrounds/committee.png"]}></Splash>
			<DefaultSection title="Join us!" paragraphs={[
				"Interested in gaining experience of event planning and development, meeting new friends, and learning more about IEEE? Join one of our committees as an IEEEntern!"
			]}>
			</DefaultSection>
			<DefaultSection className={"our-comms"} title="Our Committees">
				<div className="cards">
					<InvolveBox boxTitle="" image="img/committees/technical.jpg" description="Technical Committee"></InvolveBox>
					<InvolveBox boxTitle="" image="img/committees/social.jpg" description="Social Committee"></InvolveBox>
					<InvolveBox boxTitle="" image="img/committees/professional.jpg" description="Professional Committee"></InvolveBox>
					<InvolveBox boxTitle="" image="img/committees/pr.jpg" description="PR Committee"></InvolveBox>
					<InvolveBox boxTitle="" image="img/committees/outreach.jpg" description="Outreach Committee"></InvolveBox>
				</div>
			</DefaultSection>
			
			<div className="contact-us">
				<DefaultSection title="Interested? Join our socials!">
					<div className="join-scls">{
						[...EMAIL, ...SOCIALS].map(n => (
							<SocialCard url={n.url} image={n.icon} message={n.message}></SocialCard>
						))
					}</div>
				</DefaultSection>
				<DefaultSection className="contact" title="Or... Contact one of our staff!">
					<Carousel items={OFFICERS} itemsPerPage={6}></Carousel>
				</DefaultSection>
			</div>

			<Footer></Footer>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};