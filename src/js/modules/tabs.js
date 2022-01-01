const tabs = (parentSelector, tabsSelector, tabsContentSelector, activeClass) => {
  const tabsParent = document.querySelector(parentSelector),
    tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = "none";
    });

    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    if (e.target && (e.target.classList.contains(tabsSelector.replace(/\./, "")) || e.target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
      tabs.forEach((item, i) => {
        if (item == e.target || item == e.target.parentNode) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;