class HomeController {
  constructor($scope) {
    'ngInject';
    this._$scope = $scope;
    this.name = 'home';
    this.todos = [
      { text: 'Learn angular', done: false },
      { text: 'Build an angular app', done: false },
      { text: 'Learn React & Redux', done: false },
      { text: 'Integrate Angular & React', done: false },
      { text: 'Redux integration coming soon', done: false }];
      this.todoText = null;
  }

  

  addTodo() {
    if(this.todoText && this.todoText.length){
      this.todos.push({ text: this.todoText, done: false });
      this.todoText = '';
    }
  };

  remaining() {
    var count = 0;
    angular.forEach(this.todos, function (todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  markItemCompleted(todoText) {
    var index = this.todos.findIndex((item, index) => { return (item.text === todoText) });
    console.log(index);
    this.todos[index].done = !this.todos[index].done;
    this._$scope.$digest();
  };
}

export default HomeController;
