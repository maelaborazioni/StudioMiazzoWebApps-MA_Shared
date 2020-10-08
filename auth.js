/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07DE25AE-FFAE-420E-A829-9DC1D0526DB5"}
 */
var _accessToken = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7C5EDD7C-E28E-46D2-B2CD-95110A098285"}
 */
var _refreshToken = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"23751B00-8D8A-4A44-811D-0DAC3F459D17"}
 */
var _expirationDate = "";

/**
 * Retrieve the modules for the provided organization id. If not given, uses the login organization
 * @param [organizationid]
 * 
 * @return {JSFoundset}
 *
 * @properties={typeid:24,uuid:"9FAF98C6-FFFF-47A4-83A5-7DC3E778B927"}
 */
function GetModules(organizationid)
{
	var fs;
	if(!organizationid)
		fs = _to_sec_organization$lgn;
	else
	{
		fs = datasources.db.svy_framework.sec_organization.getFoundSet();
		fs.loadRecords(organizationid);
	}
		
	return fs.sec_organization_to_sec_owner
		     .sec_owner_to_sec_owner_in_module;
}
/**
 * @param [userId]
 * @param [organizationId]
 * 
 * @return ({
 * 			 accesstoken : String,
 *           refreshtoken : String,
 *           expirationdate : String  
 * })
 * 
 * @properties={typeid:24,uuid:"A363A2AD-4116-46F1-907C-FE105A64D753"}
 */
function GetPSToken(userId, organizationId) {
	// authentication url
	var url = "https://api.peoplegest.it/Authentication/token";
	// predefined parameters as per 'superuser' able to access principal ws functionality
	var params = {
		userName : "support_it@studiomiazzo.it",
		password : "82ma165sm",
		GrantType : "password",
		networkCode : "0000000000",
		clientId : "presenzasemplice.studiomiazzo.it"
	};

	//prepare request
	var client = globals.getHttpClient();
	var request = client.createPostRequest(url);
	//prepare parameters as url encoded
	request.addHeader('Content-type','application/x-www-form-urlencoded');
	request.setBodyContent('userName='.concat(params.userName,'&password=',params.password,'&grantType=',params.GrantType,'&networkCode=',params.networkCode,'&clientId=',params.clientId));
	var response = request.executeRequest();
	if(response)
	{
		// We always expect a Json result
		var responseBody = response.getResponseBody();
		var responseObj  = plugins.serialize.fromJSON(responseBody);
		var statusCode   = response.getStatusCode();
		
		if(statusCode == globals.HTTPStatusCode.OK)
		{
			_accessToken = responseObj['accessToken'];
			_refreshToken = responseObj['refreshToken'];
			_expirationDate = responseObj['expirationDate'];
		}
		else
		{		
			_accessToken = "";
			_refreshToken ="";
			_expirationDate = null;
		}
		
		return responseObj;
	}
	else
		return { returnValue: false, message: 'Il server non risponde, riprovare' };
}
/**
 * @param {String} refreshToken
 * 
 * @return ({
 * 			 accesstoken : String,
 *           refreshtoken : String,
 *           expirationdate : Date  
 * })
 * 
 * @properties={typeid:24,uuid:"1C9388A7-DEBB-4FDE-8DB3-5A7490C10ADD"}
 */
function RefreshPSToken(refreshToken) {
	// authentication url
	var url = "https://api.peoplegest.it/Authentication/token";
	// predefined parameters as per 'superuser' able to access principal ws functionality
	var params = {
		refreshToken : refreshToken,
		GrantType : "refresh_token",
		networkCode : "0000000000",
		clientId : "presenzasemplice.studiomiazzo.it"
	};

	//prepare request
	var client = globals.getHttpClient();
	var request = client.createPostRequest(url);
	//prepare parameters as url encoded
	request.addHeader('Content-type','application/x-www-form-urlencoded');
	request.setBodyContent('refreshToken='.concat(params.refreshToken,'&grantType=',params.GrantType,'&networkCode=',params.networkCode,'&clientId=',params.clientId));
	var response = request.executeRequest();
	if(response)
	{
		// We always expect a Json result
		var responseBody = response.getResponseBody();
		var responseObj  = plugins.serialize.fromJSON(responseBody);
		var statusCode   = response.getStatusCode();
		
		if(statusCode == globals.HTTPStatusCode.OK)
		{
			_accessToken = responseObj['accessToken'];
			_refreshToken = responseObj['refreshToken'];
			_expirationDate = responseObj['expirationDate'];
		}
		else
		{		
			_accessToken = "";
			_refreshToken ="";
			_expirationDate = null;
		}
		
		return responseObj;
	}
	else
		return { returnValue: false, message: 'Il server non risponde, riprovare' };
}