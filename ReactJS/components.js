// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation

// Controlled components and Uncontrolled components

// SN	Controlled	                                                  Uncontrolled
// 1.	It does not maintain its internal state.	                  It maintains its internal states.
// 2.	Here, data is controlled by the parent component.	          Here, data is controlled by the DOM itself.
// 3.	It accepts its current value as a prop.	                      It uses a ref for their current values.
// 4.	It allows validation control.	                              It does not allow validation control.
// 5.	It has better control over the form elements and data.	      It has limited control over the form elements and data.


// Controlled

A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. 
Here, the input form element is handled by the react itself rather than the DOM. In this, 
the mutable state is kept in the state property and will be updated only with setState() method.

Controlled components have functions that govern the data passing into them on every onChange event occurs. 
This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data.

// Uncontrolled

It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. 
It maintains their own state and will be updated when the input value changes. To write an uncontrolled component, 
there is no need to write an event handler for every state update, and you can use a ref to access the value of the form from the DOM.

