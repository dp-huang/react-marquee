import React, { Component } from 'react';
import {Panel, Button, Radio} from 'react-bootstrap';
import Marquee from './components/marquee.jsx';

class MarqueeWrapper extends Component {

	constructor(props) {
		super(props);

		this.state = {
			direction: 'left',
			interval: 5,
			timingFunction: 'linear'
		}
	}

	onRadioClick(dir) {
		this.setState({direction: dir});
	}

	onIntervalChange(e) {
		this.setState({interval: e.target.value});
	}

	onTimingFunctionChange(e) {
		this.setState({timingFunction: e.target.value});
	}

	render() {
		return (
			<div style={{width: '80%', margin: '20px auto'}}>
				<Panel header="Scrolling Preview" bsStyle="default">
					<Marquee text='marquee text marquee text marquee text marquee text marquee text' 
						direction={this.state.direction} interval={this.state.interval}
						timingFunction={this.state.timingFunction}
					/>
				</Panel>
				
				<Panel header="Scrolling Setting" bsStyle="default">
					<Radio name='scrollingDir' inline onClick={this.onRadioClick.bind(this, 'left')}>
				      Left
				    </Radio>
				    <Radio name='scrollingDir' inline onClick={this.onRadioClick.bind(this, 'down')}>
				      Down
				    </Radio>

				    <label style={{marginLeft: '30px'}}><span>Interval</span></label>
				    <label style={{marginLeft: '5px'}}>
					    <select name='interval' className="form-control" onChange={this.onIntervalChange.bind(this)}>
						  <option value='5'>5 seconds</option>
						  <option value='10'>10 seconds</option>
						  <option value='15'>15 seconds</option>
						  <option value='20'>20 seconds</option>
						</select>
					</label>

					<label style={{marginLeft: '30px'}}><span>Timing Function</span></label>
				    <label style={{marginLeft: '5px'}}>
					    <select name='interval' className="form-control" onChange={this.onTimingFunctionChange.bind(this)}>
					    	<option value='linear'>linear</option>
						  	<option value='ease'>ease</option>
						  	<option value='ease-in'>ease in</option>
						  	<option value='ease-out'>ease out</option>
						  	<option value='ease-in-out'>ease in out</option>
						</select>
					</label>
				</Panel>
			</div>
		);
		
	}	
}

export default MarqueeWrapper;