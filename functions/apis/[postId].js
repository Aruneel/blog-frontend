import Store from '../../backend/posts_store';

// const Post = async request => {
//     const posts = new Store();
//     const postId = request.params.id;

//     const body = JSON.stringify(await posts.find(postId));
//     const headers = {
//         'Access-Control-Allow-Origin': '*',
//         'Content-type': 'application/json',
//     };
//     return new Response(body, { headers });
// };


export const onRequest = async (context) => {
    const posts = new Store();
    const postId = context.params.postId;

    const body = JSON.stringify(await posts.find(postId));
   
    let response = new Response(body)
    // response.headers.set('Access-Control-Allow-Origin', '*');
    // response.headers.set('Content-type', 'application/json');
    return response;
};
