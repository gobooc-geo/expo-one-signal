let Config = {
    apiUrl: "http://mdev.gobooc.com",
    enableHiddenFeatures: true,
    oneSignalAppId: "af3b408b-ba2b-4ac7-9f44-6367292eb90b",
  };
  
  if (process.env.APP_ENV === "production") {
    Config.apiUrl = "https://m.gobooc.com";
    Config.enableHiddenFeatures = false;
  } else if (process.env.APP_ENV === "staging") {
    Config.apiUrl = "http://mstaging.gobooc.com";
    Config.enableHiddenFeatures = true;
  } else if (process.env.APP_ENV === "development") {
    Config.apiUrl = "http://mdev.gobooc.com";
    Config.enableHiddenFeatures = true;
  }
  
  export default ({ config }) => {
    return Object.assign(config, {
      extra: {
        ...Config,
      },
    });
  };
  