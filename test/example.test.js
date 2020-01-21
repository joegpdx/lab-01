// IMPORT MODULES under test here:
// import example from '../src/example.js';

import isYes from '../isYes.js';

const test = QUnit.test;

test('testing Yes works', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const test2 = 'Yes';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(test2);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
test('testing Y works', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const test3 = 'Y';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(test3);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
test('testing y works', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const test4 = 'y';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(test4);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
test('testing yes works', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const test5 = 'yes';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(test5);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('test it gives false', function (assert) {
    const test6 = 'No';

    const expected = false;

    const result = isYes(test6);

    assert.equal(result, expected);
});
