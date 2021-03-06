/**
 * A JavaScript file to handle interaction from the user during the game and update the feed
 *
 *
 *
 * @author Louis Evans. 
 * @since  20/2/2020
 */


const emo = document.getElementById('emo');
// handle different input from the user
emo.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = localStorage.getItem("lengthFeed");

  firebase.database().ref().child('feed').update({
      [len]:"Player " + name + " : " +"🗿"
  });
  console.log('real time database updated with emoji');


});


const emo1 = document.getElementById('emo1');


emo1.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = parseInt(localStorage.getItem("lengthFeed"));

  firebase.database().ref().child('feed').update({
      [len]:"Player " + name + " : " +"😢"
  });
  console.log('real time database updated with emoji');


});


const emo2 = document.getElementById('emo2');


emo2.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = parseInt(localStorage.getItem("lengthFeed"));

  firebase.database().ref().child('feed').update({
      [len]:"Player " + name + " : " +"👀"
  });
  console.log('real time database updated with emoji');


});


const emo3 = document.getElementById('emo3');


emo3.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = parseInt(localStorage.getItem("lengthFeed"));

  firebase.database().ref().child('feed').update({
      [len]:"Player " + name + " : " +"👎"
  });
  console.log('real time database updated with emoji');


});


const emo4 = document.getElementById('emo4');


emo4.addEventListener('click', e => {
  var name = localStorage.getItem("studentName");
  var len = parseInt(localStorage.getItem("lengthFeed"));



  firebase.database().ref().child('feed').update({

      [len]:"Player " + name + " : " +"👍"
  });
  console.log('real time database updated with emoji');


});
