// Zero Test - Task Manager View

// arrange
const assert = require('chai').assert;
const Computer = require('../../Task3/Task3');
describe('test computer class', function () {
  it('test taskManagerView, should return correct message', function () {
    let computer = new Computer(4096, 7.5, 250000);

// act
    computer.installAProgram('Word', 7300);
    computer.installAProgram('Excel', 10240);
    computer.installAProgram('PowerPoint', 12288);
    computer.installAProgram('Solitare', 1500);

    computer.openAProgram('Word');
    computer.openAProgram('Excel');
    computer.openAProgram('PowerPoint');
    computer.openAProgram('Solitare');

    let actualResult = computer.taskManagerView();
    let expectedResult = `Name - Word | Usage - CPU: 3%, RAM: 3%
Name - Excel | Usage - CPU: 4%, RAM: 4%
Name - PowerPoint | Usage - CPU: 5%, RAM: 5%
Name - Solitare | Usage - CPU: 1%, RAM: 1%`;

// assert

    assert.equal(actualResult, expectedResult, "The Task Manager View is INVALID");
  });

});
