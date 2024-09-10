import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return;
	}

	const packageJson = await import("../package.json");
	const { worker } = await import("./mocks/browser");

	// `worker.start()` returns a Promise that resolves
	// once the Service Worker is up and ready to intercept requests.
	let workerService = worker.start({
		serviceWorker: {
			// Provide a custom worker script URL, taking
			// the "homepage" into account.
			url: `${packageJson.homepage}/mockServiceWorker.js`,
		},
	});
	console.log(worker.listHandlers());
	return workerService;
}

enableMocking().then(() => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

