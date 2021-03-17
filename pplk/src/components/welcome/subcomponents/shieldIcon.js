import React from 'react'; 
import * as Bs from 'react-icons/bs';
import * as Fa from 'react-icons/fa';
import * as Gi from 'react-icons/gi';

export default function ShieldIcon({lib, iconName}) {
    let icon;
    if(lib==="Bs"){
        icon = React.createElement(Bs[{iconName}]);
    }
    if(lib==="Fa"){
        icon = React.createElement(Fa[iconName]);
    }
    if(lib==="Gi"){
        icon = React.createElement(Gi[iconName]);
    }
    return(
        <>
        {icon}
        </>
    );
}