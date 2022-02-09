import styled from 'styled-components';


export const Body = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
`;

export const CCard = styled.div`
width: 400px;
height: 600px;
padding: 5px 15px;
display: flex;
flex-direction: column;
background: rgba(255,255,255,0.1);
border-radius: 15px;
margin: 30px auto;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
backdrop-filter: blur(5px);
transition: 1s;

&:hover {
    box-shadow: 0 0 5px  black,
        0 0 15px  black,
        0 0 30px  black,
        0 0 60px  black;
}
`;

export const Title = styled.h2`
    color: rgba(0,0,0,1);
    text-align: center;
    margin: 5 auto;
`;

export const Inputs = styled.input`
    font-size: 1.25rem;
    font-weight: 700;
    padding: .35em .3em;
    letter-spacing: 1px;
    background-color: rgba(0,0,0,1);
    border-radius: 15px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border: none;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    width: 12em;
    color: white;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 20px;

    &:focus {
        outline: none;
    }

    &:hover {
    box-shadow: 0 0 5px  black,
                0 0 15px  black,
                0 0 30px  black,
                0 0 60px  black;
}`;

export const Button = styled.p`
    font-size:20px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    text-decoration: none;
    border-radius: 15px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border: none;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    padding: 5px 25px;
    text-align: center;
    width: 200px;
    color: white;

    &:hover {
        box-shadow: 0 0 5px  black,
                    0 0 15px  black,
                    0 0 30px  black,
                    0 0 60px  black;
        }
    `;