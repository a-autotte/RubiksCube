import React from 'react';
import './Tutorial.css';
import Cube from "./RubiksCube/Cube";
import Pyramix from "./Pyramix/Pyramix";
import Pentamix from "./Pentamix/Pentamix";
import styled from "styled-components";

const PreviousButton = styled.button`
    font-size: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: 0;
    color: white;
    padding: 10px;
    margin-left: 20px;
`;

const NextButton = styled.button`
    font-size: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: 0;
    color: white;
    padding: 10px;
    margin-right: 20px;  
`;


function Tutorial() {
    return (
        <div className="tutorial">
            <div className="tutorial__carousel__item">
                <h3> Rubiks Cube </h3>
                <p> The first puzzle ever invented by Erno Rubik </p>
                <Cube />
            </div>
            <div className="tutorial__carousel__item">
                <h3> Pyramix </h3>
                <p> A new type of the same puzzle but it's a pyramidal 3 dimensions </p>
                <Pyramix />
            </div>
            <div className="tutorial__carousel__item">
                <h3> Pyramix </h3>
                <p> A new type of the same puzzle but it's a pyramidal 3 dimensions </p>
                <Pentamix />
            </div>
            <div className="tutorial__carousel__actions">
                <PreviousButton>
                    {"<"}
                </PreviousButton>
                <NextButton>
                    {">"}
                </NextButton>
            </div>
            <script src="../SlickSlider.js"></script>
        </div>
    )
}

export default Tutorial;
