import React from 'react';
import '../CSS/LoadingModal.css';
import BounceLoader from "react-spinners/BounceLoader";

const LoadingModal = () => (
    <div className="loading-modal">
        <BounceLoader color='var(--main-accent)' />
        <div className="loadingText">Loading...</div>
    </div>
);

export default LoadingModal;