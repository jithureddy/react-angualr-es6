import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';
// Material design css
import 'angular-material/angular-material.css';
// Icons
import 'font-awesome/css/font-awesome.css';
import './styles.scss';

const app = angular.module('myApp', [
  uiRouter,
  angularMaterial,
  Common.name,
  Components.name
])
.directive('app', AppComponent);

export default app;
