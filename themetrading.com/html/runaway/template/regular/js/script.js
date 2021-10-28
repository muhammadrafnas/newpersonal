$(document).ready(function () {
    $('#namecheck').hide();
    $('#namecheck1').hide();
    $('#subjectcheck').hide();
    $('#messagecheck').hide();
    $('#emailcheck').hide();
    $('#emailcheck1').hide();

  });
  function validateName() {
    let nameValue = $('#name').val();
    var re = /^[A-Za-z]+$/;
    if (re.test(nameValue) == true) {
      return true;
    } else if (nameValue.length == '') {
      $('#namecheck').show();
      return false;
    } else {
      $('#namecheck').hide();
      $('#namecheck1').show();
      return false;
    }

  }
  function validateSubject() {
    let subjectValue = $('#subject').val();
    if (subjectValue.length == '') {
      $('#subjectcheck').show();
      return false;
    }
    return true;
  }
  function validateMessage() {
    let messageValue = $('#message').val();
    if (messageValue.length == '') {
      $('#messagecheck').show();
      return false;
    }
    return true;
  }
  function validateEmail() {
    let emailValue = $('#email').val();
    let regex =
      /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (regex.test(emailValue) == true) {
      return true;
    } else if (emailValue.length == '') {
      $('#emailcheck').show();
      return false;
    } else {
      $('#emailcheck').hide();
      $('#emailcheck1').show();
      return false;
    }

  }


  $("#submit-form").submit((e) => {
    e.preventDefault();
    $('#namecheck').hide();
    $('#namecheck1').hide();
    $('#subjectcheck').hide();
    $('#messagecheck').hide();
    $('#emailcheck').hide();
    $('#emailcheck1').hide();
    if (validateName() == false || validateEmail() == false || validateSubject() == false || validateMessage() == false) {
      return;

    }
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbymVT0Pe23phveG7GbS0HdotgRUGdFm19liN2Fw2kKblmOt8xDv/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully")
        window.location.reload()
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")

      }
    });

  });