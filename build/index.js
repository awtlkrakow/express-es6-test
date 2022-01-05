'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.json({ message: "es6 modules are awesome but tiring sometimes" });
});

app.listen(port, function () {
    return console.log("server listening on port", port);
});
//# sourceMappingURL=index.js.map