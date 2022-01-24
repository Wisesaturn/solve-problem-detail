import React from 'react'
import { darkModeState } from '../state'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

const DarkMode_button = () => {
    const [check, setCheck] = useRecoilState(darkModeState)

    return (
        <>
            <DarkmodeButton>
                <label className="DarkMode_button">
                    <input type="checkbox" defaultChecked onClick={() => { setCheck(!check) }} />
                    <span className="Switch_row" />
                </label>
            </DarkmodeButton>
        </>
    )
}

const DarkmodeButton = styled.div`
// Darkmode CSS ----------------------
.DarkMode_button {
    position: relative;
    display: block;
    width: 3rem;
    height: 0.5rem;
    background-size: 1.2rem;

    input {
        opacity: 0;
        width: 0;
        height: 0;
        &:checked {
            & + .Switch_row {
                background-color: var(--darkMode-dark-bg);
                box-shadow: 0px 0px 2px var(--darkMode-dark-sh) inset;
                &:before {
                    background-image: url(resource/moon.png);
                    background-color: var(--darkMode-dark-toggle-bg);
                    box-shadow: none;
                    -webkit-transform: translateX(1.6rem);
                    -ms-transform: translateX(1.6rem);
                    transform: translateX(1.6rem);
                }
            }
        }
    }

    > .Switch_row {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: inherit;
        background-color: var(--darkMode-light-bg);
        box-shadow: 1px 1px 3px var(--darkMode-light-sh);
        border-radius: 20px;

        &:before {
            position: absolute;
            content: '';
            height: 2rem;
            width: 1.5rem;
            top: -13.5px;

            background-image: url(resource/sun.png);
            background-position: center;
            background-color: var(--darkMode-light-toggle-bg);
            background-repeat: no-repeat;

            border-radius: 10px;
            box-shadow: 1px 1px 3px var(--darkMode-light-sh);
        }
    }

    .Switch_row,
    .Switch_row:before,
    .input {
        -webkit-transition: 0.6s;
        transition: 0.6s;
    }
}
// Darkmode CSS Ended -------------

`

export default DarkMode_button