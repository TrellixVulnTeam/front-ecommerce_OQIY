import styled from 'styled-components';

// Global Infos components
export const WrapperButton = styled.div`
    margin-bottom: 30px;
`;
export const Title = styled.h1`
    color: white;
    font-size: 50px ;
`;
export const Link = styled.a`
    color: white;
`;
export const Description = styled.p`
    color: gray;
    flex-wrap: wrap;
    font-size: 32px;
`;

// GlobalDrawer 
export const WrapperAll = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;
export const WrapperDrawer = styled.div`
    color: white;
    padding: 0 100px;
`;
export const WrapperLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export const WrapperSousLinkTitle = styled.div`
    color: white;
    font-size: 50px;

    a {
        color: white;

        &:hover {
            color: grey;
        }
    }

`;
export const WrapperSousLink = styled.div`
    display: flex;
`;
export const WrapperSousLinkUnit = styled.div`
    margin-right: 50px;
    color: grey;
    font-size: 32px;

    a {
        color: grey;

        &:hover {
            color: white;
        }
    }
`;

// Right Part
export const WrapperRightPart = styled.div`
    padding: 0 150px;
`;
export const WrapperTop = styled.div`
    flex-wrap: wrap;
`;
export const WrapperDown = styled.div``;
export const WrapperImage = styled.div`
    display: flex;
`;

export const WrapperImageUnit = styled.div`
    margin-right: 30px;
`;


// Button Burger Menu

export const ButtonBurger = styled.div`
     width: 42px;
     height: 24px;
     background-color: transparent;
     cursor: pointer;
     position: relative;
     margin-top: 30px;
`;

export const TopBar = styled.span`
    width: 60%;
    height: 2px;
    top: 1%;
    background-color: white;
    position: absolute;
    top: 0%;
    transform: translateY(-50%);
    border-radius: 4px;
`;

export const MiddleBar = styled.span`
    position: absolute;
    width: 52%;
    height: 2px;
    top: 50%;
    left: 40%;
    background-color: white;
    border-radius: 4px;
`;

export const DownBar = styled.span`
    width: 60%;
    height: 2px;
    top: 100%;
    background-color: white;
    position: absolute;
    border-radius: 4px;
`;