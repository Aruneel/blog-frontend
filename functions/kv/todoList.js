export async function onRequest(context) {
    const task = JSON.stringify(await context.env.KV_TODO_LIST.get("Task:123"));
    console.log("task", task)
    let response = new Response(task)
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
}