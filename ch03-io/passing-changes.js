var awesomeClass = function() {
  this.awesomeProp = 'awesome!';
  this.awesomeFunc = function(text) {
    console.log(text + ' is awesome!\n');
  }
};

var awesomeObject = new awesomeClass();

function middleware(func) {
  oldFunc = func.awesomeFunc;
  func.awesomeFunc = function(text) {
    text = text + ' really';
    oldFunc(text);
  }
};

function anotherMiddleware(func) {
  func.anotherProp = 'super duper';
}

function caller(input) {
  input.awesomeFunc(input.anotherProp);
}

//middleware(awesomeObject);
//anotherMiddleware(awesomeObject);
caller(awesomeObject);