import { SET_STATUS, SET_LOADING } from "../types";

const StatusReducer = (state, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                isOpen: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        default:
            return state;
    }
};

export default StatusReducer;