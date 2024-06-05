const game_container = document.querySelector('.container'),
    user_result = document.querySelector('.userResult img'),
    cpu_result = document.querySelector('.cpuResult img'),
    result = document.querySelector('.result'),
    option_images = document.querySelectorAll('.image');

// console.log(game_container, user_result, cpu_result, result, option_images);

option_images.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");


        option_images.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active")
        })

        //Get the source of the clicked option image
        let imageSrc = e.target.querySelector('img').src;
        user_result.src = imageSrc;

        //generate random number in beetween 0 - 2

        let randomNumber = Math.floor(Math.random() * 3)

        let cpuImages = ["./Images/rock.png", "./Images/paper.png", "./Images/scissors.png"]
        cpu_result.src = cpuImages[randomNumber]

        // Assign letter value to the cpu option (R-Rock, P-Paper, S-Scissors)
        let cpuValue = ['R', 'P', 'S'][randomNumber]

        // Assign letter value to the clicked option (based on index)
        let userValue = ['R', 'P', 'S'][index]

        //create an object all possible outcome.
        let outcome = {
            RR: 'Draw',
            RP: 'Computer',
            RS: 'User',
            PP: 'Draw',
            PR: 'User',
            PS: 'Computer',
            SS: 'Draw',
            SR: 'Computer',
            SP: 'User'
        };

        let outcomeValue = outcome[userValue + cpuValue]
        console.log(outcomeValue);

        //display the result
        result.textContent = userValue === cpuValue ? `Match Draw` : `${outcomeValue} Won!`
    })
})
