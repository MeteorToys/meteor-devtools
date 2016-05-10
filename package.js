Package.describe({
	name:    "meteortoys:allthings",
	summary: "Insanely Handy Development Tools",
	version: "3.0.0",
	git:     "https://github.com/MeteorToys/allthings.git",
	documentation: "README.md",
	debugOnly: true
});



Package.onUse(function(api) {
	api.add_files(["main.js"], ["client","server"]);
	// these are debugOnly packages
	// you can remove the one's you'd wish
	api.use("msavin:mongol@2.0.0");
	api.use("msavin:jetsetter@2.0.0");
	api.use('meteortoys:blueprint@3.0.0');
	api.use('meteortoys:authenticate@3.0.0');
	api.use('meteortoys:shell@3.0.0');
	api.use('meteortoys:method@3.0.0');
	api.use('meteortoys:result@3.0.0');
	api.use('meteortoys:autopub@3.0.0'); 
	api.use('meteortoys:pub@3.0.0'); 
	api.use('meteortoys:sub@3.0.0');
	api.use('meteortoys:email@3.0.0');
	api.use('meteortoys:listen@3.0.0');
	api.use('meteortoys:throttle@3.0.0');
	api.use('meteortoys:status@3.0.0');
	api.use('meteortoys:hotreload@3.0.0');
});
