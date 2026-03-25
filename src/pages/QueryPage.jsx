import { useSearchParams } from 'react-router-dom';

const  QueryPage = () => {
    const [searchParams] = useSearchParams();

    // URL: /search?query=react&page=2
    const query = searchParams.get('query')
    const page  = searchParams.get('page')

    return (
        <div>
        <h1>Results for: {query}</h1>
        <p>Page: {page}</p>
        </div>
    )
}

export default QueryPage