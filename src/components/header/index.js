import React from "react";
import { Background, Title, Logo } from './styles/header.js';

export default function Header({ children, ...restProps }) {
    return <Background { ...restProps }>{ children }</Background>
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title { ...restProps }>{ children }</Title>
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return <Logo { ...restProps } />
};