import React from 'react';

export default class AboutPage extends React.Component {
	componentDidMount() {
		console.log('mounting');
	}

	componentWillUnmount() {
		console.log('unmounting');
	}

	render() {
		return (
			<React.Fragment>
				<h1>About</h1>

				<section>
					<h2>Header Levels</h2>
					<h3>Header Level 3</h3>
					<h4>Header Level 4</h4>
					<h5>Header Level 5</h5>
					<h6>Header Level 6</h6>
					<p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English
						to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool
						for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font,
						or layout.</p>
				</section>
			</React.Fragment>
		);
	}
}
