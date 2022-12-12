import Store from '../../backend/posts_store';

export const onRequest = async (context) => {
    const posts = new Store();
    const body = JSON.stringify(await posts.all());
   
    let response = new Response(body)
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Content-type', 'application/json');
    return response;
};
