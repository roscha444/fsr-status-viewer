import React, { useReducer } from "react";
import axios from "axios";
import { SET_STATUS, SET_LOADING } from "../types";
import StatusReducer from "./StatusReducer";
import StatusContext from "./StatusContext";


const StatusState = (props) => {
    const initialState = {
        open: false
    };

    const [state, dispatch] = useReducer(StatusReducer, initialState);

    const getStatus = async () => {
        dispatch({ type: SET_LOADING });

        const res = await axios.get(
            process.env.REACT_APP_API_URL,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );

        console.log(res);

        dispatch({ type: SET_STATUS, payload: res.data.open });
        dispatch({ type: SET_LOADING });
    };

    return (
        <StatusContext.Provider
            value={{
                open: state.open,
                getStatus
            }}>
            {props.children}
        </StatusContext.Provider>
    );
};

export default StatusState;
