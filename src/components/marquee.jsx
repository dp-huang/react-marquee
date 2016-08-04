import React, { Component } from 'react';
import './marquee.css';

class Marquee extends Component {

	constructor(props) {
		super(props);

		this.state = {
			scrollingStatus: 'running',
			scrollingDir: 'left',
			scorllingInterval: 20,
			scrollingTimingFunction: 'linear'
		}
	}

	onMarqueeMouseMove() {
		this.setState({scrollingStatus: 'paused'});
	}

	onMarqueeMouseOut() {
		this.setState({scrollingStatus: 'running'});
	}

	render() {
		const direction = this.props.direction || this.state.scrollingDir;
		const interval = this.props.interval || this.state.scorllingInterval;
		const timingFunction = this.props.timingFunction || this.state.scrollingTimingFunction;
		const className = 'marquee_' + direction;
		const animationStyle = className + ' ' + interval + 's ' + timingFunction + ' infinite ' + this.state.scrollingStatus;
		
		return (
			<div className={className}>
				<div style={{animation: animationStyle}} onMouseMove={this.onMarqueeMouseMove.bind(this)} onMouseOut={this.onMarqueeMouseOut.bind(this)}>
					<span>{this.props.text}</span>
				</div>
			</div>
		);
	}
}

Marquee.propsTypes = {
	text: React.PropTypes.string.isRequired,
	direction: React.PropTypes.string.isRequired,
	interval: React.PropTypes.number.isRequired,
	timingFunction: React.PropTypes.string.isRequired
}

export default Marquee;