define("#base/0.9.1/base-debug", ["class","events","./options"], function(require) {
    var Class = require('class');
    var Events = require('events');
    var Options = require('./options');

    return Class.create({
        Implements: [Events, Options],

        destroy: function() {
            for (var p in this) {
                if (this.hasOwnProperty(p)) {
                    delete this[p];
                }
            }
        }
    });
});
