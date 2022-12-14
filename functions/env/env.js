export function onRequest(context) {
    let envVar = context.env.ENVIRONMENT
	if (envVar == 'production' || envVar == 'ENVIRONMENT') {
		return new Response("production");
	} else {
		return new Response("development");
	}
}