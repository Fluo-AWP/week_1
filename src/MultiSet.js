var MultiSet = function () {
	var objects = [];

	this.add = function (object) {
		objects.push(object);
	}

	this.remove = function (object) {
		objects.pop(object);
	}

	this.contains = function (object) {
		return objects.indexOf(object) > -1;
	}

	this.count = function (object) {
		var occurences = 0;
		for (var i = objects.length - 1; i >= 0; i--)
			if (objects[i] == object)
				occurences++;
		return occurences;
	}

	this.toString = function () {
		var str = '[';
		var printedObjects = [];
		for (var i = objects.length - 1; i >= 0; i--) {
			var object = objects[i];
			if (printedObjects.indexOf(object) < 0) {
				if (printedObjects.length > 0) {
					str += ', ';
				}

				if (typeof object === 'object') {
					str += '{';
					for (prop in object) {
						str += '\"' + prop + '\": ' + object[prop];
					}
					str += '}';
				} else {
					str += object.toString();
				}

				var count = this.count(object);
				if (count > 1) {
					str += ' x ' + count;
				}
				printedObjects.push(object);
			}
		};
		str += ']';
		return str;
	}
};