const stat = document.querySelectorAll(".stats span");

let speed = 200;

export const startCounter = () => {
    stat.forEach(stat => {
        let target = stat.dataset.count;
        let init = +stat.innerText;
        let increment = Math.floor(target / speed);

        function updateCount() {            

            init += increment;
            stat.innerText = init;

            if(init < target) {
                setTimeout(() => {updateCount()}, 5)
            }
            
        else {            
            stat.innerText = init.toLocaleString();
        }
        }

        updateCount();

    });
}