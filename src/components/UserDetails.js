import React from 'react';

const UserDetails = ({userDetails, getUserIdForPosts}) => {
    const {id, name, phone, username, website,company, address} = userDetails;
    const {bs, catchPhrase, name:companyName} = company;
    const {city, street, suite, zipcode, geo:{lat, lng}} = address;

    return (
        <div className='box userDetails'>

            <h2>User Details</h2>

            {/*Как можно вывести эту информацию при помощи рекурсии?*/}
            <ul>
                <li>id - {id}</li>
                <li>name - {name}</li>
                <li>phone - {phone}</li>
                <li>username - {username}</li>
                <li>website - {website}</li>
                <li>company
                    <ul>
                        <li>name - {companyName}</li>
                        <li>bs - {bs}</li>
                        <li>catchPhrase - {catchPhrase}</li>
                    </ul>
                </li>
                <li>address
                    <ul>
                        <li>city - {city}</li>
                        <li>street - {street}</li>
                        <li>suite - {suite}</li>
                        <li>zipcode - {zipcode}</li>
                        <li>geo
                            <ul>
                                <li>lat - {lat}</li>
                                <li>lng - {lng}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <button onClick={() => getUserIdForPosts(id)}> posts </button>

        </div>
    );
};

export default UserDetails;