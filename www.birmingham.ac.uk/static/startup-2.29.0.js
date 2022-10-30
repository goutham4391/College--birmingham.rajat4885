/* eslint-disable no-undef */

var context = typeof window != "undefined" ? window : global;

function noModules() {
  var s = document.createElement("script");
  return (
    !("noModule" in s) ||
    navigator.appVersion.indexOf("Edge") !== -1 ||
    navigator.appVersion.indexOf("AppleWebKit/604") !== -1
  );
}

function url() {
  var alias = "uob";
  var project = "website";
  var projectAndAlias =
    project && project != "website" ? project + "-" + alias : alias;
  return Object({
    api: "https://api-" + alias + ".cloud.contensis.com",
    cms: "https://cms-" + alias + ".cloud.contensis.com",
    previewWeb: "https://preview-" + projectAndAlias + ".cloud.contensis.com",
    liveWeb: "https://live-" + projectAndAlias + ".cloud.contensis.com",
    iisWeb: "https://iis-live-" + projectAndAlias + ".cloud.contensis.com",
    previewIis:
      "https://iis-preview-" + projectAndAlias + ".cloud.contensis.com",
  });
}

context.PUBLIC_URI = "birmingham.ac.uk";

context.SERVERS = Object({
  alias: "uob",
  internalVip: undefined,
  api: url().api,
  cms: url().cms,
  web: url().liveWeb,
  previewWeb: url().previewWeb,
  iis: url().iisWeb,
  previewIis: url().previewIis,
});

context.DELIVERY_API_CONFIG = Object({
  rootUrl: url().api,
  accessToken: "RaFb8JIEgAuWcJXfJSz2gLQMP29ljnptFuQQT52FGX0aSXto",
  projectId: "website",
  livePublishingRootUrl: url().previewWeb,
});

context.PROJECTS = Object([{"id":"website","publicUri":"birmingham.ac.uk"}]);

context.ALIAS = "uob";
context.PROJECT = "website";
context.ACCESS_TOKEN = "RaFb8JIEgAuWcJXfJSz2gLQMP29ljnptFuQQT52FGX0aSXto";
context.PUBLIC_URI = "birmingham.ac.uk";
context.PUBLIC_URL = "birmingham.ac.uk";


if (typeof window == "undefined") {
  // in a server context we need to set default
  // scripts and bundles, then start the server
  var utils = require("./startup.utils.js");
  utils.setDefaults(__filename, context.STATIC_PATH);
  if (process.argv.includes("-tests")) {
    require("../test.js");
  } else {
    require("../server.js");
  }
}
