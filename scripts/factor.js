function solution(number) {

    //Instructions------

    //If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    //Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

    //Note: If the number is a multiple of both 3 and 5, only count it once.

    //Solution--If there is no remainder, add the number to the variable totalSum
    let totalSum = 0

    for (let i = 1; i < number; i++) {
        if ((i % 5) === 0 && (i % 3) === 0) {
            totalSum += i
        }
        else {

            if ((i % 5) === 0) {
                totalSum += i
            }
            else {
                if ((i % 3) === 0) {
                    totalSum += i
                }
            }
        }
    }

    return totalSum

}

//Get a handle to the button that will be clicked by the user
let sumButton = document.querySelector("#sum-btn")

//What to do when the user clicks the button
sumButton.addEventListener("click", () => {

    //Get the number placed in the input field by the user
    let inputFieldValue = document.querySelector("#untilthisnumber").value

    //Call the function to calculate the sum and store the value returned
    let theSum = solution(inputFieldValue)

    //Where should this value be shown to the user in the DOM?
    let whereShouldIPutIt = document.querySelector("#sum-result")

    //Wrap up the value of the sum in html and send it to be shown to the user in the DOM
    whereShouldIPutIt.innerHTML = `<h3> ${theSum} </h3>`

})