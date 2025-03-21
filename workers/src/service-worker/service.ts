console.log('Hello, service worker!');


let sw= <ServiceWorkerGlobalScope> <unknown>self ;
sw.registration.showNotification('Hello, world! from service');
console.log('Notification sent!');