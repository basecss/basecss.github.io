function assert(condition, message) {
	return condition ? 'equal' : 'notEqual'
}

function error(message) {
	console.error(message)
}

function toArray(args) {
	id(Array.isArray(args)) {
		return args
	}
	return Array.prototype.slice.call(args)
}