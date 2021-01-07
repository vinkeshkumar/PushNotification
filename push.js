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
"https://sg2p.notify.windows.com/w/?token=BQYAAACcUYcDnm5OAdO7mdtHhKu3Xi0ousC1EzhdwAGm%2bZZG41zcD7Sg8OZKO6cs37BYpkv%2fxLYYyLK6mG3cPu9l9iUUngf3Wy7NOgW37O5ulycZZjvjZDeexngYXk%2fMoMmeqEq9WWt%2fq7yKLewghFLV1THGDyIzRbaVyjYl6cn6m%2bo1R%2fFOv26yag7FWZvabjtQpNoDLoFoGoZjQBDP24RwWL9zb%2fwIePM1IXqhgi8zHo%2bfYarzANZ2cH9RystIR85SNedI7I5nQa9wvfnVGkmkUS5y4Wfx%2fuGiG7jkYvI%2f4voaWN3jO68jIEaORbcVRjaqGEitFwaDPbEFx%2bhWp4S1TsAmeYvQFpDL7O7fPOak4RznuQ%3d%3d",
"expirationTime":null,"keys":{"p256dh":"BJCVbC77VKLxMDJ8D65L3fGKJ0R0RdksoaEsv_hQGVIbYMdHWGbqc0ZSQeshtnWA58jLOJSfO1tM2oaaUkRcG-4","auth":"M9k1bIhiNG-aLc63sUlIeQ"}}
push.sendNotification(sub, 'test message')

