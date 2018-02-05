/**
 * @properties={typeid:35,uuid:"A798FC62-27E2-44F7-A1D7-85779B14B0EA",variableType:-4}
 */
var requiredFieldsProgam = null;

/**
 * @properties={typeid:24,uuid:"259B3929-AFAB-456D-B8A6-C08C16E9AEEF"}
 */
function showHistory(event, show)
{
	_super.showHistory(event, show);
	elements.data_tabless.tabIndex = isInShowHistory ? 'history_tab' : 'active_tab';
}

/**
 * @properties={typeid:24,uuid:"50623EFC-92ED-4BD0-A5F5-7D0401377559"}
 */
function gotoEdit()
{
	_super.gotoEdit();
	
	/** @type {Number} */
	var currTabIdx = elements.data_tabless.tabIndex;
	globals.ma_utl_setStatus(globals.nav.mode, elements.data_tabless.getTabFormNameAt(currTabIdx), requiredFieldsProgam);
}