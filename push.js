var push=require('web-push');

// this code is to generate vapids as we need to generate it once so we'll comment this and used geneated for future

                        //let vapidKeys= push.generateVAPIDKeys();
                        //console.log(vapidKeys);

let vapidKeys= {
    publicKey: 'BJfPHTQGHKhuTslWOjmFljv0HPjpW_vpZvQKsAbPA2fwU8IjWTVjprJx24ZkBNF2tcFu_fYqt49m3cqZa5Ffejc',
    privateKey: 'D80XxdSxTy0myMLq1NKFqZKgXxz8JgdJDb_4NrkN_98'
  }


  push.setVapidDetails('mailto:vinkesh85@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

  let sub={};

  push.sendNotification(sub,'test message')

