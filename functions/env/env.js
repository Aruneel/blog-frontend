export function onRequest(context) {
    let envVar = context.env.ENVIRONMENT
	if (envVar == 'production' || envVar == 'ENVIRONMENT') {
		return new Response({"id": 1, "env": "production" });
	} else {
		return new Response({"id": 1, "env": "development" });
	}
}