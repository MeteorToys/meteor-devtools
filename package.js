Package.describe({
	name:    "meteortoys:allthings",
	summary: "Insanely Handy Development Tools for Meteor",
	version: "1.2.1",
	git:     "https://github.com/MeteorToys/allthings.git",
	documentation: "README.md",
	debugOnly: true
});

Package.onUse(function(api) {
	api.use("msavin:mongol@1.0.102");
	api.use("msavin:jetsetter@1.0.19");
	api.use("meteortoys:pro@0.6.0");
});
