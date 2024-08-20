jQuery(document).ready(function() {
  
  // Handle the submission of the contact form
  jQuery('#contact-form').on('submit', function(e) {  
    e.preventDefault(); // Prevent the default form submission
    
    // Perform an AJAX request
    jQuery.ajax({
      url: 'contact.php',  // The PHP file that processes the form
      data: jQuery(this).serialize(),  // Serialize the form data
      type: 'POST',
      success: function(data) {
        // Display a success message with SweetAlert
        swal({
          title: "Thank You!",
          text: "Your request has been submitted successfully. We will contact you soon.",
          icon: "success",
          timer: 3000
        }).then(function() {
          // Reset the form after submission
          jQuery('#contact-form')[0].reset();
        });
      },
      error: function(data) {
        // Display an error message with SweetAlert
        swal({
          title: "Oops...",
          text: "Something went wrong :(",
          icon: "error",
          timer: 3000
        });
      }
    });
  });

  // Handle the submission of the subscribe form
  jQuery('#subscribe-form').on('submit', function(e) {  
    e.preventDefault(); // Prevent the default form submission
    
    // Perform an AJAX request
    jQuery.ajax({
      url: 'subs.php',  // The PHP file that processes the subscription form
      data: jQuery(this).serialize(),  // Serialize the form data
      type: 'POST',
      success: function(data) {
        // Display a success message with SweetAlert
        swal({
          title: "Thank You!",
          text: "Your subscription request has been submitted successfully.",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 3000
        }).then(function() {
          // Reset the form after submission
          jQuery('#subscribe-form')[0].reset();
        });
      },
      error: function(data) {
        // Display an error message with SweetAlert
        swal({
          title: "Oops...",
          text: "Something went wrong :(",
          icon: "error",
          timer: 3000
        });
      }
    });
  });

});
