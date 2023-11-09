import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/user.action';
import Edit from './AccountEditName';

const HeaderAccount = () => {
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState(false);
    const userProfile = useSelector((state) => state.userReducer.userProfile);
    const tokenFromLocalStorage = localStorage.getItem('token');
    const tokenFromRedux = useSelector((state) => state.userReducer.token);
    const token = tokenFromLocalStorage || tokenFromRedux
    useEffect(() => {
        dispatch(fetchUser(token));
    }, [dispatch, token]);

    return (
        <div className="header bg-dark">
            {isConnected ? (
                <Edit setIsConnected={setIsConnected} />
            ) : (
                <>
                    <h1>Welcome back<br />{userProfile.userName} !</h1>
                    <button className="edit-button" onClick={() => setIsConnected(true)}>Edit Name</button>
                    <h2 className="sr-only">Accounts</h2>
                </>
            )}
        </div>
    );
};
export default HeaderAccount;