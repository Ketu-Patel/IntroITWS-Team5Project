const textElement=document.getElementById('text')
const decisionButtonsElement = document.getElementById('decision-buttons')

let state = {}
var OxygenTanks =0;
function startGame(){
    state={}
    showTextNode(1);
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while(decisionButtonsElement.firstChild){
        decisionButtonsElement.removeChild(decisionButtonsElement.firstChild)
    }

    textNode.decisions.forEach(decision => {
        if(showDecision(decision)){
            const button = document.createElement('button')
            button.innerText = decision.text
            button.classList.add('decisionbtn')
            button.addEventListener('click',() => selectDecision(decision))
            decisionButtonsElement.appendChild(button)
        }
    });
}

function showDecision(decision){
    return decision.requiredState == null || decision.requiredState(state);
}

function selectDecision(decision){
    const nextTextNodeId = decision.nextText
    state = Object.assign(state, decision.setState)
    showTextNode(nextTextNodeId)
}
const textNodes = [
    {
        id: 1,
        text: 'The ship is crashing onto Mars. It is falling at high speed. The outer shell is increasing the heat. What do you do?',
        decisions: [
            {
                text:'Salvage the ship and turn on the thrusters',
                setState:{nothing:true},
                nextText: 2
                
            },
            {
                text:'Jump out',
                setState:{nothing:true},
                nextText: 3
            },
            {
                text:'Leave without searching the wreckage',
                nextText: 4
            }            
        ]            
    },

    {
        id: 2,
        text: 'You fire up the thrusters, hopefully to prevent your ship from becoming wreckage. You sustain a hard landing, but your ship is still in One piece. You find out that the ship can no longer fly and decide to take everything that you can carry, which include  a lot of oxygen tanks, the data storage device, and a portable transmitter for low orbit communication.',
        decisions: [
            {
                text:'Move On',
                nextText: 4
            }   
        ]            
    },
    {
        id: 3,
        text: 'You hit the emergency hatch and jump out. You manage to activate your parachute and land safely onto the ground. However, your ship falls onto the martian surface with a kaboom. You don’t believe that it made the fall',
        decisions: [
            {
                text:'Search the ship for supplies',
                setState:{nothing:true},
                nextText: 5
            },
            {
                text:'Leave without searching the wreckage',
                setState:{nothing:true},
                nextText: 6
            }
        ]            
    },
    {
        id: 5,
        text: 'You manage to find nothing of value except for a few spare oxygen tanks and a functional storage device, which you store with you.',
        decisions: [
            {
                text:'Move On',
                nextText: 4
            }
        ]            
    },
    {
        id: 6,
        text: 'You believe that you should conserve your oxygen in search for another ship that is on Mars instead of looking',
        decisions: [
            {
                text:'Move On',
                nextText: 4
            }                     
        ]            
    },


]

startGame()