import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas);

class Icon extends React.Component {
    render() {
        return (
            <a className='icon' href={this.props.link}>
                <FontAwesomeIcon icon={this.props.icon}/>
            </a>
        );
    }
}

export default Icon;