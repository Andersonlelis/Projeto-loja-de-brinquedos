const carrinho = [];
const ul = document.querySelector('#carrinho ul');
const totalEl = document.getElementById('total');

document.querySelectorAll('.card button').forEach(btn => {
  btn.onclick = () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);
    carrinho.push({ name, price });
    renderCart();
  };
});

function renderCart() {
  ul.innerHTML = '';
  let total = 0;
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    ul.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = total.toFixed(2);
}

document.getElementById('checkout').onclick = () => {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  alert(`Total: R$ ${totalEl.textContent}\nObrigado pela compra!`);
};

function handleContato(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const tel = document.getElementById('telefone').value;
  alert(
    `Obrigado, ${nome}!\nRecebemos seu pedido e em breve entraremos em contato via ${tel}.`
  );
  e.target.reset();
}
