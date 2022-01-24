import { AiFillHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { atom } from 'recoil'

const ModalMessage = atom({
    key: 'ModalMessage',
    default: '기본 메세지 입니다. 😁',
})

const SitebarState = atom({
    key: 'Sitebar_state',
    default: false,
})

const darkModeState = atom({
    key: 'darkMode_state',
    default: true,
})

const stuffMenu = [
    {
        key: 'Home',
        icon: <AiFillHome />,
    },
    {
        key: 'Search',
        icon: <BsSearch />,
    },
]

const subMenu = [
    [
        {
            title: '서브메뉴 1',
            path: '/',
            icon: '',
        },
        {
            title: '서브메뉴 2',
            path: '/',
            icon: '',
        },
        {
            title: '서브메뉴 3',
            path: '/',
            icon: '',
        },
    ],
    [
        {
            title: '서브메뉴 4',
            path: '/',
            icon: '',
        },
        {
            title: '서브메뉴 5',
            path: '/',
            icon: '',
        },
        {
            title: '서브메뉴 6',
            path: '/',
            icon: '',
        },
    ],
    [
        {
            title: '서브메뉴 7',
            path: '/',
            icon: '',
        },
        {
            title: '서브메뉴 8',
            path: '/',
            icon: '',
        },
        {
            title: '서브메뉴 9',
            path: '/',
            icon: '',
        },
    ],
]

const subMenuFocus = atom({
    key: 'subMenu_focus',
    default: 0,
})

const searchActive = atom({
    key: 'search_active',
    default: false,
})

const Home = 'http://wisesaturn.github.io/study-blog'
const Link_Github = 'https://github.com/Wisesaturn'
const Link_Naver = 'https://blog.naver.com/rfv1479'
const Link_Instagram = 'https://www.instagram.com/songjh_97/'
const Link_Email = 'rfv1479@gmail.com'

export { Home, searchActive, ModalMessage, SitebarState, darkModeState, subMenuFocus, subMenu, stuffMenu }
export { Link_Github, Link_Naver, Link_Instagram, Link_Email }