"use strict";
console.log('Hello, service worker!');
let sw = self;
sw.registration.showNotification('Hello, world! from service');
console.log('Notification sent!');
//# sourceMappingURL=service.js.map