var testObject = {'test': true};

test('Test contains returns boolean', function() {
	var multiset = new MultiSet();

	ok(typeof multiset.contains(testObject) === 'boolean', 'Should be boolean');
});

test('Test count returns number', function() {
	var multiset = new MultiSet();

	ok(typeof multiset.count(testObject) === "number", 'Should be numeric');
});

test('Test can add to multiset', function() {
	var multiset = new MultiSet();

	multiset.add(testObject);
	equal(multiset.count(testObject), 1, 'Multiset count should return 1');
	ok(multiset.contains(testObject), 'Multiset should contain object: {"test": true}');

	multiset.add(testObject);
	equal(multiset.count(testObject), 2, 'Multiset count should return 2');

	multiset.add("test");
	equal(multiset.count(testObject), 2, 'Multiset count should return 2');
	equal(multiset.count("test"), 1, 'Multiset count should return 1');
});

test('Test can remove from multiset', function() {
	var multiset = new MultiSet();
	
	multiset.add(testObject);
	multiset.add(testObject);
	multiset.remove(testObject);
	equal(multiset.count(testObject), 1, 'Multiset count should return 0');
	multiset.remove(testObject);
	equal(multiset.count(testObject), 0, 'Multiset count should return 0');
});

test('Test prints multiset tostring correctly', function() {
	var multiset = new MultiSet();

	multiset.add("test");
	multiset.add(testObject);
	multiset.add(testObject);
	ok(typeof multiset.toString() === 'string', 'Multiset toString should return string');
	equal(multiset.toString(), '[{"test": true} x 2, test]', 'Multiset toString should print [{"test": true} x 2, test]');
});