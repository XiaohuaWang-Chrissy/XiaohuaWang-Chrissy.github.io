
const hero = document.querySelector('.hero');
const btn = document.getElementById('learn-more');
const storySection = document.getElementById('story');


if (hero && btn && storySection) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    
    storySection.scrollIntoView({ behavior: 'smooth' });
  });
}