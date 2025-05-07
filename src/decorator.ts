function connection (constructor: Function) {
    console.log('Connection decorator called');
    console.log(constructor);
    // You can modify the constructor or add properties/methods to it here
    // For example, you can add a static method to the class
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting in DOM...');
    }
}   
@connection
class ProfileComponent{
}