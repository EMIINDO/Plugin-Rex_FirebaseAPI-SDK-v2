//Converted with C2C3AddonConverter v1.0.1.0
"use strict"; 
 // Porting BY EMI INDO with c3addon-ide-plus

{
	const PLUGIN_ID = "Rex_FirebaseAPI";
	// callMap Deprecated const PLUGIN_VERSION = "2.4.2.0";
	const PLUGIN_CATEGORY = "web";

	// callMap Deprecated let app = null;

	const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.Rex_FirebaseAPI = class Rex_FirebaseAPI extends SDK.IPluginBase
	{
		constructor()
		{
			super(PLUGIN_ID);
			SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
			this._info.SetIcon("icon.png", "image/png");
			this._info.SetName(globalThis.lang(".name"));
			this._info.SetDescription(globalThis.lang(".description"));
			// callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
			this._info.SetCategory(PLUGIN_CATEGORY);
			this._info.SetAuthor("Rex.Rainbow");
			this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
			this._info.SetIsSingleGlobal(false);
			this._info.SetIsDeprecated(true);
			this._info.SetSupportsEffects(false);
			this._info.SetMustPreDraw(false);
			this._info.SetCanBeBundled(false);

			this._info.SetSupportedRuntimes(["c2","c3"]);

			SDK.Lang.PushContext(".properties");
			this._info.SetProperties([
				new SDK.PluginProperty("combo", "log", {initialValue:"no", items:["no","yes"]})
			]);
			this._info.AddFileDependency({
				filename: "firebase.js",
				type: "external-script"
				});
			SDK.Lang.PopContext();		// .properties
			SDK.Lang.PopContext();
		}
	};
	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
