function mySolution() {
  let inputSectionElement = document.getElementById('inputSection');
  let textAreaElement = inputSectionElement.children[0];
  let divInputSectionElement = inputSectionElement.children[1];

  let imgInputSectionElement = divInputSectionElement.children[0];
  let img = imgInputSectionElement.getAttribute('src');
  let inputUserName = divInputSectionElement.children[1];
  let sendBtn = divInputSectionElement.children[2];
  sendBtn.addEventListener('click', sendQuestion);

  function sendQuestion() {
    createPendingQuestion(inputUserName.value, textAreaElement.value);
  }

  function createPendingQuestion(name, question) {
    let divPendingQuestion = document.getElementById('pendingQuestions');

    let divQuestion = document.createElement('div');
    divQuestion.setAttribute('class', 'pendingQuestion');

    let img = document.createElement('img');
    img.setAttribute('src', './images/user.png');
    img.setAttribute('width', '32');
    img.setAttribute('height', '32');

    let span = document.createElement('span');
    if (name === '') {
      span.textContent = 'Anonymous';
    } else {
      span.textContent = name;
    }

    let p = document.createElement('p');
    p.textContent = question;

    let divAction = document.createElement('div');
    divAction.setAttribute('class', 'actions');

    let archiveBtn = document.createElement('button');
    archiveBtn.setAttribute('class', 'archive');
    archiveBtn.textContent = 'Archive';
    archiveBtn.addEventListener('click', () => {
      divQuestion.remove();
    });

    let openBtn = document.createElement('button');
    openBtn.setAttribute('class', 'open');
    openBtn.textContent = 'Open';
    openBtn.addEventListener('click', () => {

      openQuestion(span.textContent, p.textContent);
      divQuestion.remove();

    });

    divAction.appendChild(archiveBtn);
    divAction.appendChild(openBtn);

    divQuestion.appendChild(img);
    divQuestion.appendChild(span);
    divQuestion.appendChild(p);
    divQuestion.appendChild(divAction);

    divPendingQuestion.appendChild(divQuestion);
  }

  function openQuestion(name, question) {
    let divOpenQuestions = document.getElementById('openQuestions');

    let divQuestion = document.createElement('div');
    divQuestion.setAttribute('class', 'openQuestion');

    let img = document.createElement('img');
    img.setAttribute('src', './images/user.png');
    img.setAttribute('width', '32');
    img.setAttribute('height', '32');

    let span = document.createElement('span');
    span.textContent = name;


    let p = document.createElement('p');
    p.textContent = question;

    let divAction = document.createElement('div');
    divAction.setAttribute('class', 'actions');

    let replyBtn = document.createElement('button');
    replyBtn.setAttribute('class', 'reply');
    replyBtn.textContent = 'Reply';
    replyBtn.addEventListener('click', () => {
      if (replyBtn.textContent === 'Reply') {
        divReplySection.style.display = 'block';
        replyBtn.textContent = 'Back';
      } else if (replyBtn.textContent === 'Back') {
        replyBtn.textContent = 'Reply';
        divReplySection.style.display = 'none';
      }
    });

    divAction.appendChild(replyBtn);

    let divReplySection = document.createElement('div');
    divReplySection.setAttribute('class', 'replySection');
    divReplySection.setAttribute('style', 'display');
    divReplySection.style.display = 'none';

    let inputElement = document.createElement('input');
    inputElement.setAttribute('class', 'replyInput');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'Reply to this question here...');

    let replySendBtn = document.createElement('button');
    replySendBtn.setAttribute('class', 'replyButton');
    replySendBtn.textContent = 'Send';
    replySendBtn.addEventListener('click', () => {
      let li = document.createElement('li');
      li.textContent = inputElement.value;
      olList.appendChild(li);

    });

    let olList = document.createElement('ol');
    olList.setAttribute('class', 'reply');
    olList.setAttribute('type', '1');

    divReplySection.appendChild(inputElement);
    divReplySection.appendChild(replySendBtn);
    divReplySection.appendChild(olList);

    divQuestion.appendChild(img);
    divQuestion.appendChild(span);
    divQuestion.appendChild(p);
    divQuestion.appendChild(divAction);
    divQuestion.appendChild(divReplySection);

    divOpenQuestions.appendChild(divQuestion);
  }
}