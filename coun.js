const increaseButtonE1 = document.querySelector(".counter_button--increase");
const decreaseButtonE1 = document.querySelector(".counter_button--decrease");
const resetButtonE1 = document.querySelector(".counter_reset-button");
const counterValueE1 = document.querySelector(".counter_value");
const titleE1 = document.querySelector(".counter_title");
const container = document.querySelector(".counter");

let count = 0;

const MAX_LIMIT = 5;
const MIN_LIMIT = -15;

// ⭐ UI update
function updateUI() {
    counterValueE1.textContent = count;
}

// ⭐ main logic
function updateCounter(change) {

    // 👉 limit check (max)
    if (count === MAX_LIMIT && change === 1) {
        titleE1.textContent = "LIMIT! BUY PRO FOR > 5";
        container.classList.add("limit-reached");
        return;
    }

    let newValue = count + change;

    //  max limit
    if (newValue > MAX_LIMIT) {
        newValue = MAX_LIMIT;
    }

    // min limit (-15)
    if (newValue < MIN_LIMIT) {
        newValue = MIN_LIMIT;
    }

    count = newValue;
    updateUI();
}

//  Increase button
increaseButtonE1.addEventListener("click", () => updateCounter(1));

//  Decrease button (SPECIAL BUTTON)
decreaseButtonE1.addEventListener("click", () => updateCounter(-1));

// Reset
resetButtonE1.addEventListener("click", function () {
    count = 0;
    updateUI();
    titleE1.textContent = "Fancy Counter";
    container.classList.remove("limit-reached");
});


// KEYBOARD CONTROL (IMPORTANT PART)
document.addEventListener("keydown", function (e) {

    //  minus key OR ArrowDown = decrement
    if (e.key === "-" || e.key === "ArrowDown") {
        updateCounter(-1);
    }

    //  baqi keys = increase
    else {
        updateCounter(1);
    }

});