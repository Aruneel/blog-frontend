export async function onRequest(context) {
    const task = await context.env.KV_TODO_LIST.get("Task:123");
    console.log("task", task)
    return new Response(task);
}