import styled from "styled-components";
import { neutralColor1, 
         grayColor1, 
         blueColor1, 
         greenColor1, 
         redColor1 
        } from '../../styles/colors';

export const Container = styled.div`
    background-color: ${neutralColor1};
    box-shadow: 0px 0px 5px ${grayColor1};
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${blueColor1};
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${blueColor1};
    border-radius: 5px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

export const BaseButton = styled.button`
    width: 40%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${grayColor1};
    border-radius: 5px;
    background-color: ${neutralColor1};
    cursor: pointer;
`;

export const PrimaryButton = styled(BaseButton)`
    color: ${greenColor1};

    &:hover {
        background-color: ${greenColor1};
        color: ${neutralColor1};
    }
`;

export const CancelButton = styled(BaseButton)`
    color: ${redColor1};

    &:hover {
        background-color: ${redColor1};
        color: ${neutralColor1};
    }
`;
