(function() {

	var demo = document.querySelector('#demo'),
		notification

	demo.addEventListener('click', function() {

		if(!('Notification' in window)) {
			alert('Web Notification is not supported')
			return
		}

		Notification.requestPermission(function(permission) {

			if(permission !== 'granted') {
				return
			}

			notification = new Notification('Notification Title', {
				dir: 'ltr',
				body: 'This is notification content text',
				icon: 'http://www.basecss.net/img/avatar.jpg'
			})

			setTimeout(function() {

				notification.close()

			}, 3000)

		})

	}, false)



})()
