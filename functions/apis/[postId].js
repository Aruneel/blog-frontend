import Store from '../../db/posts_store';

export const onRequest = async (context) => {
    const posts = new Store();
    const postId = context.params.postId;

    const body = JSON.stringify(await posts.find(postId));
   
    let response = new Response(body)
    // response.headers.set('Access-Control-Allow-Origin', '*');
    // response.headers.set('Content-type', 'application/json');
    return response;
};
