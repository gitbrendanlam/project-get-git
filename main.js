// document.addEventListener('DOMContentLoaded', () => {
//     const body = document.querySelector('body');
//     const title = document.createElement('h1');
//     title.innerText = "Get Git";
//     body.appendChild(title);
  
//     const codeButton = document.getElementById(':r5:');
//     codeButton.style.color = "white";
    
//   })
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const title = document.createElement('h1');
    title.innerText = "Get Git";
    body.appendChild(title);
  

    const codeButton = document.getElementById(':r12:')
    codeButton.addEventListener('click', () => {
        codeButton.style.color = "red"
    })
    
    // fetch('https://github.com/gitbrendanlam/project-get-git/tree/main')
    //   .then( response => response.text())
    //   .then(response => {console.log(response)});
      // .then( (responseText) => {
      //   const doc = new DOMParser().parseFromString(responseText, 'text/html');
      //   const codeButton = doc.getElementById(':r5:');
      //   codeButton.style.color = 'white';
      //   console.log('accessed site');
      // })
    
  })
  