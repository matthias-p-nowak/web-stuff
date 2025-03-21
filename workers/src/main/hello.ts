console.log('Hello, world!');

console.log('asking...');
if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
} else if (Notification.permission === "granted") {
    console.log('all clear');
    const notification = new Notification("Hi there notifications granted!");
    // …
} else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
            const notification = new Notification("Hi there from hello!");
            console.log('got it granted');
            // …
        } else {
            alert('not granted');
        }
    });
} else {
    alert('just denied');
}

navigator.serviceWorker.register('dist/service-worker/service.js')
console.log('Service worker registered!');
navigator.serviceWorker.ready.then(() => {
    console.log('Service worker ready!');
    navigator.serviceWorker.controller?.postMessage('Hello, service worker!');
});

