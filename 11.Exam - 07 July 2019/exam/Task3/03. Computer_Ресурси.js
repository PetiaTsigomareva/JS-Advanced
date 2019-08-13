class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = []

        this.ramMemoryUsed = 0
        this.cpuGHzUsed = 0
    }

    findInArray(name, arr) {
        let programFound = arr.find(function (installedPrograms) {
            return name === installedPrograms.name
        })
        return programFound
    }

    installAProgram(name, requiredSpace) {
        if (requiredSpace > this.hddMemory) {
            throw "There is not enough space on the hard drive"
        } else {
            let program = {'name': name, 'requiredSpace': requiredSpace}
            this.installedPrograms.push(program)
            this.hddMemory = this.hddMemory - requiredSpace
            return program
        }
    }

    uninstallAProgram(name) {
        let programToUninstall = this.findInArray(name, this.installedPrograms)

        if (programToUninstall === undefined) {
            throw "Control panel is not responding"
        } else {
            this.hddMemory = this.hddMemory + programToUninstall.requiredSpace
            this.installedPrograms = this.installedPrograms.filter(function (ele) {
                return ele != programToUninstall;
            })
            return this.installedPrograms
        }
    }

    openAProgram(name) {
        let programToOpen = this.findInArray(name, this.installedPrograms)
        let programOpened = this.findInArray(name, this.taskManager)

        if (programToOpen === undefined) {
            throw `The ${name} is not recognized`
        } else if (programOpened !== undefined) {
            throw `The ${name} is already open`
        } else {
            let programRamUsage = ((programToOpen.requiredSpace / this.ramMemory) * 1.5)
            let programCpuUsage = (((programToOpen.requiredSpace / this.cpuGHz) / 500) * 1.5)

            if (this.ramMemoryUsed + programRamUsage > 100) {
                throw `${name} caused out of memory exception`
            } else if (this.cpuGHzUsed + programCpuUsage > 100) {
                throw `${name} caused out of cpu exception`
            } else {
                let program = {'name': name, 'ramUsage': programRamUsage, 'cpuUsage': programCpuUsage}
                this.taskManager.push(program)
                this.ramMemoryUsed = this.ramMemoryUsed + programRamUsage
                this.cpuGHzUsed = this.cpuGHzUsed + programCpuUsage
                return program
            }
        }
    }

    taskManagerView() {
        if (this.taskManager.length == 0) {
            return "All running smooth so far"
        } else {
            let result = ""
            this.taskManager.forEach(function (e) {
                let cpu = Math.round(e.cpuUsage)
                let ram = Math.round(e.cpuUsage)

                if (result.length > 0) {
                    result += "\n"
                }

                result += `Name - ${e.name} | Usage - CPU: ${cpu}%, RAM: ${ram}%`
            });
            return result
        }
    }
}


let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
computer.openAProgram('Solitare');

console.log(computer.installedPrograms);
console.log(('-').repeat(50)) // Separator
console.log(computer.taskManager);

computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());