/*const STORE = {
  gastos: [
    {
      amount,
      category,
      description,
      createdDate,
    },
  ],
};*/

function renderList(){
  return `<ul class="content__list">
      <li class="content__item">
        <div class="content__detail">
          <h3>Category</h3>
          <p>Description</p>
        </div>
        <div class="content__actions">
          <p>Price</p>
          <span>Eliminar</span>
        </div>
      </li>
    </ul>`;
}

function renderForm(){
  return `<form action="" class="content__form">
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
    <button type="submit">Cancel</button>
  </form>`;
}

function init(){
  const content = document.querySelector('.js-content')
}