import * as ReactDom from "react-dom";
import * as React from "react";
import TopNav from "./components/TopNav";
import HorizontalSection from "./components/HorizontalSection";
import ImageGallery from "./components/ImageGallery";

const ACTIVE_PAGES = ["Events","Officers","Projects","Resources","Sponsors"];

interface MainProps {}
interface MainState {}

class Main extends React.Component<MainProps, MainState> {
	constructor(props: MainProps) {
		super(props);
		this.state = {};
	}
	public render() {
		return <>
			<TopNav names={ACTIVE_PAGES} links={ACTIVE_PAGES.map(e=>"/" + e.toLowerCase())} image="img/logo.png" alt="IEEE at UCSD Logo"></TopNav>
			
			<HorizontalSection title="About" link="about:blank">
				<ImageGallery urls={["https://images.unsplash.com/photo-1637266702043-287eb7d2b5b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
									"https://images.unsplash.com/photo-1637278643503-3a49c91b7000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
									"https://images.unsplash.com/photo-1637278643503-3a49c91b7000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]}
					alt="Team photos" delay={2000}></ImageGallery>
			</HorizontalSection>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};