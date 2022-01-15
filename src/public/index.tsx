import * as ReactDom from "react-dom";
import * as React from "react";
import TopNav from "./components/TopNav";
import HorizontalSection from "./components/HorizontalSection";
import ImageGallery from "./components/ImageSlideshow";
import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";

// The links that are on the top nav bar that link to a lowercase version of their page
const ACTIVE_PAGES: string[] = ["About","Events","Officers","Projects","Resources","Sponsors"];
// Urls of team photos that will go in the "About" slideshow
const TEAM_PHOTOS: string[] = [
	"https://dummyimage.com/600x400/000/fff.png&text=image1",
	"https://dummyimage.com/300x200/000/fff.png&text=image2",
	"https://dummyimage.com/1200x800/000/fff.png&text=image3"
];
const EVENTS = [{
	image: "img/event.png",
	workshopName: "Workshop Name",
	location: "/"
},{
	image: "img/event.png",
	workshopName: "Workshop Name",
	location: "/"
},{
	image: "img/event.png",
	workshopName: "Workshop Name",
	location: "/"
},{
	image: "img/event.png",
	workshopName: "Workshop Name",
	location: "/"
},{
	image: "img/event.png",
	workshopName: "Workshop Name",
	location: "/"
}];

interface MainProps {}
interface MainState {}

class Main extends React.Component<MainProps, MainState> {
	constructor(props: MainProps) {
		super(props);
		this.state = {};
	}
	public render() {
		return <>
			<TopNav names={ACTIVE_PAGES} links={ACTIVE_PAGES.map(e=>"#" + e.toLowerCase())} image="img/logo.png" alt="IEEE at UCSD Logo"></TopNav>
			<HorizontalSection title="About" link="about:blank" row={true}>
				<ImageGallery urls={TEAM_PHOTOS} alt="Team photos" delay={8000}></ImageGallery>
				This is the about IEEE text that should describe all about our organization. 
				This text should be a succinct summary of what we're all about. Lorem, ipsum dolor
				sit amet consectetur adipisicing elit. Soluta voluptate eligendi vero enim, qui 
				fugiat eveniet consectetur quis, quas deleniti perferendis minus commodi ducimus 
				ipsum necessitatibus voluptates sed dolor neque?
			</HorizontalSection>
			<HorizontalSection title="Events" link="about:blank">
				<Carousel>
					{EVENTS.map(e=><CarouselItem {...e}/>)}
				</Carousel>
			</HorizontalSection>
			<HorizontalSection title="Project Space" link="about:blank">
				
			</HorizontalSection>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};