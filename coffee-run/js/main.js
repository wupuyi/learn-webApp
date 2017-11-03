(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    var myTruck = new Truck('ncc-1701', new DataStore());
    // 下面一行为  测试 var myTruck2 = new Truck('TANK', new DataStore());
    // 把myTruck暴露到全局命名空间
    window.myTruck = myTruck;

    //实例化一个新的CheckList类型
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    var formHandler = new FormHandler(FORM_SELECTOR);

    // formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);

    });

    formHandler.addInputHandler(Validation.isCompanyEmail);


    // console.log(formHandler);
})(window);