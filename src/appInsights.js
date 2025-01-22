// src/appInsights.js
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: process.env.REACT_APP_APPINSIGHTS_INSTRUMENTATION_KEY
  },
});

appInsights.loadAppInsights();

export default appInsights;
