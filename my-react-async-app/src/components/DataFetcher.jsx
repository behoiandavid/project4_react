import { useEffect, useState } from "react";
import axios from "axios";

function DataFetcher({ id }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setData(response.data);
            } catch (err) {
                setError("Помилка під час завантаження даних!");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]); 

    if (loading) return <p>Завантаження даних...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;

    return (
        <div>
            <h2>Пост #{data.id}</h2>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    );
}

export default DataFetcher;