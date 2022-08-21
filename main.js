let dropdownLink = document.querySelectorAll('.dropdown__link');

// let scrollPosition = document.querySelector('.top-section-wrap').clientHeight + parseFloat(getComputedStyle(document.querySelector('.article')).paddingTop);

for (let item of dropdownLink) {
  item.addEventListener('click', () => {
    let listOfClass = item.nextElementSibling.classList;

    for (let item of dropdownLink) {
      item.nextElementSibling.classList.remove('dropdown__content_active');
    };
    listOfClass.add('dropdown__content_active');

    item.scrollIntoView();

    // window.scrollTo(0, scrollPosition);
  });
};