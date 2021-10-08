var modal               = document.getElementById('modal');
var modalChange         = document.getElementById('modalChange');
var closeModal          = document.getElementsByClassName('cross');
var inputModalChange    = document.getElementById('inputModalChange');
var okChange            = document.getElementById('okChange');
var deleteList          = document.getElementById('cross');
var inputModal          = document.getElementById('inputModal');
var content             = document.getElementById('content');
var contentR            = document.getElementById('contentRight');
var blockRight          = document.getElementById('blockRight');
var footerRight         = document.getElementById('footerRight');
var headerListH4        = document.getElementById('headerListH4');
var inputName           = document.getElementById('inputName');
var formBtn             = document.getElementById('formBtn');
let formParent          = document.getElementById('formParent');
let formChild           = document.getElementById('formChild');
let btnOut              = document.getElementById('btnOut');

function formParentFunc() {
  if (formParent.style.display === 'flex') {
    formChild.style.display = 'none';
  }
}
formParentFunc();

btnOut.onclick = function() {
  formChild.style.display = 'none';
  formParent.style.display = 'flex';

}

formBtn.onclick = function() {
  headerListH4.innerHTML = '<h4>'+inputName.value+'</h4>';
  formParent.remove();
  formParent.style.display = 'none';
}

function addListModal() {
  modal.style.display = 'flex';
}

function closeModalWindow() {
  modal.style.display = 'none';
}



