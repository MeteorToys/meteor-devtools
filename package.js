Package.describe({
	name:    "meteortoys:allthings",
	summary: "Insanely Handy Development Tools",
	version: "2.2.0",
	git:     "https://github.com/MeteorToys/allthings.git",
	documentation: "README.md",
	debugOnly: true
});

Package.onUse(function(api) {
	// these are debugOnly packages
	api.use("msavin:mongol@1.6.0");
	api.use("msavin:jetsetter@1.5.0");
	api.use('meteortoys:blueprint@2.1.0');
	api.use('meteortoys:authenticate@2.1.0');
	api.use('meteortoys:shell@2.1.0');
	api.use('meteortoys:method@2.1.0');
	api.use('meteortoys:result@2.1.0');
	api.use('meteortoys:autopub@2.1.0'); 
	api.use('meteortoys:pub@2.1.0'); 
	api.use('meteortoys:sub@2.1.0');
	api.use('meteortoys:email@2.1.0');
	api.use('meteortoys:listen@2.1.0');
	api.use('meteortoys:throttle@2.1.0');
	api.use('meteortoys:status@2.1.0');
	api.use('meteortoys:hotreload@2.1.0');
});
