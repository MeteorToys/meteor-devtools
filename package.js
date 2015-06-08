Package.describe({
	name:    "meteortoys:allthings",
	summary: "Insanely Handy Development Tools for Meteor",
	version: "1.1.4",
	git:     "https://github.com/MeteorToys/allthings.git",
	documentation: "README.md",
	debugOnly: true
});

Package.onUse(function(api) {
	api.use("msavin:mongol@1.0.97"); 
	api.use("msavin:jetsetter@1.0.17");
	api.use("meteortoys:pro@0.3.0");
});