/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BF29521B-CCCF-4407-8D60-4E1803D6B432"}
 */
var vStatusTooltip = i18n.getI18NMessage('ma.msg.no_error');

/**
 * @param {String} [message]
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 * 
 * @properties={typeid:24,uuid:"181E5893-4AF6-41B0-9F1F-6AE8106C1B1E"}
 */
function setStatusSuccess(message, tooltip, hideAfterMs)
{
	_super.setStatusSuccess(message, tooltip);
	
	vStatusTooltip 				 = tooltip;
	
	if(isStatusBarVisible())
	{
		elements.icn_status.imageURL = 'media:///Info.gif';
		elements.bgn_status.bgcolor  = 'green';
	}
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 *
 * @properties={typeid:24,uuid:"2A7EABA8-EBA4-4655-BDFC-24058F096C0D"}
 */
function setStatusError(message, tooltip, hideAfterMs)
{
	_super.setStatusError(message, tooltip, hideAfterMs);
	
	if(isStatusBarVisible())
	{
		vStatusTooltip 				 = tooltip || message;
		elements.icn_status.imageURL = 'media:///Error.gif';
		elements.bgn_status.bgcolor  = 'red';
	}
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 *
 * @properties={typeid:24,uuid:"15F12698-47D0-4436-8646-286A14BB634F"}
 */
function setStatusWarning(message, tooltip, hideAfterMs)
{
	_super.setStatusWarning(message, tooltip, hideAfterMs);
	
	if(isStatusBarVisible())
	{
		elements.icn_status.imageURL = 'media:///Warning.gif';
		elements.bgn_status.bgcolor  = '#ffee00';
		elements.lbl_status.fgcolor  = 'black';
	}
}

/**
 * @param {String} [message]
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 * 
 * @properties={typeid:24,uuid:"F9D35932-A6AF-48A5-9BAE-E18F7A1866E4"}
 */
function setStatusNeutral(message, tooltip, hideAfterMs)
{
	_super.setStatusNeutral(message, tooltip, hideAfterMs);
	
	if(isStatusBarVisible())
	{
		vStatusTooltip 				 = tooltip || i18n.getI18NMessage('ma.msg.no_error');
		elements.icn_status.imageURL = 'media:///Info.gif';
		elements.bgn_status.bgcolor  = '#666666';
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C6995E5A-E012-460F-A2A1-B6335001A04E"}
 */
function showMessage(event) 
{
	forms.ma_status_message_dtl.showMessage(event, vStatusMessage);
}

/**
 * @properties={typeid:24,uuid:"7DA66354-C47E-4C46-A37A-C5B0922B3048"}
 */
function showStatusBar()
{
	setStatusBarVisible(true);
}

/**
 * @properties={typeid:24,uuid:"199996E5-6410-4FFD-A976-D6AA0E8E6D1E"}
 */
function hideStatusBar()
{
	setStatusBarVisible(false);
}

/**
 * @protected 
 * 
 * @properties={typeid:24,uuid:"207AD5AD-383E-4A7D-AEB2-8E708C5720D8"}
 */
function setStatusBarVisible(isVisible)
{
	elements.icn_status.visible = elements.lbl_status.visible = elements.lbl_status.visible = isVisible;
}

/**
 * @properties={typeid:24,uuid:"CB95B4B5-BA0C-4A0E-90F5-C6CE3FB578B8"}
 */
function isStatusBarVisible()
{
	return elements.lbl_status && elements.lbl_status.visible;
}
