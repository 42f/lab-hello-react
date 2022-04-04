import AppCard from "./AppCard"
import './AppMain.css'

const AppMain = () => {

	const cards = [
		{ img: './images/icon1.png', alt: 'Icone Declarative', title: 'Declarative', content: 'React nakes it painless to create interavice UIs.' },
		{ img: './images/icon2.png', alt: 'Icone Component', title: 'Component', content: 'Build encapsulated components that manage their state.' },
		{ img: './images/icon3.png', alt: 'Icone Single', title: 'Single-Way', content: 'A set of immutable values are passed to the component\'s' },
		{ img: './images/icon4.png', alt: 'Icone JSX', title: 'JSX', content: 'Statically-typed, designed to run on modern browser' },
	]

	return (
		<section className="cards-container">
			{cards.map(card => <AppCard {...card} />)}
		</section>
	)
}

export default AppMain
