let dropdownLink = document.querySelectorAll('.dropdown__link');

for (let item of dropdownLink) {
  item.addEventListener('click', () => {
    let listOfClass = item.nextElementSibling.classList;

    for (let item of dropdownLink) {
      item.nextElementSibling.classList.remove('dropdown__content_active');
    };
    listOfClass.add('dropdown__content_active');
  });
};