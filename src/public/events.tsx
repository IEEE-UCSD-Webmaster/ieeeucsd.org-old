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
			<Splash cta="Come out to our events!" delay={2000} backgrounds={["img/backgrounds/fa21social.png"]}></Splash>
			<DefaultSection title="" paragraphs={[
				"Outside the classroom, we believe our events should bring us together and help us refine our skills, foster long lasting connections, give back to the community, and prepare us for our careers.",
				"In similar fashion, our events are split up each to serve one of these goals: technical, social, K-12 outreach, and professional."
			]}></DefaultSection>

			
			<DefaultSection title="Events">
				<div>
					<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
				</div>
			</DefaultSection>

			<DefaultSection title="Open Access Hours">
				<div>
					<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
				</div>
			</DefaultSection>

			
			<DefaultSection title="Have questions? Contact us!">
				<div className="join-scls">{
					[...EMAIL, ...SOCIALS].map(n => (
						<SocialCard url={n.url} image={n.icon} message={n.message}></SocialCard>
					))
				}</div>
			</DefaultSection>

			<Footer></Footer>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};