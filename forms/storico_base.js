/**
 * @properties={typeid:35,uuid:"D2A2C6B0-9729-43A1-ACE6-333AE71A3DD7",variableType:-4}
 */
var activeStyle = null;

/**
 * @properties={typeid:35,uuid:"B293AA4D-A7E2-409E-9BAD-C2841FAA517C",variableType:-4}
 */
var disabledStyle = null;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"87A43B49-D993-4B37-8EBA-6FD867A5F3F7",variableType:-4}
 */
var isInShowHistory = false;

/**
 * @properties={typeid:35,uuid:"0603326A-D8BF-4748-BA40-0294D5665924",variableType:-4}
 */
var unactiveStyle = null;

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"57C292BF-587D-488E-9781-F7E7BB850FBF"}
 */
function onLoad(event)
{
	activeStyle   = globals.Colors.ACTIVE;
	unactiveStyle = globals.Colors.UNACTIVE;
	disabledStyle = globals.Colors.DISABLED;
}

/**
 * @return {JSFoundSet}
 * 
 * @properties={typeid:24,uuid:"D40B4941-9162-4E07-912D-D0E0AA6CE619"}
 */
function getHistoryFoundset()
{
	return null;
}

/**
 * Shows or hide historical data
 * 
 * @param {JSEvent} event
 * @param {Boolean} show
 *
 * @properties={typeid:24,uuid:"3A6128BB-22A6-418F-8E2E-A96F9C77783C"}
 */
function showHistory(event, show)
{
	isInShowHistory = show;
	setStyle(show);

	if(!isInShowHistory)
		filterData(foundset);
	else
		unfilterData(foundset);
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} show
 *
 * @properties={typeid:24,uuid:"80CD3929-2F2B-4195-9032-6C6E5301BE0E"}
 */
function setStyle(show)
{	
	if(!isHistoryEnabled())
	{
		// Set background
		elements.showHistoryBtn.bgcolor = disabledStyle.background;
		elements.hideHistoryBtn.bgcolor = activeStyle.background;
		
		// Set foreground
		elements.showHistoryBtn.fgcolor = disabledStyle.foreground;
		elements.hideHistoryBtn.fgcolor = activeStyle.foreground;
		
		// Set enabled/disabled
		elements.showHistoryBtn.enabled = false;
	}
	else if(show)
	{
		// Set background
		elements.showHistoryBtn.bgcolor = activeStyle.background;
		elements.hideHistoryBtn.bgcolor = unactiveStyle.background;
		
		// Set foreground
		elements.showHistoryBtn.fgcolor = activeStyle.foreground;
		elements.hideHistoryBtn.fgcolor = unactiveStyle.foreground;
		
		// Set enabled/disabled
		elements.showHistoryBtn.enabled = false;
		elements.hideHistoryBtn.enabled = true;
	}
	else if(!show)
	{
		// Set background
		elements.showHistoryBtn.bgcolor = unactiveStyle.background;
		elements.hideHistoryBtn.bgcolor = activeStyle.background;
		
		// Set foreground
		elements.showHistoryBtn.fgcolor = unactiveStyle.foreground;
		elements.hideHistoryBtn.fgcolor = activeStyle.foreground;
		
		// Set enabled/disabled
		elements.showHistoryBtn.enabled = true;
		elements.hideHistoryBtn.enabled = false;
	}
	
	// Set tooltip text
	elements.showHistoryBtn.toolTipText = isHistoryEnabled() ? '' : '%%i18n:ma.msg.historyNotAvailable%%';
}

/**
 * @param {JSFoundset} [fs]
 * 
 * @properties={typeid:24,uuid:"FF9DB943-CB3F-4635-B55E-0DBB1900FEB8"}
 */
function filterData(fs)
{
	fs && fs.loadAllRecords() && fs.sort(sortFunction);
}

/**
 * @param {JSFoundset} [fs]
 * 
 * @properties={typeid:24,uuid:"D4BAA4F2-7277-4B86-8149-BE2C496ADB3C"}
 */
function unfilterData(fs)
{
	if(fs && fs.loadAllRecords())
		sortFoundset(fs, sortFunction);
	
	return fs;
}

/**
 * @param {JSFoundset} fs
 * @param {Function} [sort]
 *
 * @properties={typeid:24,uuid:"D069D2E1-C53C-42EC-AC98-78347639E793"}
 */
function sortFoundset(fs, sort)
{
	if(fs && fs.getSize() > 0)
		fs.sort(sort ? sort : sortFunction);
	
	return fs;
}

/**
 * @properties={typeid:24,uuid:"3F0CD604-54F2-486D-B8A5-934850DD8313"}
 */
function sortFunction(first, second)
{
	if(first === second)
		return 0;
	else if(first > second)
		return 1;
	else
		return -1;
}

/**
 * @properties={typeid:24,uuid:"C89375C5-9267-4748-8E20-5EF8A135D552"}
 */
