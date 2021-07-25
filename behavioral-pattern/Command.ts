/**
 * Command pattern
 *
 * Execute and undo
 *
 * Ex: undo action in queue
 *
 */

interface ICommand {
  execute(): void;
  undo(): void;
}

class Commander {
  private readonly turnOnCommand: ICommand;
  private readonly turnOffCommand: ICommand;

  constructor(turnOn: ICommand, turnOff: ICommand) {
    this.turnOnCommand = turnOn;
    this.turnOffCommand = turnOff;
  }

  turnOnButtonClick(): void {
    this.turnOnCommand.execute();
  }
  turnOffButtonClick(): void {
    this.turnOffCommand.execute();
  }
}

class Reciever {
  turnOn(): void {
    console.log("Turn on...........");
  }
  turnOff(): void {
    console.log("Turn off...........");
  }
}

class TurnOnCommand implements ICommand {
  private readonly receiver: Reciever;
  constructor(receiver: Reciever) {
    this.receiver = receiver;
  }
  execute(): void {
    this.receiver.turnOn();
  }
  undo(): void {
    this.receiver.turnOff;
  }
}
class TurnOffCommand implements ICommand {
  private readonly receiver: Reciever;
  constructor(receiver: Reciever) {
    this.receiver = receiver;
  }
  execute(): void {
    this.receiver.turnOn();
  }
  undo(): void {
    this.receiver.turnOff;
  }
}

let receiver = new Reciever();

let turnOnCommand: ICommand = new TurnOnCommand(receiver);
let turnOffCommand: ICommand = new TurnOffCommand(receiver);

let commander = new Commander(turnOnCommand, turnOffCommand);

commander.turnOnButtonClick();
commander.turnOffButtonClick();
