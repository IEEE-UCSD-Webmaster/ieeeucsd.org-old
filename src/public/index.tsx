import * as ReactDom from "react-dom";
import * as React from "react";
import TopNav from "./components/TopNav";

interface MainProps {}
interface MainState {}

class Main extends React.Component<MainProps, MainState> {
	constructor(props: MainProps) {
		super(props);
		this.state = {};
	}
	public render() {
		return <>
			<TopNav links={["Events","Officers","Projects","Resources","Sponsors"]} 
				image="img/logo.png" alt="IEEE at UCSD Logo"></TopNav>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};