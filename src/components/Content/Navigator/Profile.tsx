import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { Link_Email, Link_Github } from '../../state'
import React from 'react'
import styled from 'styled-components'

const Profile = () => {
     return (
        <ProfileWrap>
            <PictureArea />
            <ContentArea>
                <p id="title">송재한</p>
                <p id="content">재한쓰의 공부용 블로그 😃</p>
                <NaviLinkArea>
                    <a href={Link_Github}><AiFillGithub size="28" /></a>
                    <a href={Link_Email}><AiOutlineMail size="28" /></a>
                </NaviLinkArea>
            </ContentArea>
        </ProfileWrap>

    )
}

const ProfileWrap = styled.div`
    // 프로필 전체 영역
    display : block;
    background-color : var(--profile-bg);
    width : 18vw;
    height : 22rem;
    font-weight : bold;
    box-shadow : 0px 1px 3px 1px var(--submenu-shadow);

    // 반응형 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @media only screen and (min-width:1440px) {
        height: 25rem;
    }
    @media only screen and (min-width:768px) and (max-width:1024px) {
        height : 18rem;
    }
`

const PictureArea = styled.div`
    // Navigator 프로필 사진 영역
    position : relative;
    display : inherit;
    width : 15vw;
    height : 15vw;
    margin : 0 1.5vw;
    
    background-color : none;
    background-image : url(/resource/Profile-zepeto.png);
    background-position : center;
    background-size : 15vw;
    background-color : var(--profile-picture-bg);
    background-repeat : no-repeat;
    border-radius : 8vw;
    box-shadow : 0px 1px 3px 2px var(--profile-picture-shadow);

    transition: .6s; -webkit-transition : .6s; -mos-transition : .6s;
`

const ContentArea = styled.div`
    // Navigator 프로필 내용 영역
    position : relative;
    display : block;
    padding-top : 1rem;

    > p {
        padding : .5rem 1.5rem;

        &#title { 
            font-size : 1.2rem; 
        };
        &#content {font-size : .8rem; };
    }

    // 반응형 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @media only screen and (min-width : 768px) and (max-width : 1024px) {
        padding-top : 1.5rem;
        > p {
            padding : .5rem 1.2rem;

            &#title {
                font-size : 1rem;
            }
            &#content {
                font-size : .7rem;
            }
        }
    }
`

const NaviLinkArea = styled.div`
    // Navigator 프로필 내용 영역 중 Link 영역
    display : block;
    padding : .5rem 1.5rem;
    > a { 
        margin-right : .5rem;
        text-decoration : none;
        color : inherit;
        &:hover { color : var(--normal-after);}
        &:active { color : var(--normal-active);}
    }
`

export default Profile
