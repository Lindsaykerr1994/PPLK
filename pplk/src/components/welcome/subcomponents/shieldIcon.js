import React from 'react';
import * as Bs from 'react-icons/bs';
import * as Bi from 'react-icons/bi';
import * as Fa from 'react-icons/fa';
import * as Gi from 'react-icons/gi';
import * as Vsc from 'react-icons/vsc';

const ShieldIcon = props => {
    const { iconName, libName } = props;
    if(libName === "Fa"){
        const icon = React.createElement(Fa[iconName]);    
        return icon;
    } else if(libName === "Bs"){
        const icon = React.createElement(Bs[iconName]);
        return icon;
    } else if(libName === "Bi"){
        const icon = React.createElement(Bi[iconName]);
        return icon;
    } else if(libName === "Gi"){
        const icon = React.createElement(Gi[iconName]);
        return icon;
    } else if(libName === "Vsc"){
        const icon = React.createElement(Vsc[iconName]);
        return icon;
    } else {
        return null;
    };
};
export default ShieldIcon;