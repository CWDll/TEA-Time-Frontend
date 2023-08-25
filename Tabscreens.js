import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;
background-color : #FFF9F2;
`;
const StyledText = styled.Text`
font-size : 30px;
`;

export const Calendar = () => {
    return (
        <Container>
            <StyledText>Calendar</StyledText>
        </Container>
    );
};

export const DiaryList = () => {
    return (
        <Container>
            <StyledText>DiaryList</StyledText>
        </Container>
    );
};

export const Chart = () => {
    return (
        <Container>
            <StyledText>Chart</StyledText>
        </Container>
    );
};

export const Settings = () => {
    return (
        <Container>
            <StyledText>Settings</StyledText>
        </Container>
    );
};