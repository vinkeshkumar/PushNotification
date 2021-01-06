var push = require('web-push');

// this code is to generate vapids as we need to generate it once so we'll comment this and used geneated for future

//let vapidKeys= push.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BJfPHTQGHKhuTslWOjmFljv0HPjpW_vpZvQKsAbPA2fwU8IjWTVjprJx24ZkBNF2tcFu_fYqt49m3cqZa5Ffejc',
  privateKey: 'D80XxdSxTy0myMLq1NKFqZKgXxz8JgdJDb_4NrkN_98'
}


push.setVapidDetails('mailto:vinkesh85@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eSGCxyT6AXw:APA91bGGE3pWgSDjezM2jKHuY_HfebTIY7NQjoqhvQdRtfZyMRLBRwTYUdhBekPSdD6THg0eiMsEWRMO0CummInWCGWMmx0e3nhQU_PPsVLBW0UoP0zBtSWWaIT2rM3PO6gy8XCHz8zq",
  expirationTime: null,
  keys:
  {
    p256dh:
      "BCpYu5MgnfdbI3PHDE0t4ZW8CT4wYZcsMOSwMMiN409ftGv-w7N6V9vpnJpOp4gqMHVPLRa9NVsYSZAYfZhH53U",
    auth: "67GVn2azwkj8I_y7Z4Ijag"
  }
};

push.sendNotification(sub, 'test message')

