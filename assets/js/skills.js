// get all element from DOM

const skills = document.getElementById('skills');
const numbers = document.querySelectorAll('.number');
const svgEl = document.querySelectorAll('svg circle');

let bol = false;

window.addEventListener('scroll', () => {
    if (pageYOffset > skills.offsetTop -600 && bol === false) {
        for (let i = 0; i < svgEl.length; i++) {
            let radius = svgEl[i].r.baseVal.value;
            let circumference = radius * 2 * Math.PI;
            svgEl[i].style.strokeDasharry = circumference;
            function setprogress(percent) {
                svgEl[i].style.strokeDashoffset = circumference - (percent / 100) * circumference;
                
            
            }
            const progress = numbers[i].dataset.num;

            numbers[i].innerHTML = progress + "%";
          
            

            setprogress(progress);

            
        
        }
     
    } else {
        for (let i = 0; i < svgEl.length; i++) {
            svgEl[i].style.strokeDasharry = 364;
            svgEl[i].style.strokeDashoffset = 364;
        }
    }
        
    });






 //const counters = Array(numbers.length);
    //     const intervals = Array(counters.length);
    //     counters.fill(0);

    //     numbers.forEach((number, index) => {
    //         intervals[index] = setInterval(() => {
    //             if (counters[index] === parseInt(number.dataset.num)) {
    //                 clearInterval(counters[index]);
    //             } else {
    //               counters[index] += 1;
    //                 number.innerHTML = counters[index] + "%";
    //                 svgEl[index].style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(number.dataset.num / 100));
                  
    //             }
    //         }, 20);
    //     });
    // } else {
        
    // }