function addMyList() {//Добавление списка дел
  let delo          = document.createElement('div');
  let p             = document.createElement('textarea');
  let div           = document.createElement('div');
  let buttonFlower  = document.createElement('button');
  let buttonCross   = document.createElement('button');
  let h3            = document.createElement('h3');
  let header        = document.createElement('header');
  let footerBtn     = document.getElementById('button');


  blockRight.appendChild(header);
  header.appendChild(h3);
  h3.style.display = 'none';

  content.appendChild(delo);
  delo.prepend(p);
  delo.prepend(div);
  div.appendChild(buttonFlower);
  div.appendChild(buttonCross);

  delo.id                 = 'delo';
  p.id                    = 'p';
  p.className             = inputModal.value;
  p.innerHTML             = inputModal.value;
  p.readOnly              = true;
  div.id                  = 'deloBtns';
  buttonFlower.className  = 'flower';
  buttonCross.className   = 'cross';
  buttonCross.id          = 'cross';
  delo.className          = inputModal.value;

  if (inputModal.value.length < 1) {
    let pModal = document.createElement('p');
    pModal.innerHTML = 'Поле "Название" должно быть заполнено';
    modal.appendChild(pModal);
    p.innerHTML = inputModal.value;
    pModal.style.color = 'red';
    setTimeout(() => pModal.remove(), 3000);
    delo.remove();
  }
  if (inputModal.value.length > 30) {
    let pModal = document.createElement('p');
    pModal.innerHTML = 'В поле "Название" должно быть не более 30 знаков';
    modal.appendChild(pModal);
    p.innerHTML = inputModal.value;
    pModal.style.color = 'red';
    setTimeout(() => pModal.remove(), 3000);
    delo.remove();
  }
  
  buttonFlower.onclick = function () {//Модальное окно (изменение названия списка дел)
    setInterval(()=> {
      p.innerHTML     = inputModalChange.value;
      delo.className  = inputModalChange.value;
      p.className     = inputModalChange.value;
      h3.innerText    = inputModalChange.value;
    })
    
    if (modalChange.style.display === ''|| modalChange.style.display === 'none') {
        modalChange.style.display = 'flex';
    } else {
      modalChange.style.display = 'none';
    }

    okChange.onclick = function() {//Модальное окно, событие при клике на кнопку (изменение названия списка дел)
    p.innerHTML     = inputModalChange.value;
    delo.className  = inputModalChange.value;
    p.className     = inputModalChange.value;
      

      modalChange.style.display = 'none';
      if (inputModalChange.value.length < 1) {
        let pModal = document.createElement('p');
        modalChange.appendChild(pModal);
        pModal.innerHTML = 'Поле "Название" должно быть заполнено';
        modalChange.appendChild(pModal);
        inputModalChange.value = inputModal.value;
        p.innerHTML = inputModal.value;
      }
      if (inputModalChange.value.length > 30) {
        let pModal = document.createElement('p');
        modalChange.appendChild(pModal);
        pModal.innerHTML = 'В поле "Название" должно быть не более 30 знаков';
        modalChange.appendChild(pModal);
        inputModalChange.value = inputModal.value;
        p.innerHTML = inputModal.value;
      }
    }
  }

  buttonCross.onclick = function () {//Удаление списка дел
    let divModalParentDelete  = document.getElementById('divModalParentDelete');
    let btnNoModalParent      = document.getElementById('btnNoModalParent');
    let btnYesModalParent     = document.getElementById('btnYesModalParent');
    let h4                    = document.getElementById('h4ModalParentDelete');
    divModalParentDelete.style.display = 'flex';

    h4.innerHTML = 'Удалить список "' + p.value + '" ?';

    btnNoModalParent.onclick = function() {
      divModalParentDelete.style.display = 'none';
    }
    btnYesModalParent.onclick = function() {
      let divR                  = document.querySelectorAll('.'+p.value);
      let contentR              = document.querySelector('#contentR');
      let btnAddB               = document.querySelector('#button');
      divModalParentDelete.style.display = 'none';
      if (divR === null) {
        return 0;
      } else {
        for(let i = 0; i < divR.length; i++) {
            divR[i].remove();
        }
      }
      if (btnAddB === null) {
        delo.remove();
        return 0;
      } else {
        btnAddB.remove();
        delo.remove();
      }
      h3.remove();
      
    }
  }

  p.onclick = function () {//Создание дела в списке по клику на сам список
    if (h3.style.display === ''|| h3.style.display === 'none') {
      let btnAddB           = document.createElement('button');
      let divR              = document.getElementsByClassName(p.value);
      
      h3.innerText          = p.value;

      btnAddB.id            = 'button';
      btnAddB.className     = 'add';
      contentR.style.display= 'flex';
      h3.style.display      = 'flex';
      footerRight.appendChild(btnAddB);


      for(let i = 0; i < divR.length; i++) {
          if (divR[i].style.display === 'none') {
              divR[i].style.display = 'flex';
          }
      }

      btnAddB.onclick = function () {
      let divModalAddBus = document.getElementById('divModalAddBus');
      let okModalAddBus  = document.getElementById('okModalAddBus');

      if(divModalAddBus.style.display===''&&divModalAddBusChild.style.display===''||divModalAddBus.style.display==='none'&&divModalAddBusChild.style.display === 'none'){
        divModalAddBus.style.display      = 'flex';
        divModalAddBusChild.style.display = 'flex';
        } else {
        divModalAddBus.style.display      = 'none';
        divModalAddBusChild.style.display = 'none';
      }
      okModalAddBus.onclick = function() {
        let buttonFlower      = document.createElement('button');
        let buttonCross       = document.createElement('button');
        let textarea          = document.createElement('textarea');
        let divR              = document.createElement('div');
        let divRchild         = document.createElement('div');
        let inputModalAddBus  = document.getElementById('inputModalAddBus');
        let inputModalCheck   = document.getElementById('inputModalCheck');
        var done              = document.createElement('div');
        let toDo              = document.createElement('div');
        let notDone           = document.createElement('div');
        let date              = new Date().toLocaleString();
        let delo              = document.querySelector('.delo');

        divR.style.display    = 'flex';
        
        function sec() {
          done.id             = 'done';
          toDo.id             = 'toDo';
          notDone.id          = 'notDone';
          divRchild.id        = 'divRchild';
          divR.id             = 'divR';
          contentR.id         = 'contentR';
          divR.className      = p.value;
        }
        setInterval(sec, 100);

        textarea.innerHTML   = inputModalAddBus.value;
        textarea.readOnly    = true;
        blockRight.append(contentR);
        

        contentR.append(divR);
        if (inputModalCheck.checked === true) {
          let inputModalCheckAddList    = document.createElement('img');
          inputModalCheckAddList.id     = 'inputModalCheckAddList';
          divR.append(inputModalCheckAddList);
        } else {
          let inputModalCheckAddListNo  = document.createElement('img');
          inputModalCheckAddListNo.id   = 'inputModalCheckAddListNo';
          divR.append(inputModalCheckAddListNo);
        }

        divR.appendChild(divRchild);
        divRchild.append(done);
        divRchild.append(toDo);
        divRchild.append(notDone);
        divRchild.append(textarea);
        divRchild.append(date);
        divR.append(buttonFlower);
        divR.append(buttonCross);


        done.style.display      = 'none';
        toDo.style.display      = 'none';
        notDone.title           = 'Не выполнено';
        toDo.title              = 'Выполняется';
        done.title              = 'Выполнено';

        buttonFlower.className  = 'flower';
        buttonCross.className   = 'cross';
        buttonCross.id          = 'cross';

        buttonFlower.onclick = function() {// изменение состояния дела
            done.style.display        = 'flex';
            toDo.style.display        = 'flex';
            notDone.style.display     = 'flex';
            done.onclick = function() {
              toDo.style.display      = 'none';
              notDone.style.display   = 'none';
              // done.className          = p.value;
            }
            notDone.onclick = function() {
              toDo.style.display      = 'none';
              done.style.display      = 'none';
            }
            toDo.onclick = function() {
              done.style.display      = 'none';
              notDone.style.display   = 'none';
            }

        }

        buttonCross.onclick = function() {// удаление дела
          let divModalDelete  = document.getElementById('divModalDelete');
          let btnNoModal      = document.getElementById('btnNoModal');
          let btnYesModal     = document.getElementById('btnYesModal');
          let h4              = document.getElementById('h4ModalDelete');
          divModalDelete.style.display = 'flex';

          h4.innerHTML = 'Удалить "' + textarea.value + '" из списка "' + p.value +'" ?';

          btnNoModal.onclick = function() {
            divModalDelete.style.display  = 'none';
          }
          btnYesModal.onclick = function() {
            divR.remove();
            divModalDelete.style.display  = 'none';
          }
        }
        divModalAddBus.style.display      = 'none';
        divModalAddBusChild.style.display = 'none';
      }
    }    
    } else {
      let btnAddB      = document.querySelector('#button');
      let divR         = document.getElementsByClassName(p.value);

      h3.style.display = 'none';
      if (btnAddB === null) {
        return 0;
      } else {
        btnAddB.remove();
      }
      for(let i = 0; i < divR.length; i++) {
          if (divR[i].style.display === 'flex') {
              divR[i].style.display = 'none';
          }
      }
    }

  }
  

}

  function changingTheListColor() {////////////////////////////////////////////////////////////////////////////////ВЫЗОВ
    // let done    = document.querySelectorAll('#done');
    let notDone = document.querySelectorAll('#notDone');
    for(let i = 0; i < done.length; i++) {
      if (done[i].style.display === 'flex'&&notDone[i].style.display === 'none') {
        let p = document.querySelectorAll('#p');
        for(let j = 0; j < p.length; j++) {
          p[i].style.background = 'lightgreen';
        }
      } else {
        let p = document.querySelectorAll('#p');
        for(let j = 0; j < p.length; j++) {
          p[i].style.background = 'white';
        }
      }
    }
    


  }
  setInterval(changingTheListColor, 1);////////////////////////////////////////////////////////////////////////////////ВЫЗОВ