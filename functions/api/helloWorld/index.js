const { ApplicationInsights } = require("@microsoft/applicationinsights-web");

module.exports = async function (context, req) {
  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: process.env.APPINSIGHTS_INSTRUMENTATION_KEY
    }
  });

  appInsights.loadAppInsights();
  appInsights.trackEvent({ name: 'HelloWorldFunctionCalled' });

  context.res = {
    status: 200,
    body: "Hello World"
  };
};