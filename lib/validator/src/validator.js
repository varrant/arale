define(function(require, exports, module) {
    var Core = require('./core'),
        Widget = require('widget'),
        $ = require('$');

    var Validator = Core.extend({
        events: function() {
            var hash = {};
            hash['mouseenter .' + this.get('inputClass')] = 'mouseenter';
            hash['mouseleave .' + this.get('inputClass')] = 'mouseleave';
            hash['mouseenter .' + this.get('textareaClass')] = 'mouseenter';
            hash['mouseleave .' + this.get('textareaClass')] = 'mouseleave';

            console.log(hash);
            return hash;
        },

        attrs: {
            explainClass: 'ui-form-explain',
            itemClass: 'ui-form-item',
            itemHoverClass: 'ui-form-item-hover',
            inputClass: 'ui-input',
            textareaClass: 'ui-textarea'
        },

        setup: function() {
            Validator.superclass.setup.call(this);
            var that = this;

            $('input, textarea, select', this.element).each(function(i, ele) {
                ele = $(ele);
                ele.data('explain', that.getExplain(ele).html());
            });


            this.on('itemValidate', function() {
                console.log('itemValidate');
            });

            this.on('itemValidated', function(err, msg, ele) {
                var explain = that.getExplain(ele);
                console.log('itemValidated', explain);
            });

            this.on('formValidate', function() {
                console.log('formValidate');
            });

            this.on('formValidated', function() {
                console.log('formValidated');
            });
        },

        notice: function(ele, str) {
        },

        getItem: function(ele) {
            ele = $(ele);
            var item = ele.parent('.' + this.get('itemClass'));

            return item;
        },

        getExplain: function(ele) {
            var item = this.getItem(ele);
            var explain = item.find('.' + this.get('explainClass'));

            if (explain.length == 0) {
                var explain = $('<div class="' + this.get('explainClass') + '"></div>').appendTo(item);
            }

            return explain;
        },

        mouseenter: function(e) {
            console.log('mouseenter', e.target);
            this.getItem(e.target).addClass(this.get('itemHoverClass'));
        },
        mouseleave: function(e) {
            console.log('mouseenter', e.target);
            this.getItem(e.target).removeClass(this.get('itemHoverClass'));
        }
    });


    module.exports = Validator;
});
