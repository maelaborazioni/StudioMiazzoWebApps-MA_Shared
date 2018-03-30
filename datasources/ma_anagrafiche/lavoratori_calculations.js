/**
 * @properties={type:4,typeid:36,uuid:"F00D8862-C790-4AD8-BDF7-5AB56E2739B6"}
 */
function selected()
{
	return 0;
}

/**
 * @properties={type:4,typeid:36,uuid:"3286FDFF-38E9-440B-A1DC-7BF8F656B2F2"}
 */
function idlavoratore_sede()
{
	return (globals.isCliente() ? lavoratori_cliente_to_lavoratori.idlavoratoresede : idlavoratore);
}

/**
 * @properties={type:4,typeid:36,uuid:"33D1EE73-1BF1-445B-AA9B-104F8FBC9C49"}
 */
function idditta_sede()
{
	return (globals.isCliente() ? (lavoratori_cliente_to_v_ditte_cliente2sede && lavoratori_cliente_to_v_ditte_cliente2sede.iddittasede || null) : idditta);
}

/**
 * @properties={type:4,typeid:36,uuid:"A492539E-9224-421B-A822-95B3514D1303"}
 */
function idlavoratore_cliente()
{
	return (globals.isCliente() ? idlavoratore : lavoratori_cliente_to_lavoratori.idlavoratoresede);
}

/**
 * @properties={type:4,typeid:36,uuid:"89CD1ADA-0691-4DAC-8518-988ED3983E7A"}
 */
function idditta_cliente()
{
	return (globals.isCliente() ? idditta : (lavoratori_cliente_to_v_ditte_cliente2sede && lavoratori_cliente_to_v_ditte_cliente2sede.iddittasede || null));
}

/**
 * @properties={type:12,typeid:36,uuid:"774433B4-D447-4B4D-8561-EEB7A00E17A0"}
 */
function idlavoratore_string()
{
	if(idlavoratore && !isNaN(idlavoratore))
	   return idlavoratore.toString();
	return null;
}
