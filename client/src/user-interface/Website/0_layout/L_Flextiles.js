import React from 'react';

const L_FlexTiles = ({children, ...props}) => {

    let altClass = props.sectionClass;


    return (
        <ul className={`l-gridFlex `+(altClass ? altClass : "")} data-min={props.minWidth} data-max={props.maxWidth}>
        {children.map((child, index) =>
            <li className={`l-flexTiles__item `+ (altClass=="l-flexTiles--checkered" && index+1 % 2 ? "l-flexTiles__item--alternate" : "")} data-index={index} key={index}>{child}</li>
            )}
        </ul>
    );
}

export default L_FlexTiles;