function init(firstShow)
{
	_super.init(firstShow);
	
	sortFoundset(getEditFoundset());
	setFormButtons();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @param {Boolean} [svyNavBaseOnShow]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"F457916B-E098-40CC-84FB-3DC34491DCDD"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow)
{
	// Check to see whether historical data is enabled
	_super.onShowForm(firstShow, event, svyNavBaseOnShow);
	
	// Switch back to active records if in history mode and not allowed
	if(isInShowHistory && !isHistoryEnabled())
		showHistory(event, false);
}

/**
 * @properties={typeid:24,uuid:"2EC34494-B0F6-4AFD-A1A0-D34FE18684F9"}
 */
function isHistoryEnabled()
{
	return true;
}

/**
 * @properties={typeid:24,uuid:"DDFAB486-C6B3-4874-87A9-26A0FA63D895"}
 */
function checkHistoryAvailability()
{
	if(!isHistoryEnabled())
		setStyle(false);
	else
		setStyle(true);
	
	return isHistoryEnabled();
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _form
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C7DDF630-ED3F-43A5-8634-3474E0C6DA61"}
 */
function onRecordSelection(event, _form)
{	
	// Filter data if in active mode or history is disabled (thus switching back to active mode)
	if(!isInShowHistory || !isHistoryEnabled())
		showHistory(event, false);
	else
		showHistory(event, true);
	
	_super.onRecordSelection(event, controller.getName());
}

/**
 * @properties={typeid:24,uuid:"BA5C8C44-3BD2-4FF1-BDE3-601F8063C3EF"}
 */
function gotoEdit()
{
	_super.gotoEdit();
	
	elements.showHistoryBtn.enabled = false;
	elements.hideHistoryBtn.enabled = false;
}

/**
 * @properties={typeid:24,uuid:"320EC2B1-B7DF-46C2-8BA4-673640599D0F"}
 */
function gotoBrowse()
{
	_super.gotoBrowse();
	
	var selectedIndex = getHistoryFoundset() && getHistoryFoundset().getSelectedIndex();
	
	// Filter data in case something's changed
	showHistory(null, isInShowHistory);
	
	getHistoryFoundset() && getHistoryFoundset().setSelectedIndex(selectedIndex);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D31ADF1-4F81-41CB-8B01-6C46BD29ADA8"}
 */
function addRecord(event)
{
	databaseManager.setAutoSave(false);
	
	var fs = getEditFoundset();
	if (fs)
		fs.newRecord();
	
	showEditForm(globals.Status.ADD, 'Aggiungi record', fs);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"630A8252-F6D3-408B-8F03-AD0CAB74FD44"}
 */
function editRecord(event) 
{
	databaseManager.setAutoSave(false);
	showEditForm(globals.Status.EDIT, 'Modifica record');
}

/**
 * @param {Boolean} [add]
 * @param {Boolean} [edit]
 * @param {Boolean} [del]
 * 
 * @properties={typeid:24,uuid:"330AF178-1054-4762-B20F-0CB5A23255E8"}
 */
function setFormButtons(add, edit, del)
{
	// Double negate them so that we end up with a boolean even when undefined or null
	elements.btn_new.enabled    = !!add;
	elements.btn_edit.enabled   = !!edit;
	elements.btn_delete.enabled = !!del;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"012376BE-F977-4E27-8AF9-AB6E8DB47C22"}
 */
function deleteRecord(event) 
{
	_super.dc_delete(event, controller.getName(), controller.getName());
}

/**
 * @properties={typeid:24,uuid:"AAE6712F-CE17-4C4F-B533-73FA72D8649F"}
 */
function getRequiredFieldsProgram()
{
	return '';
}

/**
 * @properties={typeid:24,uuid:"3311E92A-1506-42BD-8741-0D9B9F7A9E4F"}
 */
function getEditFormName()
{
	return '';
}

/**
 * @properties={typeid:24,uuid:"49C4E6E8-A918-4DDD-A906-637CB995ACA3"}
 * 
 * @return {JSFoundset}
 */
function getEditFoundset()
{
	return foundset;
}

/**
 * @param {String} 		status
 * @param {String}		title
 * @param {JSFoundset} 	[fs]
 * 
 * @properties={typeid:24,uuid:"719C48C5-D99A-40CB-99E0-397CD0610386"}
 */
function showEditForm(status, title, fs)
{
	var formName = getEditFormName();
	var requiredFieldsProgram = getRequiredFieldsProgram();
	
	forms[formName]['vClose'] = false;
	forms[formName]['validationProgram'] = requiredFieldsProgram;
	
	globals.ma_utl_showFormInDialog(formName, title, fs || getEditFoundset());
	globals.ma_utl_setStatus(status, formName, requiredFieldsProgram, requiredFieldsProgram, true);
}

/**
 * @properties={typeid:24,uuid:"A6920172-DF35-448A-ADCB-7A6AF00696F0"}
 */
function dc_edit(event, triggerForm, forceForm)
{
	editRecord(event);
}
