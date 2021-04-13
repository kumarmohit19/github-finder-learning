import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = ({user : {login, avatar_url, html_url}}) => {
    // state = {
    //     id : 'id',
    //     login : 'mojombo',
    //     avatar_url : 'https://i.imgur.com/qI7UkH4.jpg',
    //     html_url : '#'
    // }
    
    // const {login, avatar_url, html_url} = props.user;
    return (
        <div className = 'card text-center'>
            <img src = {avatar_url} className = "round-img" style = {{ width : '60px'}} alt-text="userImage"/>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className = 'btn btn-dark btn-sm my-1'>
                    More
                </Link>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user : PropTypes.object.isRequired
};

export default UserItem;
