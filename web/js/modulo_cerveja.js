var modulo_cerveja = ﻿angular.module('cervejasModulo', ['ngRoute']);

modulo_cerveja
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'Views/listarCervejas.html'
                    })
                    .when('/pessoa/adicionarPessoa', {
                        templateUrl: 'Views/adicionarPessoa.html',
                        controller: 'pessoasAdicionarController'
                    })
                    .when('/Cervejaria1/cervejas/:index', {
                        templateUrl: 'Views/editarCerveja.html',
                        controller: 'editarCervejasController'
                    })
                    .when('/pessoa/excluirPessoa/:index', {
                        templateUrl: 'Views/listarPessoas.html',
                        controller: 'pessoaExcluirController'
                    })
        });

