/**
 * @properties={type:12,typeid:36,uuid:"13C17108-8114-451E-89EE-69D4B3DF92D2"}
 */
function descrizione_fascia()
{
	return descrizione != null ? descrizione : descrizautogenerata;	
}

/**
 * @properties={type:12,typeid:36,uuid:"23CB29F1-3C2C-46D5-8CD5-DD569D00A537"}
 */
function descrizione_con_codice()
{
	return codicefascia + ' - ' + descrizione_fascia;
}
