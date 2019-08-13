class Computer {
  constructor(ramMemory, cpuGHz, hddMemory) {
    this.ramMemory = ramMemory;
    this.cpuGHz = cpuGHz;
    this.hddMemory = hddMemory;
    this.taskManager = [];
    this.installedPrograms = [];

    this.ramMemoryUsed = 0;
    this.cpuGHzUsed = 0;
  }

  installAProgram(name, requiredSpace) {
    if (requiredSpace > this.hddMemory) {
      throw new Error(`There is not enough space on the hard drive`);
    } else {
      let program = {name, requiredSpace};
      this.installedPrograms.push(program);
      this.hddMemory -= requiredSpace;
      return program;
    }
  }

  uninstallAProgram(name) {
    let program = this.installedPrograms.filter(p => p.name === name)[0];
    if (program === undefined) {
      throw new Error(`Control panel is not responding`);
    } else {
      let removeIndex = this.installedPrograms.indexOf(program);
      this.hddMemory += program.requiredSpace;
      this.installedPrograms.splice(removeIndex, 1);

      return this.installedPrograms
    }
  }

  openAProgram(name) {
    let programToOpen = this.installedPrograms.filter(p => p.name === name)[0];
    let programOpened = this.taskManager.filter(p => p.name === name)[0];
    if (programToOpen === undefined) {
      throw new Error(`The ${name} is not recognized`);
    } else if (programOpened !== undefined) {
      throw new Error(`The ${name} is already open`);
    } else {
      let programToOpenRamUsage = (programToOpen.requiredSpace / this.ramMemory) * 1.5;
      let programToOpenCpuUsage = ((programToOpen.requiredSpace / this.cpuGHz) / 500) * 1.5;

      if (this.ramMemoryUsed + programToOpenRamUsage > 100) {
        throw new Error(`${name} caused out of memory exception`);
      } else if (this.cpuGHzUsed + programToOpenCpuUsage > 100) {
        throw new Error(`${name} caused out of cpu exception`);
      } else {
        let program = {name, 'ramUsage': programToOpenRamUsage, 'cpuUsage': programToOpenCpuUsage};
        this.taskManager.push(program);
        
        this.ramMemoryUsed = this.ramMemoryUsed + programToOpenRamUsage;
        this.cpuGHzUsed = this.cpuGHzUsed + programToOpenCpuUsage;

        return program;
      }
    }
  }

  taskManagerView() {
    let result = '';
    if (this.taskManager.length === 0) {
      result = 'All running smooth so far';
    } else {
      for (let program of this.taskManager) {
        if (result.length > 0) {
          result += "\n"
        }
        result += `Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%`;
      }
    }

    return result;
  }
}

module.exports = Computer;

// let computer = new Computer(4096, 7.5, 250000);
//
// computer.installAProgram('Word', 7300);
// computer.installAProgram('Excel', 10240);
// computer.installAProgram('PowerPoint', 12288);
// computer.uninstallAProgram('Word');
// computer.installAProgram('Solitare', 1500);
// computer.openAProgram('Excel');
// computer.openAProgram('Solitare');
//
// console.log(computer.installedPrograms);
// console.log(('-').repeat(50)) // Separator
// console.log(computer.taskManager);


let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());

