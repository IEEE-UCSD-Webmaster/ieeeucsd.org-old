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
			<Splash cta="Committees" delay={2000} backgrounds={["img/backgrounds/robocar.png"]}></Splash>
			<DefaultSection title="Join us!" paragraphs={[
				"Our Technical, Social, Professional, PR, Outreach committees work hard to spread IEEE's message. To apply, please contact us! We would love to have you in our team."
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
			
			<div id="contact-us">
				<DefaultSection title="Have questions? Contact us!">
					<div className="join-scls">{
						[...EMAIL, ...SOCIALS].map(n => (
							<SocialCard url={n.url} image={n.icon} message={n.message}></SocialCard>
						))
					}</div>
				</DefaultSection>
			</div>
			<Footer></Footer>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};