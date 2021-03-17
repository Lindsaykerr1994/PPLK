import React, { Component } from 'react'; 
import * as Bs from 'react-icons/bs';
import * as Fa from 'react-icons/fa';
import * as Gi from 'react-icons/gi';


class ShieldIcon extends Component {
    createIcon(libName, iconName) {
        let icon;
        if(libName==="Bs"){
            icon = React.createElement(Bs[iconName]);
        }
        if(libName==="Fa"){
            icon = React.createElement(Fa[iconName]);
        }
        if(libName==="Gi"){
            icon = React.createElement(Gi[iconName]);
        }
        return icon;
    }
    render() {
        return (
            <div className="skills-icon">
                {this.createIcon((this.props.lib),(this.props.logo))}
            </div>
        )
    }
}

export default ShieldIcon;