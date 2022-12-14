export function onRequest(context) {
	if (context.env.ENVIRONMENT === 'production') {
		return new Response('production');
	} else {
		return new Response('This is a development environment');
	}
}