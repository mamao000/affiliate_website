"use client";
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

export const RegisterWrapper = styled.div`
    margin-top: 1rem;
    width: 100%;
`

export const RegisterLink = styled.a`
    border-radius: 4px;
    color: rgb(30, 159, 210);
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    text-decoration: none;
`;