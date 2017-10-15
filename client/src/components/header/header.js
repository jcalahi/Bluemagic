import React from 'react';

const Header = ({ name }) => {
    return (
        <h4>
            Name: { name || 'Unknown' }
        </h4>
    );
};

export default Header;