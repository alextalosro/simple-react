import React from 'react';
import Card from "../UI/Card";
import User from "../UI/User";
import classes from '../Users/UserList.module.css';

const UserList = props => {
return(
    <Card className={classes.users}>
        <ul>
            {props.profiles.map(profile => <User key={profile.id} {...profile}/>)}
        </ul>
    </Card>
    );
};

export default  UserList;
