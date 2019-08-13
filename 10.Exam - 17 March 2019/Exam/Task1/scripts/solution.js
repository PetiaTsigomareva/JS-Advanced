function solve() {
  let signMeUp = document.querySelector('[value=signMeUp]');
  signMeUp.addEventListener('click', () => {
    let courses = chooseCourses();
    let educationForm = chooseEducationForm();
    createMyCourses(courses);
    createTotalPrice(courses, educationForm);
  });

  function chooseCourses() {
    let result = [];
    let availableCoursesItems = document.querySelector('#availableCourses ul').children;

    if (availableCoursesItems[0].children[0].checked) {
      result.push('JS-Fundamentals');
    }
    if (availableCoursesItems[1].children[0].checked) {
      result.push('JS-Advanced');
    }
    if (availableCoursesItems[2].children[0].checked) {
      result.push('JS-Applications');
    }
    if (availableCoursesItems[3].children[0].checked) {
      result.push('JS-Web');
    }
    if (result.length === 4) {
      result.push('HTML and CSS');
    }
    return result;
  }

  function chooseEducationForm() {
    let result = '';
    let educationFormRadios = document.querySelectorAll('#educationForm [type=radio]');
    for (let i = 0, len = educationFormRadios.length; i < len; i++) {
      if (educationFormRadios[i].checked) {
        result = educationFormRadios[i].value;
      }
    }
    return result;
  }

  function createMyCourses(courseArr) {
    let myCoursesList = document.querySelector('#myCourses ul');

    //reset myCourses ul
    while (myCoursesList.firstChild) {
      myCoursesList.removeChild(myCoursesList.firstChild);
    }

    //create myCourses ul
    for (let i = 0; i < courseArr.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = courseArr[i];
      myCoursesList.appendChild(listItem);
    }

  }

  function createTotalPrice(arr, str) {
    let priceElement = document.querySelector('.courseFoot p');
    let totalPrice = calculateTotalPrice(arr, str);

    priceElement.textContent = `Cost: ${totalPrice} BGN`;

  }

  function calculateTotalPrice(arr, str) {
    let result = 0;
    let coursePrises = {
      JSFundamentals: 170,
      JSAdvanced: 180,
      JSApplications: 190,
      JSWeb: 490
    };
    for (let a of arr) {
      if (a === 'JS-Fundamentals') {
        result += coursePrises.JSFundamentals;
      }
      if (a === 'JS-Advanced') {
        result += coursePrises.JSAdvanced;
      }
      if (a === 'JS-Applications') {
        result += coursePrises.JSApplications;
      }
      if (a === 'JS-Web') {
        result += coursePrises.JSWeb;
      }
    }
    if (arr.includes('JS-Fundamentals') && arr.includes('JS-Advanced')) {

      result -= coursePrises.JSAdvanced * 0.1;
    }

    if (arr.includes('JS-Fundamentals') && arr.includes('JS-Advanced') && arr.includes('JS-Applications')) {

      result -= result * 0.06;

    }

    if (str === 'online') {
      result -= result * 0.06;
    }
    result = Math.floor(result).toFixed(2);
    return result;
  }

}

solve();