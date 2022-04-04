import AppNav from "./AppNav"
import './AppHeader.css'

const AppHeader = () => {
	return (
		<header>
			<AppNav />
			<section className="header-content">
				<h1>Say hello to ReactJS</h1>
				<p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
				<button>Awesome!</button>
			</section>
		</header>
	)
}

export default AppHeader
