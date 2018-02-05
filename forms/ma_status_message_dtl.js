/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"33045C17-4CB9-4704-985F-7240EFBA99A9"}
 */
var vMessage = '';

/**
 * @properties={typeid:24,uuid:"9B45EF3B-D809-444C-AACF-34EEC82D1D48"}
 */
function showMessage(event, message)
{
	vMessage = message;
	globals.ma_utl_showFormInDialog(controller.getName(), 'Info');
}
