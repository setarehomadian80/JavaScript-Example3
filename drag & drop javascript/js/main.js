   const btn = document.querySelector('button')
    const Drag1 = document.querySelector('.Drag1')
    const Drag2 = document.querySelector('.Drag2')
    const content = document.querySelector('.content')
    const Drop = document.querySelector('.Drop')

    let DropTop = Drop.offsetTop
    let DropLeft = Drop.offsetLeft
    console.log(DropTop);
    console.log(DropLeft);

    btn.addEventListener('click', () => {
        if (content.style.display === 'block') {
            content.style.display = 'none'
        } else {
            content.style.display = 'block'

        }
    })

    ////////////////////


    function makeDraggable(element) {
        let startX, StartY;


        const saveStartPosition = () => {
            startX = element.offsetLeft
            startY = element.offsetTop
        }
        ///////////////
        const move = (e) => {
            let x = e.clientX
            let y = e.clientY
            element.style.left = x + 'px'
            element.style.top = y + 'px'

        };
        ////////////////
        const stop = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', stop);

            const DropRect = Drop.getBoundingClientRect();
            const elRect = element.getBoundingClientRect();
            const contentRect = content.getBoundingClientRect();

            const isInside =
                elRect.left >= DropRect.left &&
                elRect.right <= DropRect.right &&
                elRect.top >= DropRect.top &&
                elRect.bottom <= DropRect.bottom;

            if (isInside) {

                const contentX = contentRect.left + window.scrollX;
                const contentY = contentRect.top + window.scrollY;

                element.style.left = contentX + 'px';
                element.style.top = contentY + 'px';
                element.style.border = '2px solid red';
                element.style.backgroundColor = 'white';


                element.style.border = '2px solid red';
                element.style.backgroundColor = 'white';

            } else {
                element.style.left = startX + 'px';
                element.style.top = startY + 'px';
                element.style.backgroundColor = '';

            }


        };

        element.addEventListener('mousedown', () => {
            /////////////
            saveStartPosition();
            /////////وقتی موس رو می‌گیری و می‌کشی، ممکنه موس از روی خود المنت خارج بشه 
            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', stop);
        })
    }
    makeDraggable(Drag1);
    makeDraggable(Drag2);