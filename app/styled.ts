import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  max-width: 1200px;
  margin: 1em auto;
  padding: 0 1em;
`;

export const LoadingWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
`;

export const LoadingImage = styled(Image)`
  width: 75px;
`;
