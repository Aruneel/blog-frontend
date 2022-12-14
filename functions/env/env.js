export function onRequest(context) {
    let envVar = context.env.ENVIRONMENT
    return new Response(envVar);
	if (envVar == 'production') {
		return new Response("production");
	} else {
		return new Response("development");
	}
}