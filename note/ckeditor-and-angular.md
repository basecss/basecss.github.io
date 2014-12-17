## 2014-12-17

项目切换到`angular`之后有个富文本编辑需求，引入了`ckeditor`。遵循最佳实践的方式，在指令内用第三方插件，借助`$apply`来做绑定。可以简单的通过封装了一个指令来使用`ckeitor`。

```html
<textarea ng-model="form.content" name="articleContent" my-ckeditor></textarea>
```

指令：

```javascript
var app = angular.module('app', [])

app.directive('myCkeditor', function() {
	return {
		restrict: 'A',
		requrie: '?ngModel',
		link: function(scope, element, attrs, ngModel) {
			var editor = CKEDITOR.replace(element[0], {
				autoGrow_minHeight: 350,
				autoGrow_maxHeight: 450
			})

			if(!ngModel) {
				return
			}

			editor.on('instanceReady', function() {
				editor.setData(ngModel.$viewValue)
			})

			function updateModel() {
				scope.$apply(function() {
					ngModel.$setViewValue(editor.getData())
				})
			}

			editor.on('change', updateModel)
			editor.on('key', updateModel)
			editor.on('dataReady', updateModel)

			ngModel.$render = function(value) {
				editor.setData(ngModel.$viewValue)
			}
		}
	}
})
```