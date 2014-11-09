var testObject = {'test': true};

test('MultiSet.contains() should return boolean value', function() {
	var multiset = new MultiSet();
	ok(typeof multiset.contains(testObject) === 'boolean', 'Returned value should be boolean');
});

test('MultiSet.contains() should return number', function() {
	var multiset = new MultiSet();

	ok(typeof multiset.count(testObject) === "number", 'Returned value should be numeric');
});

test('Test can add to multiset', function() {
	var multiset = new MultiSet();

	multiset.add(testObject);
	equal(multiset.count(testObject), 1, 'Added one testObject and called multiset.count(testObject): Multiset count should return 1');
	ok(multiset.contains(testObject), 'Called multiset.contains(testObject): Should return true');

	multiset.add(testObject);
	equal(multiset.count(testObject), 2, 'Added another testObject and called multiset.count(testObject): Multiset count should now return 2');

	multiset.add("test");
	equal(multiset.count(testObject), 2, 'Added "test" to multiset and called multiset.count(testObject). Multiset count should still return 2');
	equal(multiset.count("test"), 1, 'Called multiset.count("test). Multiset count should return 1');
});

test('Test can remove from multiset', function() {
	var multiset = new MultiSet();
	
	multiset.add(testObject);
	multiset.add(testObject);
	multiset.remove(testObject);
	equal(multiset.count(testObject), 1, 'Added two testObjects and removed one. Called multiset.count(testObject): Multiset count should return 1');
	multiset.remove(testObject);
	equal(multiset.count(testObject), 0, 'Removed the other testObject. Called multiset.count(testObject): Multiset count should return 0');
});

test('Test prints multiset tostring correctly', function() {
	var multiset = new MultiSet();

	multiset.add("test");
	multiset.add(testObject);
	multiset.add(testObject);
	ok(typeof multiset.toString() === 'string', 'Tests if multiset.toString() returns a string');
	equal(multiset.toString(), '[{"test": true} x 2, test]', 'Added two testObjects and one string: "test". Multiset toString should print [{"test": true} x 2, test]');
});