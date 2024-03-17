import styled from 'styled-components';

export const Profile = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    /* height: 300px; */
  }

  @media screen and (max-width: 550px) {
    height: 200px;
    width: 200px;
    align-items: center;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -10px 140px;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transition: 0ms.5s;
    animation: animate 10s linear infinite;
  }

  &:hover::before {
    inset: -20px 0px;
  }

  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
      transform: rotate(360deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 5px;
    background: #162016;
    border-radius: 50%;
    z-index: 1;
  }
`;
export const Content = styled.div`
    position: absolute;
    inset: 5px;
    border: 6px solid #070a1c;
    z-index: 3;
    border-radius: 50%;

    img {
    position: absolute;
    top: 0;
    left: 0px;
    /* transform: scaleX(-1); */
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: 0ms.5s;
    pointer-events: none;

    &:hover{
        transform: scale(1.2);
    }
  }
`;

