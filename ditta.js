/**
 * Converte gli id passati come parametro nei corrispondenti id sede. 
 * Se un id non è ancora disponibile, è generato il valore <code>null</code>
 * 
 * @param {Array<Number>} ids 	l'elenco degli id da convertire
 * 
 * @return {Array<Number>}
 *
 * @properties={typeid:24,uuid:"936EE455-8E76-41B7-A285-6B20B4A53C40"}
 */
function ToSede(ids)
{
	// Nessuna conversione, siamo già sul database sede
	if(!globals.isCliente())
		return ids;
	
	var sqlQuery = scopes.string.Format('select iddittasede from v_ditte_cliente2sede where iddittacliente in (@0)', ids.join(', '));

	var dataset  = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE, sqlQuery, [], -1);
	if(!dataset)
		return [];
	
	return dataset.getColumnAsArray(1);
}