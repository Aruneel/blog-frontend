import React, { useEffect, useState } from 'react';

const TodoList = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {

            const resp = await fetch('https://blog-frontend-b4d.pages.dev/kv/todoList');
            const postsResp = await resp.json();
            setList([postsResp]);
        };

        getPosts();
    }, []);


    return (
        <div>
            <h1>Posts</h1>
            {list.map(task => (
                <div key={task}>
                    <h2>
                        <span>{task}</span>
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
