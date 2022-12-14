export async function onRequest(context) {
    const value = await context.env.KV_TODO_LIST.get("Task:123");
    console.log("task", task)
    if (value === null) {
        return new Response("Value not found", { status: 404 });
      }
    
    return new Response(value);
    // let response = new Response(task)
    // response.headers.set('Access-Control-Allow-Origin', '*');
    // response.headers.set('Content-type', 'application/json');
    // return response;
}