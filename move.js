function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, handleDirectionChange){
        let direction = null;                           // = null since it will change whenever we click we keep it at null so when not changing directions our character stands still
        let x = left;                                   // kinda like parameters such as move(100,250)
        let y = bottom;                                 //then it means move x by 100 and move y by 250
    
        element.style.left = x + 'px'                   // always include the px so we know how much distance
        element.style.bottom = y + 'px'                 // without code wouldn't work
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)       //moves character every millisecond
        
        document.addEventListener('keydown', function(e){   //function(e) is an object containing details baout the event that fired
            if(e.repeat) return;                            //so function(e) checks what key is being pressed and depending on the value of the key - that changes the characters direction
                                                            //(e.repeat) firest mutliple times as long as user holds the key
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            handleDirectionChange(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null                                //lets our character stand still if no key is being pressed
            handleDirectionChange(direction)
        })
    }
    
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}