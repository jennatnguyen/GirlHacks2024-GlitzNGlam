var state = {
    shirt_state: 0,
    pants_state: 0,
    shoes_state: 0,
    model_state: 1 // 1 for base_model initially
};

function init() {
    state.shirt_state = 0;
    state.pants_state = 0;
    state.shoes_state = 0;
    updateModel(); // Set initial model on page load
}

// Holds the current state of clothes
window.onload = init;

function nextshirt() {
    var shirt = document.getElementById("shirt");
    
    // Update shirt class based on current shirt state
    switch (state.shirt_state) {
        case 0:
            shirt.setAttribute("class", "shirt1");
            state.shirt_state++;
            modelUpdate(0); // Set to no arms model for shirt1
            break;
        case 1:
            shirt.setAttribute("class", "shirt2");
            state.shirt_state++;
            modelUpdate(0); // Set to no arms model for shirt2
            break;
        case 2:
            shirt.setAttribute("class", "shirt3");
            state.shirt_state++;
            modelUpdate(1); // Set to base model for shirt3
            break;
        case 3:
            shirt.setAttribute("class", "shirt4");
            state.shirt_state++;
            modelUpdate(1); // Set to base model for shirt4
            break;
        case 4:
            shirt.setAttribute("class", "shirt5");
            state.shirt_state++; // Reset to 0 for cycling
            modelUpdate(1); // Set to base model for shirt5
            break;
        case 5:
            shirt.setAttribute("class", "shirt6");
            state.shirt_state = 0; // Reset to 0 for cycling
            modelUpdate(1); // Set to base model for shirt5
            break;
}
}

// Update the model based on the shirt selected
function modelUpdate(shirtType) {
    var model = document.getElementById("model");
    if (shirtType === 0) {
        model.setAttribute("class", "base_no_arms"); // No arms model
    } else {
        model.setAttribute("class", "base_model"); // Base model
    }
}

// Ensure the model is set correctly when the page loads
function updateModel() {
    var model = document.getElementById("model");
    model.setAttribute("class", "base_model"); // Start with base_model
}

function nextshoes() {
    var shoes = document.getElementById("shoes");
    
    // Increment the shoes state and wrap around if it exceeds 9
    state.shoes_state = (state.shoes_state + 1) % 10; 
    
    // Set the class of the shoes element based on the current shoes state
    shoes.setAttribute("class", "shoes" + (state.shoes_state + 1)); // Class will be shoe1 to shoe10
}

function nextpants() {
    var pants = document.getElementById("pants");
    
    // Increment the pants state and wrap around if it exceeds 4
    state.pants_state = (state.pants_state + 1) % 5; 
    
    // Set the class of the pants element based on the current pants state
    pants.setAttribute("class", "pants" + (state.pants_state + 1)); // Class will be pants1 to pants5
}
