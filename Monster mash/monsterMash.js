class Monster{
    constructor(name, ability, size, powerLevel){
        this.name = name;
        this.ability = ability;
        this.size = size;
        this.powerLevel = powerLevel;
    }
    printMonster(){
        this.result = 'This monster name is: ' + this.name + '\nThis monster has the ability to: ' + this.ability;
        this.result = this.result + '\nThis frightful creature is ' +this.size + ' tall!\nThey have a tremendous powerlevel of: ' + this.powerLevel;
        console.log('monster printed');
        return this.result;
    }
}

generateMonsters = () =>{
    console.log('generating monsters');
    martin = new Monster('Martin Shkreli', 'financial fraud', '5 feet 7 inches', '17');
    document.getElementById('paragraph1').innerText = martin.printMonster();
    document.getElementById('paragraph2').innerText = martin.printMonster();
    document.getElementById('paragraph3').innerText = martin.printMonster();
}