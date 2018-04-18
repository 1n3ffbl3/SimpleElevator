// Your code here
/* This strategy doesn't work:

function simple_elevator(floor, button){
    let returner= 0;

    let potential_result = Number(button)- floor;
     
    let possible_results = [-3, -2, -1, 0, 1, 2, 3];
    for (let result of possible_results){
        if (result ===potential_result){   // see if possible_result is allowed             
        returner = potential_result;        //if it is, assigned it to returner
        }
        
    }
    

    return returner ;
}
*/ 

// This one works: 


function simple_elevator (floor, button){
    let returner= 0;
    let floor_is_valid = false;
    let button_is_valid = false;

    let possible_floors = [0, 1, 2, 3];
    for (let valid_floor of possible_floors){
        if(floor === valid_floor){
            floor_is_valid = true;
        }
    }

    
    let possible_buttons = ["0", "1", "2", "3"];
    for (let valid_button of possible_buttons){
        if(button === valid_button){
            button_is_valid = true;
        }
    }

    if (button_is_valid && floor_is_valid){
        returner = Number(button) - floor;
    }
    return returner; 
};
// Be sure it's the cleanest code you can write!