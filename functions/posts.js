import Store from '../backend/posts_store';

// const Posts = async request => {
//     const posts = new Store();
//     const body = JSON.stringify(await posts.all());

//     const headers = {
//         'Access-Control-Allow-Origin': '*',
//         'Content-type': 'application/json',
//     };
//     return new Response(body, { headers });
// };

// export function onRequest(context) {
//     return new Response(JSON.stringify(context.params.user))
// }

export const onRequest = async (context) => {
    const posts = new Store();
    const body = JSON.stringify(await posts.all());
    let response = new Response(body)
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Content-type', 'application/json');
    // response.body.set(body)
    return response;
  };

