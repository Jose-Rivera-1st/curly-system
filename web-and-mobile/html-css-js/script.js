window.addEventListener("load" , function ()
{
    //Get click element references.
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = document.getElementById("click-button");
    // Counter value.
    let counter = 0;

    // Click button function.
    let clickButtonFunction =  funciton = function ()
    {
        //Increament counter.
        counter++;

        // Update counter value.
        clickCounterElement.innerHTML = counter;
    };

    //Attack button function. 
    clickButtonElement.addEventListener("click", clickButtonFunction);
});