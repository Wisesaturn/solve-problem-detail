import React from 'react';
import Menu from './Menu';
import '../../css/Header.scss';
import { HiOutlineViewList } from 'react-icons/hi';
import { Sitebar_state, Home } from '../state';
import { useRecoilState } from 'recoil';

function Header() {
    const [push, setPush] = useRecoilState(Sitebar_state);

    const Sitebar_button = () => {
        setPush(!push); // 'Sitebar_button' 함수가 다 끝나고 작동
    }

    const Sitebar = () => {
        return (
            <div className="Sitebar">
                <HiOutlineViewList
                    size="34"
                    onClick={Sitebar_button} />
            </div>
        );
    }

    return (
        <div className="Header">
            <Sitebar />
            <a href={Home}>재한쓰 풀이 모음집</a>
            <Menu />
        </div>
    );
}

export default Header;