import React from "react";

const User = props => {
    const profile = props;

    return (
        <div >
            <li>
                <div className="name">{profile.name}</div>
                <div className="age">{profile.age}</div>
            </li>
        </div>
    );
};

export default  User;
