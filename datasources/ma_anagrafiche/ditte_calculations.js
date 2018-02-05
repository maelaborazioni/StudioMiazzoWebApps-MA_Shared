/**
 * @type {Number}
 * 
 * @properties={type:4,typeid:36,uuid:"B649C770-EC90-4359-A62B-13CB01764105"}
 */
function selected()
{
	return 0;
}

/**
 * @properties={type:12,typeid:36,uuid:"A8167E70-A4CD-4982-8E9C-AB5DDC009FCE"}
 */
function codice_ragionsociale()
{
	return codice + ' - ' + ragionesociale;
}

/**
 * Returns the first 20 characters in the field
 * 
 * @properties={type:12,typeid:36,uuid:"CF61176D-2C23-4B3A-A098-8ADFAC1097C6"}
 */
function ragionesociale_trunc()
{
	return ragionesociale.substr(0, 20);
}

/**
 * @properties={type:4,typeid:36,uuid:"E63A4F15-4D8C-4ACA-9ADF-2011D5B40287"}
 */
function idditta_sede()
{
	return (globals._tipoConnessione === globals.Connessione.CLIENTE ? ditte_cliente_to_ditte.iddittasede : idditta);
}

/**
 * @properties={typeid:36,uuid:"6E09E83A-FF27-4B49-91C6-7D3E55CA5E4E"}
 */
function idditta_cliente()
{
	return (globals._tipoConnessione === globals.Connessione.CLIENTE ? idditta : ditte_cliente_to_ditte.iddittacliente);
}
