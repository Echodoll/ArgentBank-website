import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/user.action';
import Edit from './AccountEditName';
const HeaderAccount = () => {
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState(false);
    const userProfile = useSelector((state) => state.userReducer.userProfile);
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

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