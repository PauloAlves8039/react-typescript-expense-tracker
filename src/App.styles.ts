import styled from "styled-components";
import { purpleColor1, neutralColor1 } from "./styles/colors";

export const Container = styled.div``;

export const Header = styled.div`
    background-color: ${purpleColor1};
    height: 150px;
    text-align: center;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: ${neutralColor1};
    padding-top: 30px;
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`;