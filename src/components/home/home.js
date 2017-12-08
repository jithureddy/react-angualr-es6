import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import reactDirective from './layout.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

.component('home', homeComponent)

.directive('reactDirective', reactDirective);

export default homeModule;
