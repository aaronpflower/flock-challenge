The purpose of this is to show case some front end delopment skills through 3 different callenges within 2 hours.

First build static todo list with bootstrap 

Second discus the differences between these jQuery functions
    - $(“.todo-item”).on(“click”, function(e){ console.log(e) });
    - $(document).on(“click”, “.todo-item”, function(e){ console.log(e) });
    - Answer: The impact of using the second option over the first is event-delegation. 
    For example a todo list could contain an unlimited amount of todo-items and following the first pattern would lead to an unlimited about of event listener. 
    This would become hard to manage as the list grows.  But following the second way the event listener is added just to the document and the on click will just bubble up to the document.

Third build a calculator out of JS that can add, subtract, multiply and divide only numbers.