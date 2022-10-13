function change(index) {

    const p = document.querySelector('.show-classdemo');
    console.log('p', p);
    switch(index){
        case 1:
          p.innerHTML = `<iframe src="./demo/w01_94" 
          width="100%" height="100%"/>`
          break;
        case 2:
            p.innerHTML = `<iframe src="./demo/w02_94/card_94.html" 
            width="100%" height="100%"/>`
          break;
        case 3:
            p.innerHTML = `<iframe src="./demo/w04_94/blog_94.html" 
            width="100%" height="100%"/>`
          break;
        case 4:
            p.innerHTML = `<iframe src="./demo/w06_94/blog_94.html" 
            width="100%" height="100%"/>`
          break;
    }

}