(function(window) {
    'use strict';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var myTruck = new Truck('ncc-1701', new DataStore());
    var myTruck2 = new Truck('TANK', new DataStore());
    // 把myTruck暴露到全局命名空间
    window.myTruck = myTruck;
})(window);