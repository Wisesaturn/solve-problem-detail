import { BsSearch } from 'react-icons/bs'
import React from 'react'
import { searchActive } from '../../state'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

const Navigator_Stuff = () => {
    const [active, setActive] = useRecoilState(searchActive)
    const Click = () => { setActive(!active) }

    return (
        <StuffWrap onClick={Click}>
            <BsSearch />
        </StuffWrap>
    )
}

const StuffWrap = styled.div`
    position : relative;
    left : 0;
    width : 4rem;
    height : 3rem;
    margin-bottom : 1rem;
    background-color : var(--stuff-bg);
    border-radius : 5px;
    box-shadow : 1px 3px 2px 1px var(--stuff-shadow);
    animation : Stuff_hover_before .3s ease-out forwards;

    svg {
        display : block;
        width : 1.8rem;
        height : 1.8rem;
        padding : .6rem;
    }

    &:hover {
        animation : Stuff_hover .3s ease-out forwards;
        cursor : pointer;
    }

    &:active {
        animation : Stuff_hover_active ease-out forwards;
    }

    // 반응형 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @media only screen and (max-width : 768px) {
        // 모바일 ~ 태블릿
        z-index : 1000;
        left : 0;
        top : 0;
        animation : none;

        width : 10vw;
        height : 10vw;
        svg {
            width : 5vw;
            height : 5vw;
            padding : 2.5vw;
        }

        &:hover {
            animation : Stuff_mobile_hover .6s ease-out forwards;
        }

        
        &:active {
            animation : Stuff_mobile_active .3s ease-out forwards;
        }
    }

    @media only screen and (max-width : 425px) {
        // 모바일
        width : 13vw;
        height : 13vw;
        svg {
            width : 7vw;
            height : 7vw;
            padding : 3vw;
        }
    }
`

export default Navigator_Stuff
