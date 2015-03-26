Package.describe({
  name:    "meteortoys:allthings",
  summary: "Insanely handy development tools for Meteor",
  version: "1.0.0",
  git:     "https://github.com/MeteorToys/allthings.git",
  documentation: "README.md",
  debugOnly: true
});

Package.onUse(function(api) {

  api.use("msavin:mongol@1.0.8"); 
  api.use("msavin:jetsetter@1.0.1");

});
