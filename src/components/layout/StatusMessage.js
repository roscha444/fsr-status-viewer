import React, { useEffect, useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import OpenMessage from '../messages/OpenMessage';
import ClosedMessage from '../messages/ClosedMessage';
import WarningMessage from '../messages/WarningMessage';
import StatusContext from "../../context/StatusContext/StatusContext";

const StatusMessage = () => {

    const statusContext = useContext(StatusContext);
    const {
        isOpen,
        isLoading,
        error,
        getStatus
    } = statusContext;

    useEffect(() => {
        getStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div class="columns is-mobile is-centered">
            <div className="column is-three-quarters">
                {isLoading ?
                    <div className="has-text-centered"><ClipLoader size={50} loading={isLoading} /></div> : error ? <WarningMessage /> : isOpen ? <OpenMessage /> : <ClosedMessage />
                }
            </div>
        </div>
    );
}

export default StatusMessage;