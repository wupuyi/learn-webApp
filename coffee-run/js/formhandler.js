(function(windoe){
    'use strict';
    var App = window.App || {};
    // 导入jQuery
    var $ = window.jQuery;
    
    function FormHandler(selector) {
        
        if(!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if(this.$formElement.length === 0){
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event){
            //阻止默认行为。
            event.preventDefault();

            // var data = $(this).serializeArray();
            var data = {};
            $(this). serializeArray(). forEach(function(item){
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        })
    };

    FormHandler.prototype.addInputHandler = function(fn) {
        console.log('Setting input handler for form');
        this.$formElement.on('input', '[name="emailAddress"] ', function(event) {
            var emailAddress = event.target.value;
            // console.log(fn(emailAddress));
            var message = '';
            if(fn(emailAddress)) {
                //验证通过
                event.target.setCustomValidity('');
            } else {
                //验证未通过，提示错误信息
                message = emailAddress + ' is not an authorized email address!';
                event.target.setCustomValidity(message);
            }
        });
    };

    App.FormHandler = FormHandler;
    windoe.App = App;
})(window);