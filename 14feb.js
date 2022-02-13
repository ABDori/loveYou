document.querySelector('.target').addEventListener('click',function (e) {
      e.preventDefault();
      document.querySelector('.target').classList.add('hidden');

      document.querySelector('.heart').classList.add('visible')

      document.querySelector('.arrows').classList.add('fire')
});