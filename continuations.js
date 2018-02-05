/**
 * @properties={typeid:35,uuid:"19DDB625-0BB4-4497-AAF5-488C16665276",variableType:-4}
 */
var Status =
{
	CANCELED: undefined
};

/**
 * Runs a background job (a)synchronously, optionally displaying a start and end message.
 * <p>Continuations are used to return the result of the execution to the caller. If an exception
 * is thrown by the background job, it is re-thrown as if in the caller.</p>
 * 
 * @param {{
 * 			[sync]		   		: Boolean,
 * 			[start_message]		: String,
 * 			[delay]				: Number,
 * 			method				: Function,
 * 			args				: Array
 * 		  }}
 * 										params
 * @param {RuntimeForm<ma_status_bar>|RuntimeForm<ma_status_form>} [statusForm]
 * 
 * @properties={typeid:24,uuid:"16DF787F-ABE6-44BD-A3F8-56B99E14271F"}
 */
function RunJob(params, statusForm)
{
	var continuation = new Continuation();
	
	var sync    = params.sync;
	var message = params.start_message;
	if (sync && message)
	{
		(statusForm || forms.ma_status_bar).setStatusWarning(message, message, 0);
		params.delay = 200;
	}
	
	var exception = scheduleJob(params, continuation);
	if (exception)
		throw exception;
}

/**
 * @param {Function} method
 * @param {Array} args
 * @param {Continuation} continuation
 * @param {Continuation} exceptionContinuation
 * 
 * @properties={typeid:24,uuid:"71D14AFC-10D5-4BDB-80BF-5920FDCE9D1D"}
 */
function doRunJob(method, args, continuation, exceptionContinuation)
{	
	try
	{
		var result = method.apply(null, args);
		if(continuation && application.getApplicationType() === APPLICATION_TYPES.WEB_CLIENT)
			continuation(result);
	}
	catch(ex)
	{
		globals.ma_utl_logError(ex);
		
		if(exceptionContinuation && application.getApplicationType() === APPLICATION_TYPES.WEB_CLIENT)
			exceptionContinuation(ex);
		else
			throw ex;
	}
}

/**
 * @properties={typeid:24,uuid:"A4BDE435-A830-4AA1-A7DE-8E4AFA2CFEAD"}
 */
function scheduleJob(params, continuation)
{
	var exceptionContinuation = new Continuation();
	
	/** @type {Function} */
	var method  = params.method;
	var args    = params.args;
	
	var jobName = 'job_' + application.getUUID();
	var startDate = new Date();
		startDate.setMilliseconds(startDate.getMilliseconds() + (params.delay || 0));
		
	plugins.scheduler.addJob(jobName, startDate, doRunJob, 1e9, 1, startDate, [method, args, continuation, exceptionContinuation]);
	globals.terminator();
}