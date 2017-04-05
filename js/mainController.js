'use strict';
var myApp = angular.module('myApp', ['ngStorage']);

myApp.controller('mainController', function($scope, $localStorage) {

    function init() {
        $scope.order = 'name';
        getPeople();
    }

    function getPeople() {
        if ($localStorage.people === undefined) {
            $localStorage.people = [{
                    name: 'Jan',
                    surname: 'Kowalski',
                    age: 23
                },
                {
                    name: 'Tomasz',
                    surname: 'Tomaszowski',
                    age: 13
                },
                {
                    name: 'Alina',
                    surname: 'Nowak',
                    age: 62
                },
                {
                    name: 'Jakub',
                    surname: 'Kowalski',
                    age: 23
                },
                {
                    name: 'Jakub',
                    surname: 'Tomicki',
                    age: 21
                }
            ];

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

    init();

});
