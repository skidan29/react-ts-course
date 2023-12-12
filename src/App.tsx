import React, {useMemo, useState} from 'react';
import Product from "./components/product";

interface Post {
    id: number,
    title: string,
    body: string,
    userId: number,
}

function App() {
    const [posts, setPosts] = useState([]);

    useMemo(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setPosts(json)
            });
    }, []);

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <Product/>
        </div>
    );

}

export default App;
