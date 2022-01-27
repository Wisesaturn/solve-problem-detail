import { MDLoader_Path, MDLoader_PostData } from '../../../../components/MdLoader'
import Date from '../../../../components/Date'
import React from 'react'

const Posts = ({ postData }) => {
    return (
        <>
            {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} /> 
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
        </>
    )
}

export const getStaticPaths = async () => {
    const paths = MDLoader_Path()

    return {
        paths,
        fallback : false,
        // fallback이 false라면 이 함수 안에서 반환되지 않은 path는 404 페이지를 반환한다.
    }
}

export const getStaticProps = async ({ params }) => {
    const postData = await MDLoader_PostData(params.id)
    
    return {
        props: {
            postData,
        },
    }
}

export default Posts
