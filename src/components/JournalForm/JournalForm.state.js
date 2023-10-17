export const INITIAL_STATE = {
	isValid: {
		text: true,
		title:true,
		date:true
	}, 
	values: {
		text: undefined,
		title:undefined,
		date:undefined
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch(action.type) {
	case 'RESET_VALIDTY':
		return {...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const titleValidty = action.payload.title?.trim().length;
		const textValidty = action.payload.text?.trim().length;
		const dateValidty = action.payload.date;

		return {
			values: action.payload,
			isValid: {
				text: textValidty,
				title: textValidty,
				date: dateValidty
			},
			isFormReadyToSubmit: titleValidty && textValidty && dateValidty
		};
	}
	}
}