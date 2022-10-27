function showPage(quiz1_94) {

    const p = document.querySelector('.show-quiz1-answer');
    console.log('p', p);

    switch(quiz1_94) {
        case 1:
            p.innerHTML = `<iframe src="./cards/card_94.html" width="100%" height="100%" />`
            break;
       case 2:
        p.innerHTML = `<iframe src="./cards/card2_94.html" width="100%" height="100%" />`
         break;
    }

}