var push = require('web-push');

// this code is to generate vapids as we need to generate it once so we'll comment this and used geneated for future

//let vapidKeys= push.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BJfPHTQGHKhuTslWOjmFljv0HPjpW_vpZvQKsAbPA2fwU8IjWTVjprJx24ZkBNF2tcFu_fYqt49m3cqZa5Ffejc',
  privateKey: 'D80XxdSxTy0myMLq1NKFqZKgXxz8JgdJDb_4NrkN_98'
}


push.setVapidDetails('mailto:vinkesh85@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub ={"endpoint":
"https://fcm.googleapis.com/fcm/send/fq9jTVpUylk:APA91bHiTOPMEqkaZv8gXkDbUCcmALvx941mZryadqpR6mKCSxcy4-mriXN-CIfpAJOPEUaAj2Hi3fQwLqPABJCxx4dB1dXZi07JDJeQHsPSenv2Tv972u4PHfTKnO9XcFLJkWfN6K54",
"expirationTime":null,"keys":{"p256dh":"BNO-Y5T5ACwgCrXj0vYnCwxFBFJAok4fYdBKBiBRKiDDP0U_lT2VPnPhcRgsohx1-_vcFsPfAeo94AL4ioB63HQ","auth":"5jjAGuD1gTLFYKP5JRCMtA"}}

push.sendNotification(sub, 'test message')

