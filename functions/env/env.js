export function onRequest(context) {
    return new Response(context.env.ENVIRONMENT);
	// if (context.env.ENVIRONMENT == 'production' || context.env.ENVIRONMENT == 'ENVIRONMENT') {
	// 	return new Response('production');
	// } else {
	// 	return new Response('This is a development environment');
	// }
}