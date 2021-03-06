'use strict';

const successSignUp = () => {
  $('#modal-sign-up').hide();
  $('#sign-up-status').text("Sign-Up Successful!");
  $('#sign-in-status').empty();
  $("input[type=text], input[type=password]").val("");
};

const failureSignUp = () => {
  $('#sign-up-status').text("Sign-Up Fail! Please try again!");
  $('#sign-in-status').empty();
  $("input[type=text], input[type=password]").val("");
};

const successSignIn = () => {
  $('#modal-sign-up').hide();
  $('.sign-in-up').hide();
  $('.btn-change-password').show();
  $('#sign-out').show();
  $('#create-game').show();
  $('.gameboard').show();
  $('.btn-create-question').show();
  $('.question-index').empty();
  $('#sign-up-status').empty();
  $('#question-status').empty();
  $('#sign-up-status').empty();
  $('#show-questions').show();
  $('#create-question').show();
  $('#show-user-questions').show();
  $('#sign-in-status').empty();
  $('#end-game').show();
  $("input[type=text], input[type=password]").val("");
  $('h2').show();
  $('h2').text('To Begin the Game, Please click New Game.');


};

const failureSignIn = () => {
  $('#sign-in-status').text("Invalid Email/Password! Please try again");
  $('#sign-up-status').empty();
  $("input[type=text], input[type=password]").val("");
};

const successSignOut = () => {
  $('#sign-in-status').empty();
  $('h2').empty();
  $('.btn-change-password').hide();
  $('#sign-out').hide();
  $('.answers').hide();
  $('.gameboard').hide();
  $('.cells').empty();
  $('#create-game').hide();
  $('#create-question').hide();
  $('#show-questions').hide();
  $('#close-questions').hide();
  $('#show-user-questions').hide();
  $('.btn-create-question').hide();
  $('#close-user-questions').hide();
  $('#modal-sign-up').show();
  $('.sign-in-up').show();
  $('#modal-sign-up').show();
  $('#change-password-status').text("Change Password!");
  $('#winner').empty();
  $('.question-index').empty();
  $('#question-status').empty();
  $('#end-game').hide();
  $('.cells').off('click');
  $('#close-game').hide();
};

const successChangePassword = () => {
  $('#change-password-status').text("Change Password Successfully!");
  $("input[type=password]").val("");
};

const failureChangePassword = () => {
  $('#change-password-status').text("Failed! Please try again!");
  $("input[type=password]").val("");
};

const success = () => {

};

const failure = () => {

};

module.exports = {
  success,
  failure,
  successSignUp,
  failureSignUp,
  successSignIn,
  failureSignIn,
  successSignOut,
  successChangePassword,
  failureChangePassword
};
