import React from 'react'; 
import * as Bs from 'react-icons/bs';
import * as Fa from 'react-icons/fa';
import * as Gi from 'react-icons/gi';

const Icon = props => {
    const {iconName, libName} = props;
    const icon = React.createElement(Bs[iconName]);
    return (<div>{icon}</div>);
}

export default Icon;