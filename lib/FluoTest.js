var currentTest = null;

var test = function (msg, theTest) {
	addTestDiv(msg);
	theTest();
};

var addTestDiv = function (msg, result) {
	var container = document.getElementById('tests');
	if (!container) throw('The page does not contain a div with id: tests');
	var testContainer = document.createElement('div'),
		html = '<h3>'+ msg +'</h3>';	
	testContainer.className = 'test-container';
	testContainer.innerHTML = html;
	currentTest = testContainer;
	container.appendChild(testContainer);
};

var addAssertionResult = function (result, msg) {
	var resultTxt = result ? 'passed' : 'not passed',
		resultClass = result ? 'test-passed' : 'test-error',
		assertionContainer = document.createElement('div'),
		html = '<span class="test-result '+ resultClass +'">'+ resultTxt +'</span>\
				-\
				<strong>'+ msg +'</strong>';

	assertionContainer.className = 'assertion-container';
	assertionContainer.innerHTML = html;
	currentTest.appendChild(assertionContainer);
};

var ok = function (assertion, msg) {
	addAssertionResult(assertion, msg);
};

var equal = function (actual, expected, msg) {
	addAssertionResult (actual === expected, msg);
};
