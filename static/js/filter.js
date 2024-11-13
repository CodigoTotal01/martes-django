document.addEventListener('DOMContentLoaded', function () {
  const categoryFilters = document.getElementById('filters');
  const buttons = categoryFilters.querySelectorAll('button');
  const cards = document.querySelectorAll('.card');
  const priceFilters = document.querySelector('#price');
  const priceCheckboxes = priceFilters.querySelectorAll('input');
  const brandFilters = document.querySelector('#brand');
  const brandCheckboxes = brandFilters.querySelectorAll('input');
  const chargingFilters = document.querySelector('#charging');
  const chargingCheckboxes = chargingFilters.querySelectorAll('input');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      filterProds();
    });
  });

  priceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProds);
  });

  brandCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProds);
  });

  chargingCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProds);
  });

  function filterProds() {
    const activeFilter = document.querySelector('#filters button.active')?.dataset.filter || 'All';
    const selectedPriceRanges = Array.from(priceCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    const selectedBrand = Array.from(brandCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

      const selectedCharging = Array.from(chargingCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    cards.forEach(card => {
      const categoryData = card.querySelector('[data-category]');
      const priceData = card.querySelector('[data-price]');
      const brandData = card.querySelector('[data-brand]');
      const chargingData = card.querySelector('[data-charging]');

      if (!categoryData || !priceData || !brandData || !chargingData) return;

      const category = categoryData.dataset.category;
      const price = parseFloat(priceData.dataset.price);
      const brand = brandData.dataset.brand;
      const charging = chargingData.dataset.charging;

      // Apllying Category filter
      const categoryMatch = activeFilter === 'All' || category === activeFilter;

      // Applying selected price range
      const priceMatch = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
        const [min, max] = range.split('-').map(Number);
        return price >= min && price <= max;
      });

      const brandMatch = selectedBrand.length === 0 || selectedBrand.includes(brand);
      const chargingMatch = selectedCharging.length === 0 || selectedCharging.includes(charging);

      // Showing or hiding card based on category and price matches
      if (categoryMatch && priceMatch && brandMatch && chargingMatch) {
        card.classList.remove('d-none');
      } else {
        card.classList.add('d-none');
      }
    });
  }
});
