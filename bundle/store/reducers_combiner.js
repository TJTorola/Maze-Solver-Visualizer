import { combineReducers } from 'redux';

import speed from 'reducers/speed';
import worker from 'reducers/worker';
import render from 'reducers/render';
import playing from 'reducers/playing';
import algorithm from 'reducers/algorithm';
import goingFastest from 'reducers/going_fastest';
import goingSlowest from 'reducers/going_slowest';

import phaseGenerated from 'reducers/phase/generated';
import phaseWorking from 'reducers/phase/working';
import phaseSolved from 'reducers/phase/solved';

export default combineReducers({ 
	playing,
	phase: combineReducers({
		generated: phaseGenerated,
		solved: phaseSolved,
		working: phaseWorking
	}),
	algorithm,
	speed,
	render,
	worker,
	goingFastest,
	goingSlowest
});