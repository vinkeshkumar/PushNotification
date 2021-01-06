var push=require('web-push');

// this code is to generate vapids as we need to generate it once so we'll comment this and used geneated for future

                        //let vapidKeys= push.generateVAPIDKeys();
                        //console.log(vapidKeys);

let vapidKeys= {
    publicKey: 'BJfPHTQGHKhuTslWOjmFljv0HPjpW_vpZvQKsAbPA2fwU8IjWTVjprJx24ZkBNF2tcFu_fYqt49m3cqZa5Ffejc',
    privateKey: 'D80XxdSxTy0myMLq1NKFqZKgXxz8JgdJDb_4NrkN_98'
  }


  push.setVapidDetails('mailto:vinkesh85@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

  let sub={    
  endpoint:
  'https://fcm.googleapis.com/fcm/send/d9aMjOXnI4s:APA91bGtmaEnMc3mKFzVzN6xvatp-pQ-xFzHu_SZ8QeXnrqX6zLNseWoWJp3-AvbczRUt9g2pFqcW8C-hz9Ac4PhB9aTW23ydHTs3klY-wbTJW4zFn68aSfudButjx1XaQGqx59a0tHy',
  expirationTime: null,
  keys: {
    p256dh:
    'BASHea4bi2P0nmC-ynZV0mAGIB4Smh1EDmphzQBzTXZq1s_jKnz25Wo7TGEYEytr_naTa4B9-XsppeFCc_Xh3a8',
    auth: 'A8fvK4paiG13RP5cdIBLcQ'
  }}

  push.sendNotification(sub,'test message')

