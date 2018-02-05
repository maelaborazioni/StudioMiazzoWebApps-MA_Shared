/**
 * Decode html entities contained in str.
 * 
 * @param {String} str
 * 
 * @properties={typeid:35,uuid:"BC7C3323-BDF6-4EB0-9D95-D9E29E626610",variableType:-4}
 */
var DecodeHtmlEntity = function(str) 
{
	return str.replace(/&#(\d+);/g, function(match, dec) { return String.fromCharCode(dec); });
};

/**
 * Encode html entities contained in str
 * 
 * @param {String} str
 * 
 * @properties={typeid:35,uuid:"B6BDDE9E-7AA0-40A0-9B2A-ABB378C5B72A",variableType:-4}
 */
var EncodeHtmlEntity = function(str) 
{
	var buf = [];
	for (var i = str.length - 1; i >= 0; i--)
		buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
	
	return buf.join('');
};
