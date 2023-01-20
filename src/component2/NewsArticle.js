const NewsArticle = ({item}) => {

    const {url, urlToImage, title, author, description, publishedAt} = item;


    return (
        <li>
         
             <a href={url}>
                <img src={urlToImage} alt={title}/>
                <div>
                    <p>{author}</p>
                    <p>{publishedAt}</p>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
            </a>
    
        </li>
    )
}

export default NewsArticle;