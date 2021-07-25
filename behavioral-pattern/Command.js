/**
 * Command pattern
 *
 * Execute and undo
 *
 * Ex: undo action in queue
 *
 */
var Commander = /** @class */ (function () {
    function Commander(turnOn, turnOff) {
        this.turnOnCommand = turnOn;
        this.turnOffCommand = turnOff;
    }
    Commander.prototype.turnOnButtonClick = function () {
        this.turnOnCommand.execute();
    };
    Commander.prototype.turnOffButtonClick = function () {
        this.turnOffCommand.execute();
    };
    return Commander;
}());
var Reciever = /** @class */ (function () {
    function Reciever() {
    }
    Reciever.prototype.turnOn = function () {
        console.log("Turn on...........");
    };
    Reciever.prototype.turnOff = function () {
        console.log("Turn off...........");
    };
    return Reciever;
}());
var TurnOnCommand = /** @class */ (function () {
    function TurnOnCommand(receiver) {
        this.receiver = receiver;
    }
    TurnOnCommand.prototype.execute = function () {
        this.receiver.turnOn();
    };
    TurnOnCommand.prototype.undo = function () {
        this.receiver.turnOff;
    };
    return TurnOnCommand;
}());
var TurnOffCommand = /** @class */ (function () {
    function TurnOffCommand(receiver) {
        this.receiver = receiver;
    }
    TurnOffCommand.prototype.execute = function () {
        this.receiver.turnOn();
    };
    TurnOffCommand.prototype.undo = function () {
        this.receiver.turnOff;
    };
    return TurnOffCommand;
}());
var receiver = new Reciever();
var turnOnCommand = new TurnOnCommand(receiver);
var turnOffCommand = new TurnOffCommand(receiver);
var commander = new Commander(turnOnCommand, turnOffCommand);
commander.turnOnButtonClick();
commander.turnOffButtonClick();
