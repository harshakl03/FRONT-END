import styled, { keyframes } from 'styled-components';

const strokeAnimation = keyframes`
    52% {
        transform: rotate(-180deg);
        stroke-dashoffset: 0;
    }
    52.1% {
        transform: rotate(-360deg);
        stroke-dashoffset: 0;
    }
    100% {
        transform: rotate(-180deg);
        stroke-dashoffset: 126;
    }
`;

const arrowAnimation = keyframes`
    0%, 100% {
        transform: translateX(0);
        opacity: 1;
    }
    23% {
        transform: translateX(17px);
        opacity: 1;
    }
    24%, 80% {
        transform: translateX(-22px);
        opacity: 0;
    }
    81% {
        opacity: 1;
        transform: translateX(-22px);
    }
`;

const arrowUpAnimation = keyframes`
    0%, 100% {
        transform: rotate(-40deg) scaleX(1);
    }
    20%, 80% {
        transform: rotate(0deg) scaleX(.1);
    }
`;

const arrowDownAnimation = keyframes`
    0%, 100% {
        transform: rotate(40deg) scaleX(1);
    }
    20%, 80% {
        transform: rotate(0deg) scaleX(.1);
    }
`;

const Arrow = styled.div`
    --active: #fff;
    --border: rgba(255, 255, 255, .12);
    display: block;
    position: relative;
    width: 44px;
    height: 44px;
    &.left {
        transform: scaleX(-1);
    }
    i {
        display: block;
        position: absolute;
        margin: -10px 0 0 -10px;
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        &:before,
        &:after {
            content: '';
            width: 10px;
            height: 2px;
            border-radius: 1px;
            position: absolute;
            left: 50%;
            top: 50%;
            background: var(--active);
            margin: -1px 0 0 -5px;
            display: block;
            transform-origin: 9px 50%;
        }
        &:before {
            transform: rotate(-40deg);
            animation: ${arrowUpAnimation} 1.6s ease forwards;
        }
        &:after {
            transform: rotate(40deg);
            animation: ${arrowDownAnimation} 1.6s ease forwards;
        }
    }
    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        border-radius: 50%;
        border: 2px solid var(--border);
    }
    svg {
        width: 44px;
        height: 44px;
        display: block;
        position: relative;
        z-index: 1;
        color: var(--active);
        stroke-width: 2px;
        stroke-dashoffset: 126;
        stroke-dasharray: 126 126 0;
        transform: rotate(0deg);
        animation: ${strokeAnimation} 1s ease forwards .3s;
    }
    &.animate {
        svg {
            animation: ${strokeAnimation} 1s ease forwards .3s;
        }
        i {
            animation: ${arrowAnimation} 1.6s ease forwards;
        }
    }
`;

const DemoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 44px);
    grid-gap: 32px;
`;

const Body = styled.body`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #275EFE;
`;

const Dribbble = styled.div`
    position: fixed;
    display: block;
    right: 24px;
    bottom: 24px;
    img {
        display: block;
        width: 76px;
    }
`;

export { Arrow, DemoContainer, Body, Dribbble };