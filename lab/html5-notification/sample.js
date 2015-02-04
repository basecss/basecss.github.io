;(function() {

	var sample = document.querySelector('#sample')

	sample.addEventListener('click', function() {

		if(!('Notification' in window)) {
			alert('你的浏览器不支持这个API')
			return
		}
		Notification.requestPermission(function(permission) {
			var sampleNotification = new Notification('Sample Title', {
				body: 'Sample body'
			})

			setTimeout(function() {
				sampleNotification.close()
			}, 3000)
		})

	}, false)

})()