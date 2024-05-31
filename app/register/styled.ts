import styled from "styled-components";
import { BREAKPOINT } from "@/constants";

export const FormWrapper = styled.div`
    padding: 50px 20px;
    margin: 20px auto;
    max-width: 750px;
    border-radius: 10px;
    border: 1px solid #ccc;

    @media ${BREAKPOINT.MOBILE} {
        margin: 20px;
    }
`;