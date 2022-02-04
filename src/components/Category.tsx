import Date from '../components/Date'
import Link from 'next/Link'
import styled from 'styled-components'

interface Cate_type {
    Data : {
        id : string, 
        date : string, 
        title : string,
        categories : string,
        detail ? : string,
    }
    whatPage : string
}

const Category = ({ Data, whatPage } : Cate_type) => {
    return (
        <Link href={`/posts/${whatPage}/${Data.id}`} as={`/posts/${whatPage}/${Data.id}`}>
            <CateWrap>
                <li key={Data.id}>
                    <div className="sub">
                        <h3> {Data.title} </h3> <Date dateString={Data.date} theme="category" />
                    </div>
                    <span>{Data.detail}</span>
                </li>
            </CateWrap>
        </Link>
    )
}

const CateWrap = styled.div`
    display : block;
    padding : .2rem 1.2rem;

    li { // 목록 전체
        padding : 1rem 1rem;
        margin-bottom : .2rem;
        height : 7rem;
        border-bottom : 1px solid var(--bottom-line);

        span { // 목록의 설명 영역
            display : -webkit-box;
            padding : .7rem .2rem .1rem;
            text-align : justify;
            overflow: hidden;  
            text-overflow: ellipsis;  
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        > .sub { // 목록의 제목 영역
            display : flex;
            align-items : center;
            justify-content : space-between;

                h3 { // 목록의 제목
                    font-size: 1.4rem;
                    font-size : bold;
                }
        }

        &:hover {
            cursor : pointer;
            text-shadow : 3px 4px 3px var(--category-bg);
            background-color : var(--category-hover);
        }
    }
`

export default Category