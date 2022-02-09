import React from 'react';
import { Body, CCard, Title, Inputs, Button } from './styles/cards';

export default function Card({ children, ...restProps }) {
    return <Body { ...restProps }>{ children }</Body>
};

Card.Card = function CardCard({ children, ...restProps }) {
    return <CCard { ...restProps }>{ children }</CCard>
};

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title { ...restProps }>{ children }</Title>
};

Card.Input = function CardInput({ children, ...restProps }) {
    return <Inputs { ...restProps } Inputs/>
};

Card.Button = function CardButton({ children, ...restProps }) {
    return <Button { ...restProps }>{ children }</Button>
};