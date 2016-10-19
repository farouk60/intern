define([
    'intern!benchmark'
], function (registerSuite) {
	var async = registerSuite.async;
	var skip = registerSuite.skip;

    registerSuite({
        name: 'example benchmarks',

        test1: function () {
            return 2 * 2;
        },

        test2: (function () {
			function test() {
				[ 1, 2, 3, 4, 5 ].forEach(function (item) {
					item = item * item;
				});
			}

			test.options = {
			};

			return test;
        })(),

		nested: {
			nested1: function () {
				return 23 * 23;
			},

			nested2: function () {
				return 23 / 12;
			}
		},

		async1: async(function (dfd) {
			setTimeout(dfd.callback(function () {
				return 23 / 400;
			}), 200);
		}),

		skip1: skip('this test does nothing right now', function () {})
    });
});
