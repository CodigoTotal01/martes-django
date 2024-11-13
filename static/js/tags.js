document.addEventListener('DOMContentLoaded', () => {
  const brands = document.querySelectorAll('[data-brand]');
  const brandList = document.querySelector('#brand');
  const brandValues = Array.from(brands).map(brand => brand.getAttribute('data-brand'));
  const chargings = document.querySelectorAll('[data-charging]');
  const chargingList = document.querySelector('#charging');
  const chargingValues = Array.from(chargings).map(charging => charging.getAttribute('data-charging'));

  let uniqueBrands = [...new Set(brandValues)];
  //console.log(uniqueBrands);

  let uniqueChargings = [...new Set(chargingValues)];
  console.log(uniqueChargings);

  uniqueBrands.forEach(brand => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    li.innerHTML = `
      <input type="checkbox" value="${brand}">
      ${brand}
    `;

    brandList.appendChild(li);
  });

  uniqueChargings.forEach(charging => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    li.innerHTML = `
      <input type="checkbox" value="${charging}">
      ${charging}h
    `;

    chargingList.appendChild(li);
  });

  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
    const content = tag.textContent.trim();
    if (content.length > 8) {
      tag.textContent = content.slice(0, 5) + '...';
    }
    //console.log(tag.textContent);
  });
});
