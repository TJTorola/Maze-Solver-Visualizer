import { INITIAL_SPEED } from 'utilities/constants';

export default (state = INITIAL_SPEED, action) => {
	switch (action.type) {
		case "SET_SPEED":
			return action.speed;
	}
	return state;
};