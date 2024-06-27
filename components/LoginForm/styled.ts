import styled from "styled-components";
import Button from "react-bootstrap/Button";
// Explicitly defining props for styled-components can sometimes help with type complexity
interface SubmitButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {}

export const ValidateMessage = styled.div`
    display: flex;
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;
    color: rgb(244, 81, 30);
    align-items: center;
`;

export const ValidateWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const SubmitButton = styled(Button)<SubmitButtonProps>`
    width: 100%;
    background-color: rgb(30, 159, 210);
    border: none;
`;
