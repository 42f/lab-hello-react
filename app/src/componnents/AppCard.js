import './AppCard.css'

const AppCard = ({img, alt, title, content }) => {
	return (
		<div className='card'>
			<img src={img} alt={alt} />
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	)
}

export default AppCard
