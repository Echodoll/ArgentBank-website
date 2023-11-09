import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../actions/user.action';
import { useEffect } from 'react';

const EditName = ({ setIsConnected }) => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.userReducer.userProfile);
    const [newUserName, setNewUserName] = useState('');
    const tokenFromLocalStorage = localStorage.getItem('token');
    const tokenFromRedux = useSelector((state) => state.userReducer.token);
    const token = tokenFromLocalStorage || tokenFromRedux
    useEffect(() => {
        if (token) {
            dispatch(updateUser(token));
        }
    }, [dispatch, token]);
    const UpdateUserName = async () => {
        if (newUserName) {
            dispatch(updateUser(newUserName, token));
            setIsConnected(false);
            setNewUserName('');
        }
    };
    const cancel = () => {
        setIsConnected(false);
        setNewUserName('');
    };
    return (
        <div className="edit-form">
            <h2>Edit User Name</h2>
            <div>
                <label htmlFor="newUserName">User Name :</label>
                <input
                    type="text"
                    id="newUserName"
                    placeholder="Enter New Username"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="firstName">First Name :</label>
                <input
                    type="text"
                    id="firstName"
                    value={userProfile?.firstName}
                    disabled
                    className='text_input'
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name :</label>
                <input
                    type="text"
                    id="lastName"
                    value={userProfile?.lastName}
                    disabled
                    className='text_input'
                />
                <div className="buttons__edit">
                    <button onClick={UpdateUserName}>Save</button>
                    <button onClick={cancel}>Cancel</button>
                </div>
            </div>
        </div>

    );
};

export default EditName;