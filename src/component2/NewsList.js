import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";

import styled from "./NewsList.module.css";

const NewsList = () => {

    //1.API 데이터 가져오기
    //

    //5. 라우터로 들어오는 값에 처리
    const {category} = useParams();

    //category가 없거나 undefined이면 all로 할당
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`;
    console.log(query);

    //2. useEffect 에서 화면 로딩시 데이터 처리

    const [data,setData] = useState(); 

    useEffect( () =>{

        (async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7b2d2f590b234c409143378397d60498`;
            console.log(url);
            
            let {data:{articles}} = await axios.get(url);
            console.log(articles);
            setData(articles);
            setLoading(true); //로딩완료
        })();
        
    }, [query]) //6.변화가 일어날때 마다 재실행할 함수

    // console.log(data);
    
    //3. 데이터 로딩 처리 (데이터가 오기전에 state는 undefined)
    const [loading,setLoading] = useState(false);

    if(loading === false){
        return <div>로딩중</div>
    }


    //4.li태그를 컴포넌트로 변경
    return (
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    /* 1.url, urlToImage, title, author, description, publishedAt */
                    data.map( (item, index) => <NewsArticle key={index+1} item={item}/> )
                }
            </ul>
        </div>
    )
}

export default NewsList;