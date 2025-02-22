"use strict";

{
	globalThis.C3.Plugins.Rex_FirebaseAPI.Instance = class Rex_FirebaseAPIInstance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super();

            const properties = this._getInitProperties();
			
			// Initialise object properties
		
			
			if (properties)		// note properties may be null in some cases
			{
        	window["Firebase"]["enableLogging"](properties[0] == 1);        

			}
		}
		
		_release()
		{
			super._release();
		}
		
		_saveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		_loadFromJson(o)
		{
			// load state for savegames
		}
		_onCreate()
		{	
        	runAfterInitializeHandlers();
		}
		get_ref(k)
		{
	        if (k == null)
		        k = "";
		    var path;
		    if (isFullPath(k))
		        path = k;
		    else
		        path = this.rootpath + k + "/";
	            
	        return get_ref(path);
		}
	};
}