const STORE = {
  spends: [
    {
      amount: 10,
      category: "Shopping",
      description: "Nintendo Switch",
      createdDate: new Date("2020-01-23"),
    },
    {
      amount: 20,
      category: "Shopping",
      description: "MacBook Pro 2020",
      createdDate: new Date("2020-01-24"),
    },
    {
      amount: 30,
      category: "Shopping",
      description: "Iphone 12",
      createdDate: new Date("2020-01-26"),
    },
  ],
};

function renderListItem(spend, index){
  return `<li class="content__item">
  <div class="content__detail">
    <h3>${spend.category}</h3>
    <p>${spend.description}</p>
  </div>
  <div class="content__actions">
    <p>S/ ${spend.amount}</p>
    <a data-index="${index}" href="#" class="js-content-delete">Eliminar</a>
  </div>
</li>`
}

function renderList() {
  STORE.spends.sort((a,b) => b.createdDate - a.createdDate);
  return `
  <h2 class="js-title">Expenses</h2>
  <ul class="content__list">
    ${STORE.spends.map((spend, index) => renderListItem(spend, index)).join('')}
  </ul>
  <footer>
    <button class="js-button footer__button">New Expense</button>
  </footer>`;
}

function renderForm() {
  return `
  <h2 class="js-form-title">New Expense</h2>
  <form action="" class="js-form content__form">
    <div class="form-input">
      <label for="">Amount</label>
      <input name="amount">
    </div>
    <div class="form-input">
      <label for="">Category</label>
      <input type="text" name="category">
    </div>
    <div class="form-input">
      <label for="">Description</label>
      <input type="text" name="description">
    </div>
    <a href="#" class="js-button-cancel button--cancel">Cancel</a>
      <footer class="footer">
        <button class="js-button-add footer__button">Add Expense</button>
      </footer>
    </form>
    `;
}

function listenDeleteClick(){
  const content = document.querySelector(".js-content");
  content.addEventListener("click", (e) => {
    let targets = content.querySelectorAll(".js-content-delete");
    targets.forEach((target) => {
      if (target == e.target) {
        STORE.spends = STORE.spends.filter((_, index) => {
          return index !== parseInt(e.target.dataset.index);
        });
        console.log(STORE.spends);
        content.innerHTML = renderList();
      }
    });
  });
}

function listenFormSubmit(){
  const content = document.querySelector(".js-content");
  content.addEventListener("submit", (e) => {
    let target = content.querySelector(".js-form");
    if (target == e.target) {
      e.preventDefault();
      STORE.spends.push({
        amount: parseInt(e.target.amount.value),
        category:e.target.category.value,
        description:e.target.description.value,
        createdDate: new Date(),
      })
      content.innerHTML = renderList();
      init();
    }
  });
}

function listenCancelClick() {
  const content = document.querySelector(".js-content");
  content.addEventListener("click", (e) => {
    let target = content.querySelector(".js-button-cancel");
    if (target == e.target) {
      e.preventDefault();
      content.innerHTML = renderList();
      init();
    }
  });
}

function listenButtonClick() {
  const content = document.querySelector(".js-content");
  let target = content.querySelector(".js-button");
  content.addEventListener("click", (e) => {
    if (target == e.target) {
      content.innerHTML = renderForm();
    }
  });
}

function addEventListeners() {
  listenButtonClick();
  listenCancelClick();
  listenFormSubmit();
  listenDeleteClick();
}

function init() {
  const content = document.querySelector(".js-content");
  content.innerHTML = renderList();
  addEventListeners();
}

init();
