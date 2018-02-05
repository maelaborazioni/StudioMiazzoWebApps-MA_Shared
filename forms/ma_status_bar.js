/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD6A91C2-94AB-400B-B1F1-2A0319954906"}
 */
var vStatusMessage = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"436F6B70-4C09-496D-9C2C-570F6762ABA8"}
 */
var vStatusTooltip = i18n.getI18NMessage('ma.msg.no_error');

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 * 
 * @properties={typeid:24,uuid:"294FDF58-3354-4711-AFC7-F09FAA57C90E"}
 */
function setStatusSuccess(message, tooltip, hideAfterMs)
{
	message = message || 'i18n:ma.lbl.save_successfull';
	tooltip = tooltip || 'i18n:ma.lbl.save_successfull';
	
	setStatus(message, tooltip, hideAfterMs >= 0 ? hideAfterMs : 5000);
	
	if(isStatusBarVisible())
	{
		elements.icn_status.imageURL = 'media:///Info.gif';
		elements.bgn_status.bgcolor  = 'green';
		elements.lbl_status.fgcolor  = 'white';
	}
}

/**
 * @param {String} [message]
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 * 
 * @properties={typeid:24,uuid:"C9FD4CD2-0A43-464F-883D-3D9FD81445C7"}
 */
function setStatusError(message, tooltip, hideAfterMs)
{
	message = message || 'i18n:ma.err.generic_error';
	
	setStatus(message, tooltip, hideAfterMs);
	
	if(isStatusBarVisible())
	{
		elements.icn_status.imageURL = 'media:///Error.gif';
		elements.bgn_status.bgcolor  = 'red';
		elements.lbl_status.fgcolor  = 'white';
	}
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 *
 * @properties={typeid:24,uuid:"533372CE-B041-40A7-923F-687D8727C929"}
 */
function setStatusWarning(message, tooltip, hideAfterMs)
{
	setStatus(message, tooltip, hideAfterMs >= 0 ? hideAfterMs : 5000);
	
	if(isStatusBarVisible())
	{
		elements.icn_status.imageURL = 'media:///Warning.gif';
		elements.bgn_status.bgcolor  = '#ffee00';
		elements.lbl_status.fgcolor  = 'black';
	}
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 *
 * @properties={typeid:24,uuid:"B17CC1EF-FF79-4FEC-89CD-38C3E6D8B732"}
 */
function setStatusNeutral(message, tooltip, hideAfterMs)
{
	setStatus(message, tooltip, hideAfterMs >= 0 ? hideAfterMs : 5000);
	
	if(isStatusBarVisible())
	{
		elements.icn_status.imageURL = 'media:///Info.gif';
		elements.bgn_status.bgcolor  = '#666666';
	}
}

/**
 * @properties={typeid:24,uuid:"BF6350D9-6853-4544-AB35-0C8C83AD4E75"}
 */
function resetStatus()
{
	setStatusNeutral('','', 0);
}

/**
 * @param {String} message
 * @param {String} [tooltip]
 * @param {Number} [hideAfterMs]
 * 
 * @properties={typeid:24,uuid:"E82C3F4A-797D-4480-8427-F44862A59FC4"}
 */
function setStatus(message, tooltip, hideAfterMs)
{
	//get i18n value if i18n is used
	if(utils.stringPatternCount(message,'i18n:') > 0)
		message = i18n.getI18NMessage(message);
	
	if(utils.stringPatternCount(tooltip,'i18n:') > 0)
		tooltip = i18n.getI18NMessage(tooltip);
	
	vStatusMessage = message;
	vStatusTooltip = tooltip;
	
	var jobname = 'reset_status_job';
	plugins.scheduler.removeJob(jobname);
	
	if(hideAfterMs && hideAfterMs > 0)
	{
		var startDate = new Date();
			startDate.setMilliseconds(startDate.getMilliseconds() + hideAfterMs);
			
		plugins.scheduler.addJob(jobname, startDate, resetStatus, 1e9, 0, null, null);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"F84733CB-360B-474E-A4F8-E9A98CFECA57"}
 */
function showMessage(event) 
{
	forms.ma_status_message_dtl.showMessage(event, vStatusMessage);
}

/**
 * @properties={typeid:24,uuid:"DF557F8D-5C5A-4C46-A8ED-E316122799CD"}
 */
function showStatusBar()
{
	setStatusBarVisible(true);
}

/**
 * @properties={typeid:24,uuid:"CFA2A896-4C64-4F06-8C6E-823E6DDE9263"}
 */
function hideStatusBar()
{
	setStatusBarVisible(false);
}

/**
 * @protected 
 * 
 * @properties={typeid:24,uuid:"01818232-3D18-4336-BAB8-786797CF3190"}
 */
function setStatusBarVisible(isVisible)
{
	elements.icn_status.visible = elements.lbl_status.visible = elements.lbl_status.visible = isVisible;
}

/**
 * @properties={typeid:24,uuid:"DABB8EA2-82F2-4CB7-9274-557BDD403535"}
 */
function isStatusBarVisible()
{
	return elements.icn_status.visible && elements.lbl_status.visible && elements.lbl_status.visible;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"67D32260-12DE-428C-9672-7309B3186AAB"}
 */
function reset(event) 
{
	resetStatus();
}
