
document.addEventListener('DOMContentLoaded', function() {
   
  let colorBox = document.getElementById('color-box');
  let changeColorBtn = document.getElementById('change-color-btn');
  
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
   
    changeColorBtn.addEventListener('click', function() {
        let randomColor = getRandomColor(); 
        colorBox.style.backgroundColor = randomColor; 
    });
});
