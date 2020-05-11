/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F629D127-7E42-4425-B43C-D8616C04F426"}
 */
var SITO_WEB   = 'https://www.studiomiazzo.it';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32EB5020-1CFD-4C26-8F2C-B4CF5622A174"}
 */
var MAGNACARTA = 'https://magnacarta.studiomiazzo.it';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1FEC447-F90B-49DC-8103-31920018393F"}
 */
var DOMANDE_E_RISPOSTE = 'https://www.studiomiazzo.it/q2a';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E9BA8B0B-49E1-46E7-9626-6F8943F6E9F3"}
 */
var FTP_STUDIOMIAZZO = 'ftp://ftp.studiomiazzo.it/';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1CBDF778-BF7F-4FD5-85F5-C39BB488E1FA"}
 */
var PresenzaSempliceLite = application.getServerURL() + '//loginpsl.html'//'/servoy-webclient/ss/s/PresenzaSempliceLite';

/**
 * @properties={typeid:35,uuid:"47B9D17A-4F93-4AD6-AC96-83F6872FB2B4",variableType:-4}
 */
var ftp = 
{ 
	PRATICHE: 
	{
		/**
		 * @return {JFTPclient}
		 */
		GetFTPClient: function(){ return scopes.utl.GetFTPClient({ host: scopes.url.FTP_STUDIOMIAZZO, username: 'pratiche', password: 'Dmd82udd' }); }
	}
}; 