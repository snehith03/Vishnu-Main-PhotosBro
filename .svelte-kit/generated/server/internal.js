
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\" />\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\" />\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\" />\n\t<link rel=\"manifest\" href=\"/site.webmanifest\" />\n\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t<title>PhotosBro</title>\n\t<meta name=\"description\"\n\t\tcontent=\"Create personalized avatars with PhotosBro's SaaS service using stable diffusion and AI. Generate up to 100 profile pictures with different themes.\" />\n\t<meta name=\"keywords\"\n\t\tcontent=\"PhotosBro, SaaS service, stable diffusion, Profile pictures, Avatar, Artificial Intelligence, AI model, midjourney, openai, personalized profile pictures, themes\" />\n\t<meta name=\"author\" content=\"Pavanello Emanuele\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t<meta property=\"og:title\" content=\"PhotosBro\" />\n\t<meta property=\"og:description\"\n\t\tcontent=\"Create personalized avatars with PhotosBro's SaaS service using stable diffusion and AI. Generate up to 100 profile pictures with different themes.\" />\n\n\t<!-- Twitter Card data -->\n\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\n\t<meta name=\"twitter:site\" content=\"https://twitter.com/avatarify_ai\" />\n\t<meta name=\"twitter:title\" content=\"Photos Bro\" />\n\t<meta name=\"twitter:description\"\n\t\tcontent=\"Create personalized avatars with PhotosBro's SaaS service using stable diffusion and AI. Generate up to 100 profile pictures with different themes.\" />\n\t<meta name=\"twitter:creator\" content=\"@avatarify_ai\" />\n\t<meta name=\"twitter:image\" content=\"https://photosbro.com/og.jpg\" />\n\t<!-- Open Graph data -->\n\t<meta property=\"og:title\" content=\"PhotosBro\" />\n\t<meta property=\"og:type\" content=\"website\" />\n\t<meta property=\"og:url\" content=\"https://photosbro.com\" />\n\t<meta property=\"og:image\" content=\"https://photosbro.com/og.jpg\" />\n\t<meta property=\"og:site_name\" content=\"PhotosBro\" />\n\n\t<link rel=\"stylesheet\"\n\t\thref=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\" />\n\t" + head + "\n\t<script defer data-domain=\"photosbro.com\" src=\"https://plausible.io/js/script.js\"></script>\n\t<!-- Google tag (gtag.js) - Google Analytics -->\n\t<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-RMXZ68965K\">\n\t</script>\n\t<script>\n\t\twindow.dataLayer = window.dataLayer || [];\n\t\tfunction gtag() { dataLayer.push(arguments); }\n\t\tgtag('js', new Date());\n\n\t\tgtag('config', 'G-RMXZ68965K');\n\t</script>\n\t<script type=\"text/javascript\">\n\t\t(function (c, l, a, r, i, t, y) {\n\t\t\tc[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };\n\t\t\tt = l.createElement(r); t.async = 1; t.src = \"https://www.clarity.ms/tag/\" + i;\n\t\t\ty = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);\n\t\t})(window, document, \"clarity\", \"script\", \"fsokxp5ptb\");\n\t</script>\n\t<script src=\"https://cdn.jsdelivr.net/npm/cookies-eu-banner@2.0.1/dist/cookies-eu-banner.min.js\"></script>\n\t<link href=\"https://cdn.jsdelivr.net/npm/cookies-eu-banner@2.0.1/css/cookies-eu-banner.default.min.css\"\n\t\trel=\"stylesheet\">\n</head>\n\n<body data-sveltekit-preload-data=\"hover\">\n\t<div id=\"cookies-eu-banner\" style=\"display: none;\">\n\t\tBy continuing to visit this site, you accept the use of cookies for statistical purposes.\n\t\t<button id=\"cookies-eu-reject\">Reject</button>\n\t\t<button id=\"cookies-eu-accept\">Accept</button>\n\t</div>\n\t<div style=\"display: contents\">" + body + "</div>\n\t<script>\n\t\tnew CookiesEuBanner(function () {\n\t\t\twindow.clarity('consent');\n\t\t}, true);\n\t</script>\n</body>\n\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1mtfdg"
};

export function get_hooks() {
	return import("../../../src/hooks.server.ts");
}

export { set_assets, set_building, set_private_env, set_public_env };
