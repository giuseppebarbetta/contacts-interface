import React from 'react';
import { Container as Containers } from './styles';

function Container ({children}) {
    return <Containers> {children} </Containers>
}

export default Container;