window.onload = function onload() {
   window.name = 'window';

   const newObject = {
     name: 'object',

     sayGreeting: function sayGreeting() {
      console.log(`Now this is easy, ${this.name}`);
       const nestedGreeting = function nestedGreeting(greeting) {
         console.log(`${greeting} ${this.name}`);
         }.bind(this);

         nestedGreeting('hello');
     },

     sayGreetingWithoutBind: function sayGreetingWithoutBind() {
      console.log(`Now this is easy, ${this.name}`);
       const nestedGreeting = function nestedGreeting(greeting) {
         console.log(`${greeting} ${this.name}`);
         };

         nestedGreeting('hello');
     }
   };

   console.group('With bind()');
   newObject.sayGreeting();
   console.groupEnd();

   console.group('Without bind()');
   newObject.sayGreetingWithoutBind();
   console.groupEnd();
};
