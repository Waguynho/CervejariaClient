var modulo_cerveja = ﻿angular.module('cervejasModulo', ['ngRoute']);

modulo_cerveja
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'Views/listarCervejas.html'
                    })
                    .when('/cerveja/adicionarCerveja', {
                        templateUrl: 'Views/criarCerveja.html',
                        controller: 'adicionar_cerveja_ctrl'
                    })
                    .when('/Cervejaria1/cerveja/editarCerveja/:index', {
                        templateUrl: 'Views/criarCerveja.html',//Aproveita-se a mesma View
                        controller: 'editar_cerveja_ctrl'
                    })
                    .when('/cerveja/excluirCerveja/:index', {
                        templateUrl: 'Views/listarCervejas.html',
                        controller: 'deletar_cerveja_ctrl'
                    })
        });

