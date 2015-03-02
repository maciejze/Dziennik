'use strict';
var myApp = angular.module('myApp', ['ngStorage']);

myApp.controller('mainController', function($scope, $localStorage) {

    function init() {
        getPeople();
    }

    function getPeople() {
        if ($localStorage.people === undefined) {
            $scope.people = [];
        } else {
            $scope.people = $localStorage.people;
        }
    }


    $scope.postPerson = function(name, surname, age) {
        var person = {
            "name": name,
            "surname": surname,
            "age": age
        }

        $localStorage.people.push(person);
        $scope.name = '';
        $scope.surname = '';
        $scope.age = '';
    };

    $scope.deletePerson = function(index) {
        $localStorage.people.splice(index, 1);
    }

    init();

});