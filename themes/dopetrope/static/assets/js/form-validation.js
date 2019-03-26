// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='Request Availability']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      reason: {
        required: true,
        minlength: 5
      },
      message: {
        required: true,
        minlength: 10
      },
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      reason: {
        required: "Please enter your question",
        minlength: "Your password must be at least 5 characters long"
      },
      message: {
        required: "Please enter your message",
        minlength: "Your password must be at least 10 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
