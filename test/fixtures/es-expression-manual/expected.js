'use strict';

var _omit2 = require('lodash-es/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _pick2 = require('lodash-es/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _noop2 = require('lodash-es/noop');

var _noop3 = _interopRequireDefault(_noop2);

var _map2 = require('lodash-es/map');

var _map3 = _interopRequireDefault(_map2);

var _identity2 = require('lodash-es/identity');

var _identity3 = _interopRequireDefault(_identity2);

var _filter2 = require('lodash-es/filter');

var _filter3 = _interopRequireDefault(_filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var method = _identity3.default || _noop3.default;

var method2 = _noop3.default ? _map3.default : _filter3.default;

(something ? _pick3.default : _omit3.default)(obj, function () {});
