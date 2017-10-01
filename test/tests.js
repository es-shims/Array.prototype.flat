'use strict';

module.exports = function (flatten, t) {
	t.test('flattens', function (st) {
		t.deepEqual(flatten([1, [2], [[3]], [[['four']]]], 1), [1, 2, [3], [['four']]], 'depth of 1 only flattens 1 deep');
		t.notDeepEqual(flatten([1, [2], [[3]], [[['four']]]], 1), [1, 2, 3, ['four']], 'depth of 1 only flattens 1 deep: sanity check');

		t.deepEqual(flatten([1, [2], [[3]], [[['four']]]], 2), [1, 2, 3, ['four']], 'depth of 2 only flattens 2 deep');
		t.notDeepEqual(flatten([1, [2], [[3]], [[['four']]]], 2), [1, 2, 3, 'four'], 'depth of 2 only flattens 2 deep: sanity check');

		t.deepEqual(flatten([1, [2], [[3]], [[['four']]]], 3), [1, 2, 3, 'four'], 'depth of 3 only flattens 3 deep');
		t.deepEqual(flatten([1, [2], [[3]], [[['four']]]], Infinity), [1, 2, 3, 'four'], 'depth of Infinity flattens all the way');

		st.end();
	});
};
