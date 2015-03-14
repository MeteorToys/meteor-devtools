Package.describe({
  name:    "meteortoys:allthings",
  summary: "Insanely handy development tools for Meteor. It's like candy that lasts forever.",
  version: "0.1.0",
  git:     "https://github.com/MeteorToys/allthings.git",
  documentation: "README.md",
  debugOnly: true
});

Package.onUse(function(api) {

  api.use("msavin:mongol"); 
  api.use("msavin:jetsetter");

});
