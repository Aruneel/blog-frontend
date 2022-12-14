export function onRequest(context) {
	if (context.env.ENVIRONMENT == 'production' || context.env.ENVIRONMENT == 'ENVIRONMENT') {
		return new Response('production');
	} else {
		return new Response('This is a development environment');
	}
}