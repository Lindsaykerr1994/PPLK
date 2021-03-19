import React from 'react';
import ShieldIcon from './shieldIcon';
//import * as Fa from 'react-icons/fa';

// const Icon = props => {
//   const { iconName, size, color } = props;
//   const icon = React.createElement(Fa[iconName]);
//   return <div style={{ fontSize: size, color: color }}>{icon}</div>;
// };

export default function ShieldLink({libName, iconName, fontSize}){
    return(
        <div className="shieldLink">
            <div className="shieldFront">
                <div className="shieldInner">
                    <div style={{"fontSize": fontSize,"width":fontSize,"height":fontSize}} className="iconContainer">
                        <ShieldIcon iconName={iconName} libName={libName} />
                    </div>
                </div>
            </div>
            <div className="shieldSquare">

            </div>
        </div>
    )
}