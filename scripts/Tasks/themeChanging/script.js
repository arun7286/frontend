const theme = document.getElementById("body");
const mode = document.getElementById("mode");
mode.addEventListener('click', () => {
   if (theme.style.backgroundColor === 'white') {
      theme.style.backgroundColor = '#373737';
      theme.style.color = 'white';

      //mode.textContent = 'Light Mode';

      mode.style.backgroundColor = 'white';
      mode.style.color = 'black';
   }
   else {
       theme.style.backgroundColor = 'white';
       theme.style.color = 'black';

       //mode.textContent = 'Dark Mode';

       mode.style.backgroundColor = '#373737';
       mode.style.color = 'white';
   }

});