const myImages  = ['myImage1', 'myImage2', 'myImage3'];
let angle = 0;

function animateImages() {
    for (let i = 0; i < myImages.length; i++) {
      const image = document.getElementById(myImages[i]);
      let angle = 0;
  
      setInterval(() => {
        angle += 1; // Increment the angle or desired property value
        const newX = Math.sin(angle * (Math.PI / 180)) * 4; // Calculate new X position
        const newY = Math.cos(angle * (Math.PI / 180)) * 4; // Calculate new Y position
        image.style.transform = `translate(${newX}px, ${newY}px)`; // Update the image's position
      }, 10); // Adjust the interval based on your desired animation speed
    }
  }
  
  animateImages();

  const myBtn  = ['share-btn1', 'share-btn2'];

  for (let i = 0; i <  myBtn.length; i++) {
    const btn = document.getElementById(myBtn[i])
    btn.addEventListener('click', () =>{
        
        console.log("Button 1 clicked!");
        if (i === 0) {
            document.getElementById('profile').style.visibility = "hidden";
            document.getElementById('myIcons').style.visibility = "visible";
            console.log("Button 2 clicked!");
          }

          if (i === 1){
            document.getElementById('profile').style.visibility = "visible";
            document.getElementById('myIcons').style.visibility = "hidden";
          }
    })
  }

//   const buttons = document.getElementsByClassName('myButton');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function() {
//     if (i === 1) {
//       // Perform the action when the second button is clicked
//       console.log("Button 2 clicked!");
//     }
//   });
// }
