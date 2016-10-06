import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';
import { PHASES } from 'utilities/constants';

const mapStateToProps = state => ({
	phase: state.phase
});

const mapDispatchToProps = dispatch => ({
	stepForward: () => dispatch({ type: "STEP_FORWARD" })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(props => (
	<span>
		<Icon i="step_forward"
			className={ props.phase === PHASES[PHASES.length - 1] ? 'is-disabled' : '' }
			onClick={ props.stepForward } />
	</span>
))