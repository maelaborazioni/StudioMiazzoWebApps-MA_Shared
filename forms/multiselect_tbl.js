/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F31C2C02-5F87-4703-B072-2779DC083405",variableType:-4}
 */
var all_selected = false;

/**
 * @properties={typeid:24,uuid:"9D210F3A-FE5F-4FEA-909B-4054B0F9706F"}
 */
function getSelectedRecords()
{
	var selection = [];
	var fs = foundset;
	
	for(var r = 1; r <= fs.getSize(); r++)
	{
		if(fs.getRecord(r)['selected'])
			selection.push(fs.getRecord(r));
    }
	
	return selection;
}

/**
 * @param {Number} index	the record to select
 * @param {Number} value	either 0 or 1
 *
 * @properties={typeid:24,uuid:"DC5B0101-8708-4F49-932B-7072AEADC94D"}
 */
function setSelected(index, value)
{
	var record = foundset.getRecord(index);
	
	// needed to successfully store the calculation (see https://support.servoy.com/browse/SVY-7095)
	//var temp = record['selected'];
	record['selected'] = value;
}

/**
 * @properties={typeid:24,uuid:"CC0BB841-C964-42B6-A26C-8B1946D5CA3B"}
 */
function selectAll()
{
	for(var r = 1; r <= foundset.getSize(); r++)
		setSelected(r, 1);
}

/**
 * @properties={typeid:24,uuid:"B8EBFE27-9460-43FF-8DA2-2CE4CFD0213E"}
 */
function selectNone()
{
	for(var r = 1; r <= foundset.getSize(); r++)
		setSelected(r, 0);
}

/**
 * @properties={typeid:24,uuid:"93C5433E-2EA5-4E8F-AF66-CB3871C0C32D"}
 */
function toggleSelection()
{
	if(all_selected)
		selectNone();
	else
		selectAll();
	
	all_selected = !all_selected;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"29070748-3075-47D0-B9A6-C62EF0D3D9D6"}
 */
function onLoad(event)
{
	// Add the calc to the datasource if not already defined
	var datasource = solutionModel.getDataSourceNode(foundset.getDataSource());
	var calc;
	
	if(!datasource.getCalculation('selected'))
		calc = datasource.newCalculation("function selected(){ return 0; }", JSColumn.NUMBER);
	
	solutionModel.getForm(controller.getName()).getField('chk_select').dataProviderID = calc.getName();
	controller.recreateUI();
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"1C91F7F7-69E4-4187-A169-3F66D68F9575"}
 */
function onDataChange$chk_select(oldValue, newValue, event) 
{
	setSelected(foundset.getSelectedIndex(), newValue);	
	return true;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"E5C3AF05-18F3-41C7-AAC9-6258B2438116"}
 */
function onAction$lbl_select(event) 
{
	toggleSelection();
}
