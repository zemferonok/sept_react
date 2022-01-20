import React from 'react';

const Flight = ({info}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = info;

    return (
        <div>
            {mission_name} - {launch_year}
            <img src={mission_patch_small} alt="picture"/>
        </div>
    );
};

export default Flight;