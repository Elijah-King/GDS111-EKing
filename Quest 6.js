class player {
    constructor() {
        this.health = 0;
        this.weapon = '';
        this.armor = 0;
        this.name = '';
    }
  sethealth(){
    this.health = 100;
  }
gethealth(){
    return this.health;
}
setweapon( SuperShotgun){
this.weapon = SuperShotgun
}
getweapon() {
    return this.weapon;
}
setarmor() {
    this.armor = 50;
}
getarmor() {
    return this.armor;
}
setname(Doomguy) {
    this.name = Doomguy  
}
getname() {
    return this.name;
}

}

//Creating Object Doomguy

const Doomguy = new player(30,50)
Doomguy.sethealth(30);
Doomguy.setweapon('SuperShotgun');
Doomguy.setarmor(50);
Doomguy.setname('Doomguy');
console.log('Health level =' + Doomguy.gethealth());
console.log('Weapon held =' + Doomguy.getweapon()); 
console.log('armor level =' + Doomguy.getarmor());
console.log('name =' + Doomguy.getname());
