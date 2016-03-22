import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe ({
  name: "done",
  pure: false
})

// By setting pure to true, this becomes a stateless pipe, which basically means that it transforms input to output and then the pipe doesn't do anything or store anything until we tell it to. But declaring a pipe to be stateful tells Angular to check and see if the output of the pipe has changed after each change detection cycle, this causes it to update as soon as we have changed something about a task.

export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredDoneState = args[0];
    if(desiredDoneState === "done") {
      return input.filter((task) =>  {
        return task.done;
      });
    } else if (desiredDoneState === "notDone") {
      return input.filter((task) => {
        return !task.done;
      });
    } else  {
      return input;
    }
  }
}
