  console.log("WAITING for tngdJSBridgeReady in script");
  document.addEventListener("load", () => {
    console.log("page load completed!"); 
    console.log("tngdJSBridge is", window.tngdJSBridge);
  })
    document.addEventListener('tngdJSBridgeReady', () => {
      console.log("tng event received correctly from external script");
      console.log("attempting to call get auth code");
      window.tngdJSBridge.call(
        'getAuthCode',
        {
          scopes: ['BASE_USER_INFO'],
          clientId: "dummy-client-id",
          redirectUrl: "https://www.google.com",
          extRequestId: "some id",
          grantType: 'AUTHORIZATION_CODE'
        },
        ({ authCode, errorCode }) => {
          console.log("received from get auth code from external script", authCode, errorCode);
        }
      );
    });