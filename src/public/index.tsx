import * as ReactDom from "react-dom";
import * as React from "react";
import TopNav from "./components/TopNav";
import HorizontalSection from "./components/HorizontalSection";
import ImageGallery from "./components/ImageSlideshow";
import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";
import ButtonLink from "./components/ButtonLink";
import Availability from "./components/Availability";
import Officer from "./components/Officer";

// The links that are on the top nav bar that link to a lowercase version of their page
const ACTIVE_PAGES: string[] = ["About","Events","Officers","Projects","Resources","Sponsors"];
// Urls of team photos that will go in the "About" slideshow
const TEAM_PHOTOS: string[] = [
	"https://dummyimage.com/600x400/000/fff.png&text=image1",
	"https://dummyimage.com/300x200/000/fff.png&text=image2",
	"https://dummyimage.com/1200x800/000/fff.png&text=image3"
];
const PROJECT_SPACE: string[] = [
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

const officers = [{
	name: "Sarp User",
	position: "Chair",
	photo: "img/sarp.jpg"
},{
	name: "Parth Desai",
	position: "Vice Chair Finance",
	photo: "img/parth.jpg"
},{
	name: "Derek Cantor",
	position: "Vice Chair Internal",
	photo: "img/derek.jpg"
},{
	name: "Clyde Baron Rapinan",
	position: "Vice Chair Events",
	photo: "img/clyde.jpg"
},{
	name: "Danny Vo",
	position: "Vice Chair Projects",
	photo: "img/danny.jpg"
},{
	name: "Nick Petrone",
	position: "Webmaster",
	photo: "img/nick.jpg"
},{
	name: "Jiawen Yu",
	position: "Technical Chair",
	photo: "img/jiawen.jpg"
},{
	name: "Victor Ku",
	position: "Technical Chair",
	photo: "img/victor.jpg"
},{
	name: "Sunny Chu",
	position: "Technical Chair",
	photo: "img/sunny.jpg"
},{
	name: "Samyak Karnavat",
	position: "Social Chair",
	photo: "img/samyak.jpg"
},{
	name: "Tasnia Jamal",
	position: "Social Chair",
	photo: "img/tasnia.jpg"
},{
	name: "Hector Montenegro",
	position: "Robocup Soccer Chair",
	photo: "img/hector.jpg"
},{
	name: "Zhiqiang Pi",
	position: "Quarterly Projects Chair",
	photo: "img/zhiqiang.jpg"
},{
	name: "Kevin Chang",
	position: "Quarterly Projects Chair",
	photo: "img/kevin.jpg"
},{
	name: "Benjamin Tang",
	position: "Project Space Chair",
	photo: "img/benjamin.jpg"
},{
	name: "Jason Liang",
	position: "Professional Chair",
	photo: "img/jason.jpg"
},{
	name: "Vuong Bui",
	position: "Professional Chair",
	photo: "img/vuong.jpg"
},{
	name: "Thanh Tong",
	position: "PR Chair - Graphics",
	photo: "img/thanh.jpg"
},{
	name: "Abby Hackbarth",
	position: "PR Chair - Graphics",
	photo: "img/abby.jpg"
},{
	name: "Brigette Hacia",
	position: "PR Chair - Marketing",
	photo: "img/brigette.jpg"
},{
	name: "Darin Tsui",
	position: "Outreach Chair",
	photo: "img/darin.jpg"
},{
	name: "Soyon Kim",
	position: "Outreach Chair",
	photo: "img/soyon.jpg"
},{
	name: "Niklas Chang",
	position: "Events Coordinator",
	photo: "img/niklas.jpg"
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
			<TopNav names={ACTIVE_PAGES} links={ACTIVE_PAGES.map(e=>"#" + e.toLowerCase())} image="img/IEEEUCSD.png" alt="IEEE at UCSD Logo"></TopNav>
			<HorizontalSection title="About" link="about:blank" id="about">
				<ImageGallery urls={TEAM_PHOTOS} alt="Team photos" delay={8000}></ImageGallery>
				<span className="description-text">
					<strong>We are dedicated to helping develop students into professional Engineers</strong><br/><br/>
					As an organization, we strive to provide opportunities to students both at UC San Diego and in the larger STEM community to gain hands-on experience with autonomous robotics and its various disciplines. Throughout the year, we host dozens of events and workshops to teach skills not frequently taught in the classroom, as well as outreach events for students looking to give back to the STEM community. We also provide professional development and other resources to help students achieve their true potential as they develop into professional engineers.
				</span>
			</HorizontalSection>
			<HorizontalSection title="Events" link="about:blank" id="events">
				<Carousel>
					{EVENTS.map(e=><CarouselItem {...e}/>)}
				</Carousel>
			</HorizontalSection>
			<HorizontalSection title="Project Space" link="about:blank" id="projects">
				<ImageGallery urls={PROJECT_SPACE} alt="The IEEE Project Space" delay={8000}></ImageGallery>
				<span className="description-text">
					This is a description all about the project space and how amazingly awesome it is
					and also how cool it is too. Lorem, ipsum dolor
					sit amet consectetur adipisicing elit. Soluta voluptate eligendi vero enim, qui
					fugiat eveniet consectetur quis, quas deleniti perferendis minus commodi ducimus
					ipsum necessitatibus voluptates sed dolor neque?
				</span>
				<br/>
				<Availability checkUrl="/">Check all availability</Availability>
				<ButtonLink url="about:blank">Check all availability</ButtonLink>
			</HorizontalSection>
			<HorizontalSection title="Officers" link="about:blank" id="officers" row={true}>
				{officers.map(o=><Officer name={o.name} position={o.position} photo={o.photo} key={o.name}></Officer>)}
			</HorizontalSection>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};