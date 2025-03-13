if ('serviceWorker' in navigator) {
    console.log('Service Worker Supported');
    navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
            let serviceWorker;
            if (registration.installing) {
                serviceWorker = registration.installing;
                console.log('installing');
                document.querySelector("#sw").textContent = "installing";
            } else if (registration.waiting) {
                serviceWorker = registration.waiting;
                console.log('waiting');
                document.querySelector("#sw").textContent = "waiting";
            } else if (registration.active) {
                serviceWorker = registration.active;
                console.log('active');
                document.querySelector("#sw").textContent = "active";
            } else {
                console.log('unknown');
                document.querySelector("#sw").textContent = "unknown";

            }
            if (serviceWorker) {
                // logState(serviceWorker.state);
                serviceWorker.addEventListener("statechange", (e) => {
                    // logState(e.target.state);
                });
            }
        });
} else {
    console.log('Service Worker Not Supported');
}

globalThis.notifyMe = async function () {
    console.log('asking...');
    if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
        // if so, create a notification
        const notification = new Notification("Hi there!");
        // …
    } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        Notification.requestPermission().then((permission) => {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                const notification = new Notification("Hi there!");
                console.log('got it granted');
                // …
            } else {
                alert('not granted');
            }
        });
    } else {
        alert('just denied');
    }
}


console.log('main.js loaded again');
