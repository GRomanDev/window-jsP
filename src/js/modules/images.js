const images = () => {
  const imgPopap = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');

  imgPopap.classList.add('popup');
  workSection.appendChild(imgPopap);

  imgPopap.style.cssText = `justify-content:center;align-items:center;
  display:none;`;

  imgPopap.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopap.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      bigImage.style.maxHeight = '90%';
      bigImage.style.maxWidth = '90%';
      bigImage.style.borderRadius = '5px';
      bigImage.style.margin = '0';
      document.body.style.overflow = 'hidden';
    }

    if (target && target.matches('div.popup')) {
      imgPopap.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

export default images;