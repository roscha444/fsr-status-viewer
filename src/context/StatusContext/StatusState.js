import React, { useReducer } from "react";
import axios from "axios";
import { SET_ERROR, SET_STATUS, SET_LOADING } from "../types";
import StatusReducer from "./StatusReducer";
import StatusContext from "./StatusContext";


const StatusState = (props) => {
    const initialState = {
        isOpen: false,
        isLoading: true,
        error: false
    };

    const [state, dispatch] = useReducer(StatusReducer, initialState);

    const getStatus = async () => {

        try {
            const res = await axios.get(
                process.env.REACT_APP_API_URL,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )

            dispatch({ type: SET_STATUS, payload: res.data.open });
        } catch (e) {
            dispatch({ type: SET_ERROR });
        }
        dispatch({ type: SET_LOADING });
    };

    return (
        <StatusContext.Provider
            value={{
                isOpen: state.isOpen,
                isLoading: state.isLoading,
                error: state.error,
                getStatus
            }}>
            {props.children}
        </StatusContext.Provider>
    );
};

export default StatusState;
