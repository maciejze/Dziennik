'use strict';
var myApp = angular.module('myApp', ['ngStorage']);

myApp.controller('mainController', function($scope, $localStorage) {



    function init() {

        $scope.order = 'name';

        getPeople();

    }

    function getPeople() {
        if ($localStorage.people === undefined) {
            $localStorage.people = [];

        }
        $scope.people = $localStorage.people;

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

    $scope.deletePerson = function(person) {
        $localStorage.people.splice($localStorage.people.indexOf(person), 1);
    }

    $scope.translateSort = function(word) {
        if (word === 'name') {
            return 'imienia'
        }
        if (word === 'surname') {
            return 'nazwiska'
        }
        if (word === 'age') {
            return 'wieku'
        }
    }

    init();

});