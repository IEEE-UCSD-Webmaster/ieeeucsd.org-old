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
			<Splash cta="Projects" delay={2000} backgrounds={["img/backgrounds/robocar.png"]}></Splash>
			<DefaultSection title="RoboCup" paragraphs={[
				"\"RoboCup is an international scientific initiative with the goal to advance the state of the art of intelligent robots. When established in 1997, the original mission was to field a team of robots capable of winning against the human soccer World Cup champions by 2050.\""
				,"IEEE hosts Robocup Soccer, an annual project where teams develop six robots to compete with other teams during Robofest. Join this hands-on project to explore computer vision, mechanical design, and microcontroller development!"
			]}>
				<a className='ex-link' href='https://www.robocup.org/'>RoboCup website</a>
			</DefaultSection>
			<DefaultSection title="Quarterly Projects" paragraphs={[
				"Getting started on hardware development or want to make your own project? IEEE's Quarterly Projects aims to provide students with project experience in a span of 10 weeks. During QP, students will acquire skills used in the industry such as C++ and the prototyping process with the assistance of our mentors."
			]}>
				<a className='ex-link' href='https://forms.gle/eW6e1i3vWCdBj7Vn6'>Apply here</a>
			</DefaultSection>
			<DefaultSection className={"past-proj"} title="Past Projects">
				<div className="cards">
					<InvolveBox boxTitle="" image="img/backgrounds/robocar.png" description="'22 Robocar Competition"></InvolveBox>
					<InvolveBox boxTitle="" image="img/backgrounds/micromouse.png" description="'22 Micromouse Competition"></InvolveBox>
					<InvolveBox boxTitle="" image="img/backgrounds/sp22qp.png" description="'22 Spring QP Showcase"></InvolveBox>
				</div>
			</DefaultSection>

			<div id="contact-us">
				<DefaultSection className="contact" title="Have questions? Contact us!">
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