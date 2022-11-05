import Header from "../Header/Header";
import LiveSection from "../LiveSection/LiveSection";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Header/>
			<LiveSection/>
        </div>
    );
}

export default Layout;
