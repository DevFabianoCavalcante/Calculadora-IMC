import { ImgHTMLAttributes } from "react";
import styled from "styled-components";


export const MainDiv = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    background-color: #F5F5FA;

    @media(max-width: 1200px) {
        flex-direction: column;
        width: auto;
    }
`;

export const LeftSide = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 50%;

    @media(max-width: 1200px) {
        margin: 0 auto;
        width: 100%;
    }
`;

export const SubTitle = styled.h2 `
    font-size: 36px;
    font-family: Poppins;
    font-weight: bold;
    color: ${props => props.color};
    margin: 1rem 0 1rem 0;

    @media(max-width: 1200px) {
        margin: 1rem auto;
    }
`;

export const MainText = styled.p `
    max-width: 25rem;
    white-space: normal;
    font-family: Arial;
    font-size: 18px;
    color: #666666;
    margin: 0;

    @media(max-width: 1200px) {
        margin: 0 1rem 2rem 1rem;
        max-width: 80%;
    }
`;

export const ImageFitness = styled.img`
    max-height: 25rem;
    max-width: 25rem;
    margin-top: 5rem;

    @media(max-width: 1200px) {
        display: none;
    }
`;

export const RightSide = styled.div `
    display: flex;
    justify-content: center;
    margin: 0 10% 0 0;
    width: 50%;

    @media(max-width: 1200px) {
        margin: 0;
        width: 100%;
    }
`;

export const CalcContainer = styled.div`
    height: 38rem;
    width: 27rem;
    margin: auto;
    background-color: #343B49;
    border-radius: 5px;

    @media(max-width: 1200px) {
        margin: 0 0 1rem 0;
        height: 38rem;
        width: 90%;
    }
`;

export const containerInput = styled.div `
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 2rem 0;
    padding: 1rem 0;
`;

export const InputLabel = styled.label `
    font-family: Arial;
    font-size: 24px;
    color: #EDEDED;
    letter-spacing: 1.5%;
`;

export const Input = styled.input `
    font-size: 18px;
    font-family: Arial;
    text-align: center;
    background-color: #EDEDED;
    color: #1D0F42;
    max-width: 40%;
    height: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    

    &:focus {
        border: 2px solid #D7C9FF;
    }

    @media(max-width: 1200px) {
        width: 60%;
    }
`;

export const Btn = styled.button `
    height: 4rem;
    width: 21rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
    background-color: #D7C9FF;
    color: #1D0F42;
    border-radius: 5px;
    font-family: Poppins;
    font-weight: bold;
    letter-spacing: 2px;

    &:hover {
        background-color: #A08BDB;
        color: #11072D;
    }

    @media(max-width: 1200px) {
        max-width: 80%;
    }
`;

type display = {
    display: string
    color: string;
}

export const ContainerResult = styled.div<display> `
    display: ${props => props.display};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1.5rem auto;
    height: 7.5rem;
    width: 21rem;
    border-radius: 5px;
    background-color: ${props => props.color};
    color: #F5F5FA;

    p{
        font-size: 18px;
        font-family: Poppins;
        letter-spacing: 1.5px;
        color: #525252;
    }

    h3{
        font-size: 22px;
        font-family: Poppins;
        letter-spacing: 1.5px;
        font-weight: bold;
        color: #141414;
    }

    @media(max-width: 1200px) {
        max-width: 80%;
    }
`;
