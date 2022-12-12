import Store from '../backend/posts_store';

export async function onRequest(context) {
    // return new Response(JSON.stringify(context.params.user))
    const posts = new Store();
    const postId = request.params.id;

    const body = JSON.stringify(await posts.find(postId));
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
    };
    return new Response(body, { headers });
}

