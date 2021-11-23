import { SET_STATUS } from "../types";

const StatusReducer = (state, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                open: action.payload
            };
        default:
            return state;
    }
};

export default StatusReducer;