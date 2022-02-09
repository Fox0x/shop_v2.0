const defaultState = {
	users: [],
};

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";


//TODO: Change it to firebase
export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_USER:
			return { ...state, users: [...state.users, action.payload] };

		case REMOVE_USER:
			return {
				...setTimeout,
				users: state.users.filter(
					(user) => user.id !== action.payload.id
				),
			};

		default:
			return state;
	}
};

export const addUserAction = (name) => {
	return {
		type: ADD_USER,
        //TODO: change payload to be an object from firebase
		payload: {
			name: name,
			id: Date.now(),
		},
	};
};

export const removeUserAction = (user) => {
	return {
		type: REMOVE_USER,
		payload: user,
	};
};
