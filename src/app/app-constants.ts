let Cognito = {
   userPoolId: "us-east-2_RgHEA6K8Z",
   clientId: "5gtlc3tvnk98ot9fja5mfohvp8",
   domain: "auth.mauridev.net",
   redirectUrl: "https://flip.mauridev.net",
   logoutUrl: "https://flip.mauridev.net"
}

let API = {
   sessionGetToken: "sessionGetToken",
   sessionRefreshToken: "sessionRefreshToken"
}

export { Cognito, API }