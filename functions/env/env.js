export function onRequest(context) {
    let envVar = context.env.ENVIRONMENT
	if (envVar == 'production') {
		return new Response("production");
	} else {
		return new Response("development");
	}
}