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
const _posts = [
    {
        id: 1,
        title: 'My first blog post',
        text: 'Hello world! This is my first blog post on my new Cloudflare Workers + Pages blog.',
        published_at: new Date('2020-10-23'),
    },
    {
        id: 2,
        title: 'Updating my blog',
        text: "It's my second blog post! I'm still writing and publishing using Cloudflare Workers + Pages :)",
        published_at: new Date('2020-10-26'),
    },
];

// export const onRequest = async (context) => {
//     // const posts = new Store();
//     // const body = JSON.stringify(await posts.all());
//     // let response = new Response(body)
//     // response.headers.set('Access-Control-Allow-Origin', '*');
//     // response.headers.set('Content-type', 'application/json');
//     // // response.body.set(body)
//     // return response;
//     const body = JSON.stringify(_posts);
//     return new Response(body)
//   };

export const onRequest = async (context) => {
    return new Response("Hello, world!")
};
