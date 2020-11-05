import React from 'react';
import styled, {css} from 'styled-components';

const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    margin-bottom: 40px;
`

const Logo = styled.div`
    font-size: 1.5em;
`

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        color: #0cff00;
    `}
`
const toProperCase = (lower) => {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const ControlButton = ({name, active}) => {
    return (
        <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
    )
}

const AppBar = () => {
    return ( 
    <Bar>
        <Logo>CryptoDash</Logo>
        <div/>
        <ControlButton active name="dashboard"/>
        <ControlButton name="settings"/>
    </Bar> 
    );
}
 
export default AppBar;