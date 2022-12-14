import React, { useEffect, useState } from 'react';

const TodoList = (props) => {
    const [list, setList] = useState("");

    useEffect(() => {
        const getPosts = async () => {
            // const params = {
            //     method: "GET",
            //     headers: {
            //         'Access-Control-Allow-Origin': '*'
            //     }
            // };
            // const request = new Request('https://blog-frontend-b4d.pages.dev/kv/todoList', params);
            // const response = await fetch(request);
            // console.log("response", response)
            // const postResp = await response.json();
            // console.log("postResp", postResp)
            const resp = await fetch('https://blog-frontend-b4d.pages.dev/kv/todoList');
            const postsResp = await resp.json();
            setList(postsResp);
        };

        getPosts();
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
