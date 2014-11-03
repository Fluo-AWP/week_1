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
		var str = '';
		for (var i = objects.length - 1; i >= 0; i--) {
			var object = objects[i];
			var count = this.count(object);

			str += object.toString();
			if (count > 0) {
				str += ' x ' + count;
			}
			str += ', ';
		};
		return str;
	}
};