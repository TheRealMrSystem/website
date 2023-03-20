$(document).ready(function() {
  // Add event listener to #step1next button
  $('#step1next').on('click', function() {
    // Check if required fields are valid
    var firstnameValid = ($('#firstname-input').val().length !== 0);
    var lastnameValid = ($('#lastname-input').val().length !== 0);
    var emailValid = isValidEmail($('#email-input').val());

    // Show/hide validation alerts
    $('#firstname-alert').toggle(!firstnameValid);
    $('#lastname-alert').toggle(!lastnameValid);
    $('#email-alert').toggle(!emailValid);

    // If all required fields are valid, go to next step
    if (firstnameValid && lastnameValid && emailValid) {
      // "tap" the relevant slider nav to skip to next slide
      $('.w-slider-nav div:nth-child(2)').trigger('tap');
      // Remove "active" class from all other elements
      $('[id^=step]').not('#step2link').removeClass('active');
      // Add the "active" class to the relevant menu link
      $('#step2link').addClass('active');
    }
  });








// Step 2

  $('#step2next').on('click', function() {
    // Check if required fields are valid
    var jobtitleValid = ($('#jobtitle-input').val().length !== 0);
    var departmentValid = ($('#department-input').val().length !== 0);
    var linemanagerValid = ($('#linemanager-input').val().length !== 0);
    var jobdescriptionValid = ($('#jobdescription-textarea').val().length !== 0);

    // Show/hide validation alerts
    $('#jobtitle-alert').toggle(!jobtitleValid);
    $('#department-alert').toggle(!departmentValid);
    $('#linemanager-alert').toggle(!linemanagerValid);
    $('#jobdescription-alert').toggle(!jobdescriptionValid);

    // Check if radio buttons are selected
    var seniorityValid = ($('input[name=senioritylevel]:checked').length > 0);
    var timewithcompanyValid = ($('input[name=timewithcompany]:checked').length > 0);

    // Show/hide validation alerts
    $('#senioritylevel-alert').toggle(!seniorityValid);
    $('#timewithcompany-alert').toggle(!timewithcompanyValid);

    // If all required fields are valid, go to next step
    if (jobtitleValid && departmentValid && linemanagerValid && jobdescriptionValid && seniorityValid && timewithcompanyValid) {
      // "tap" the relevant slider nav to skip to next slide
      $('.w-slider-nav div:nth-child(3)').trigger('tap');
      // Remove "active" class from all other elements
      $('[id^=step]').not('#step3link').removeClass('active');
      // Add the "active" class to the relevant menu link
      $('#step3link').addClass('active');
    }
  });

  // Add event listener to #step2prev button
  $('#step2prev').on('click', function() {
    // "tap" the relevant slider nav to go back to previous slide
    $('.w-slider-nav div:nth-child(1)').trigger('tap');
    // Remove "active" class from all other elements
    $('[id^=step]').not('#step1link').removeClass('active');
    // Add the "active" class to the relevant menu link
    $('#step1link').addClass('active');
  });












// Step 3

  // Add event listener to #step3next button
  $('#step3next').on('click', function() {
    // Check if required fields are valid
    var hoursContractedValid = ($('#hourscontracted-number').val().length !== 0);
    var actualHoursValid = ($('#actualhoursworked-number').val().length !== 0);

    // Show/hide validation alerts
    $('#hourscontracted-alert').toggle(!hoursContractedValid);
    $('#actualhoursworked-alert').toggle(!actualHoursValid);

    // Check if radio buttons are selected
    var hasContractedHoursValid = ($('input[name=hascontractedhours]:checked').length > 0);
    var timeWastedValid = ($('input[name=timewasted]:checked').length > 0);
    var timeInMeetingsValid = ($('input[name=timeinmeetings]:checked').length > 0);
    var meetingUpdateTimeValid = ($('input[name=meetingupdatetime]:checked').length > 0);
    var timeInEmailValid = ($('input[name=timeinemail]:checked').length > 0);
    var timeSpentSearchingValid = ($('input[name=timespentsearching]:checked').length > 0);

    // Show/hide validation alerts
    $('#hascontractedhours-alert').toggle(!hasContractedHoursValid);
    $('#timewasted-alert').toggle(!timeWastedValid);
    $('#timeinmeetings-alert').toggle(!timeInMeetingsValid);
    $('#meetingupdatetime-alert').toggle(!meetingUpdateTimeValid);
    $('#timeinemail-alert').toggle(!timeInEmailValid);
    $('#timespentsearching-alert').toggle(!timeSpentSearchingValid);

    // If all required fields are valid, go to next step
    if (hasContractedHoursValid && timeWastedValid && timeInMeetingsValid && meetingUpdateTimeValid && timeInEmailValid && timeSpentSearchingValid && hoursContractedValid && actualHoursValid) {
      // "tap" the relevant slider nav to skip to next slide
      $('.w-slider-nav div:nth-child(4)').trigger('tap');
      // Remove "active" class from all other elements
      $('[id^=step]').not('#step4link').removeClass('active');
      // Add the "active" class to the relevant menu link
      $('#step4link').addClass('active');
    }
  });

  // Add event listener to #step3prev button
  $('#step3prev').on('click', function() {
    // "tap" the relevant slider nav to go back to previous slide
    $('.w-slider-nav div:nth-child(2)').trigger('tap');
    // Remove "active" class from all other elements
    $('[id^=step]').not('#step2link').removeClass('active');
    // Add the "active" class to the relevant menu link
    $('#step2link').addClass('active');
  });











// Step 4

  // Add event listener to #step4next button
  $('#step4next').on('click', function() {
      // Check if required fields are valid
      var enpsScoreValid = ($('input[name=enpsscore]:checked').length > 0);
      var enpsMessageValid = ($('#enpsmessage-textarea').val().length !== 0);

      // Show/hide validation alerts
      $('#enpsscore-alert').toggle(!enpsScoreValid);
      $('#enpsmessage-alert').toggle(!enpsMessageValid);

      // If all required fields are valid, go to next step
      if (enpsScoreValid && enpsMessageValid) {
        // "tap" the relevant slider nav to skip to next slide
        $('.w-slider-nav div:nth-child(5)').trigger('tap');
        // Remove "active" class from all other elements
        $('[id^=step]').not('#step5link').removeClass('active');
        // Add the "active" class to the relevant menu link
        $('#step5link').addClass('active');
      }
    });

    // Add event listener to #step4prev button
    $('#step4prev').on('click', function() {
      // "tap" the relevant slider nav to go back to previous slide
      $('.w-slider-nav div:nth-child(3)').trigger('tap');
      // Remove "active" class from all other elements
      $('[id^=step]').not('#step3link').removeClass('active');
      // Add the "active" class to the relevant menu link
      $('#step3link').addClass('active');
    });
    
    
    

  
  // Step 5
  
  // Add event listener to #step5next button
  $('#step5next').on('click', function() {
    // Add validation for fields in step 5
    // ...

    // If all required fields are valid, go to next step
    if (true) { // Replace "true" with your validation logic
      // "tap" the the relevant slider nav to skip to next slide
      $('.w-slider-nav div:nth-child(6)').trigger('tap');
      // Remove "active" class from all other elements
      $('[id^=step]').not('#step6link').removeClass('active');
      // Add the "active" class to the relevant menu link
      $('#step6link').addClass('active');
    }
  });
  
  // Add event listener to #step5prev button
  $('#step5prev').on('click', function() {
    // "tap" the the relevant slider nav to go back to previous slide
    $('.w-slider-nav div:nth-child(4)').trigger('tap');
    // Remove "active" class from all other elements
    $('[id^=step]').not('#step4link').removeClass('active');
    // Add the "active" class to the relevant menu link
    $('#step4link').addClass('active');
  });

  
  
  
  
  
  
  
  
  // Step 6
  
  // Add event listener to #step6next button
  $('#step6next').on('click', function() {
    // Check if radio buttons are selected
    var sentimentValid = ($('input[name=sentiment]:checked').length > 0);
    var changeNeededValid = ($('input[name=changeneeded]:checked').length > 0);
    var changePossibleValid = ($('input[name=changepossible]:checked').length > 0);

    // Show/hide validation alerts
    $('#sentiment-alert').toggle(!sentimentValid);
    $('#changeneeded-alert').toggle(!changeNeededValid);
    $('#changepossible-alert').toggle(!changePossibleValid);

    // If all required fields are valid, go to next step
    if (sentimentValid && changeNeededValid && changePossibleValid) {
      // "tap" the relevant slider nav to skip to next slide
      $('.w-slider-nav div:nth-child(7)').trigger('tap');
      // Remove "active" class from all other elements
      $('[id^=step]').not('#step7link').removeClass('active');
      // Add the "active" class to the relevant menu link
      $('#step7link').addClass('active');
    }
  });

  // Add event listener to #step6prev button
  $('#step6prev').on('click', function() {
    // "tap" the relevant slider nav to go back to previous slide
    $('.w-slider-nav div:nth-child(5)').trigger('tap');
    // Remove "active" class from all other elements
    $('[id^=step]').not('#step5link').removeClass('active');
    // Add the "active" class to the relevant menu link
    $('#step5link').addClass('active');
  });
  
  
  
  
  
  
  
// Step 7  
  
  // Add event listener to #step7next button
  $('#step7next').on('click', function() {
    // Check if radio buttons are selected
    var zoomInstalledValid = ($('input[name=zoominstalled]:checked').length > 0);
    var hasAsanaLoginValid = ($('input[name=hasasanalogin]:checked').length > 0);
    var asanaCompetencyValid = ($('input[name=asanacompetency]:checked').length > 0);
    var asanaSentimentValid = ($('input[name=asanasentiment]:checked').length > 0);

    // Show/hide validation alerts
    $('#zoominstalled-alert').toggle(!zoomInstalledValid);
    $('#hasasanalogin-alert').toggle(!hasAsanaLoginValid);
    $('#asanacompetency-alert').toggle(!asanaCompetencyValid);
    $('#asanasentiment-alert').toggle(!asanaSentimentValid);

    // If all required fields are valid, submit the form
    if (zoomInstalledValid && hasAsanaLoginValid && asanaCompetencyValid && asanaSentimentValid) {
      $('#submit-btn').trigger('click');
    }
  });

  // Add event listener to #step7prev button
  $('#step7prev').on('click', function() {
    // "tap" the relevant slider nav to go back to previous slide
    $('.w-slider-nav div:nth-child(6)').trigger('tap');
    // Remove "active" class from all other elements
    $('[id^=step]').not('#step6link').removeClass('active');
    // Add the "active" class to the relevant menu link
    $('#step6link').addClass('active');
  });

  // Function to validate email format
  function isValidEmail(email) {
    // Regular expression to validate email format
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
});
