/**
 * Converte gli id passati come parametro nei corrispondenti id sede. 
 * Se un id non è ancora disponibile, è generato il valore <code>null</code>
 * 
 * @param {Array<Number>}	ids l'elenco degli id da convertire
 * 
 * @return {Array<Number>}
 *
 * @properties={typeid:24,uuid:"D87C6599-11A5-4EDB-B7F3-9BF3B6AEE1B8"}
 */
function ToSede(ids)
{
	// Nessuna conversione, siamo già sul database sede
	if(!globals.isCliente())
		return ids;
	
	var sqlQuery = scopes.string.Format('select idlavoratoresede from v_lavoratori_cliente2sede where idlavoratorecliente in (@0);', ids.join(', '));

	var dataset  = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE, sqlQuery, [], -1);
	if(!dataset)
		return [];
	
	return dataset.getColumnAsArray(1);
}


/**
 * Restituisce l'array di identificativi lavoratori ordinati secondo l'ordine alfabetico del rispettivo nominativo
 * 
 * @param {Array} arrIdLavoratori
 * @param {Number} [tipologiaDitta]
 * 
 * @return {Array}
 * 
 * @properties={typeid:24,uuid:"B05999D6-50A2-49C8-920D-7F894FD28D44"}
 * @AllowToRunInFind
 */
function sortByNominativo(arrIdLavoratori,tipologiaDitta)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/lavoratori>} */
	var fsLav = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	if(fsLav.find())
	{
		fsLav.idlavoratore = arrIdLavoratori;
		if(fsLav.search())
		{
			if(tipologiaDitta)
			{
				if(tipologiaDitta == globals.Tipologia.ESTERNA)
					fsLav.sort('lavoratori_to_lavoratori_personeesterne asc')
				else
					fsLav.sort('lavoratori_to_persone.nominativo asc');
			}
			else
				fsLav.sort('lavoratori_to_persone.nominativo,lavoratori_to_lavoratori_personeesterne.nominativo');
			
			return globals.foundsetToArray(fsLav,'idlavoratore');
		}
	}
	
	return [];
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param arrIdLavoratori
 *
 * @properties={typeid:24,uuid:"D4AA7973-3A91-42AD-AD6B-0BCC330533F9"}
 */
function sortByRaggruppamentoDettaglio(arrIdLavoratori)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/lavoratori>} */
	var fsLav = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	if(fsLav.find())
	{
		fsLav.idlavoratore = arrIdLavoratori;
		if(fsLav.search())
		   fsLav.sort('lavoratori_to_lavoratori_classificazioni.codclassificazione,lavoratori_to_persone.nominativo,lavoratori_to_lavoratori_personeesterne.nominativo');
			
		return globals.foundsetToArray(fsLav,'idlavoratore');
	}
	
	return [];
}