/**
 * List all global variable in window
 */
;(function(global) {

	var globalVars = []

	var iframe = document.createElement('iframe')

	document.body.appendChild(iframe)

	for(var key in global) {
		if(!(key in iframe.contentWindow)) {
			globalVars.push(key)
		}
	}

	document.body.removeChild(iframe)

	console.log(globalVars)

})(window)