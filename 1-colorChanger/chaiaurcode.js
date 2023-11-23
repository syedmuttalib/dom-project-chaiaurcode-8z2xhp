const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  //Each button adding event listner
  btn.addEventListener('click', (e) => {
    //  console.log(e)
    //  console.log(e.target.id)
    //we can use if also
    let validate = e.target.id;
    switch (validate) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      default:
        console.log('');
    }
  });
});
