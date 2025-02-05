// src/appInsights.js
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

let appInsights = null;

if (process.env.REACT_APP_APPINSIGHTS_INSTRUMENTATION_KEY) {
  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: process.env.REACT_APP_APPINSIGHTS_INSTRUMENTATION_KEY
    },
  });

  appInsights.loadAppInsights();
}
export default appInsights;
