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
			<Splash cta="Events" delay={2000} backgrounds={["img/backgrounds/fa21social.png"]}></Splash>
			<DefaultSection title="" paragraphs={[
				"No events yet... Keep an eye out for new upates!"
			]}></DefaultSection>
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