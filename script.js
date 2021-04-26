const STORE = {
  spends: [
    {
      amount: 10,
      category: "Shopping",
      description: "Nintendo Switch",
      createdDate: "2020-01-27",
    },
    {
      amount: 20,
      category: "Shopping",
      description: "MacBook Pro 2020",
      createdDate: "2020-01-27",
    },
    {
      amount: 30,
      category: "Shopping",
      description: "Iphone 12",
      createdDate: "2020-01-27",
    },
  ],
};

function renderListItem(spend){
  return `<li class="content__item">
  <div class="content__detail">
    <h3>${spend.category}</h3>
    <p>${spend.description}</p>
  </div>
  <div class="content__actions">
    <p>S/ ${spend.amount}</p>
    <span>Eliminar</span>
  </div>
</li>`
}

function renderList() {
  return `
  <h2 class="js-title">Expenses</h2>
  <ul class="content__list">
    ${STORE.spends.map(spend => renderListItem(spend)).join('')}
  </ul>
  <footer>
    <button class="js-button footer__button">New Expense</button>
  </footer>`;
}

function renderForm() {
  return `
  <h2>New Expense</h2>
  <form action="" class="content__form">
    <div>
      <label for="">Amount</label>
      <input type="number" name="amount">
    </div>
    <div>
      <label for="">Category</label>
      <input type="text" name="category">
    </div>
    <div>
      <label for="">Description</label>
      <input type="text" name="description">
    </div>
    <a href="#" class="button--cancel">Cancel</a>
      <footer class="footer">
        <button class="js-button footer__button">New Expense</button>
      </footer>
    </form>
    `;
}

function listenCancelClick() {
  const content = document.querySelector(".js-content");
  let target = content.querySelector(".button--cancel");
  content.addEventListener("click", (e) => {
    console.log(target, e.target);
    if (target == e.target) {
      e.preventDefault();
      content.innerHTML = renderList();
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
}
function init() {
  const content = document.querySelector(".js-content");
  content.innerHTML = renderList();
  addEventListeners();
}

init();
