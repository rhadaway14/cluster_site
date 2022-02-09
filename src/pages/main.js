import React, { useState } from 'react';
import Header from '../components/header/index';
import Card from '../components/cards';
import img from '../images/Silver Lining-logos_white.png';

export default function Main() {
    const [status, setStatus] = useState('');

    // functions here

    return(
        <>
            <Header>
                <Header.Logo src={ img } alt="SL"/>
            </Header>
            <Card>
                <Card.Card>
                    <Card.Title>DB ID</Card.Title>
                    <Card.Input/>
                    <Card.Button>Submit</Card.Button>
                </Card.Card>
            </Card>
        </>
    )
}