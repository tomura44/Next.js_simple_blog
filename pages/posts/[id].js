import Layout from "../../components/Layout";
import { getAllPostsIds, getPostsData } from "../../lib/post";

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
export function getStaticProps({params}){
    const postData = getPostsData(params.id)

    return{
        props: {
            postData,
        },
    };
}

export default function Post() {
    return (
    <Layout>
        {postData.title}
        <br />
        {postData.date}
        <br />
        {postData.blogContentHTML}
    </Layout>
    )
}