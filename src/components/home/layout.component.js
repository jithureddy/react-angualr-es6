import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import angular from 'angular';

let reactDirective = () => {
    return {
        template: `<md-card>
            <md-card-title>
                <md-card-title-text>
                <span class="md-headline">TODO items</span>
                </md-card-title-text>
            </md-card-title>
            <md-card-content> <div id="reactapp"></div> </md-card-content>
        </md-card>`,
        scope: {
            todos: '=',
            markComplete: '&'
        },
        restrict: 'E',
        link: function (scope, el, attrs) {
            scope.newItem = (value) => { alert(value) }

            const reactapp = document.getElementById('reactapp')
            scope.$watch('todos', function (newValue, oldValue) {
                if (angular.isDefined(newValue)) {
                    ReactDOM.render(
                        <Layout todos={newValue} newItem={scope.newItem} markComplete={scope.markComplete} />
                        , reactapp);
                }
            }, true);

        }
    };
};


export default reactDirective;