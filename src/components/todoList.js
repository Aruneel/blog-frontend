import React, { useEffect, useState } from 'react';

const TodoList = (props) => {
    const [list, setList] = useState("");

    useEffect(() => {
        const getEnv = async () => {
            const resp = await fetch('https://blog-frontend-b4d.pages.dev/env/env');
            console.log("resp", resp)
            const env = await resp.text();
            console.log("env", env)
            if(env == "production") {
                const getPosts = async () => {
                    const response = await fetch('https://blog-frontend-b4d.pages.dev/kv/todoList');
                    const postsResp = await response.json();
                    setList(postsResp);
                };
        
                getPosts();
            }
        };
        getEnv();

       
    }, []);


    return (
        <div>
            <h1>List</h1>
            <span>{list.task}</span>
            {/* {list.map(task => (
                <div key={task}>
                    <h2>
                        <span>{task}</span>
                    </h2>
                </div>
            ))} */}
        </div>
    );
};

export default TodoList;
