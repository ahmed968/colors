function getRandomColor() {
    
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }
  
  const changeColorButton = document.getElementById('changeColorButton');
  changeColorButton.addEventListener('click', function() {
    // Change the background color 
    document.body.style.backgroundColor = getRandomColor();
  });