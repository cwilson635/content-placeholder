const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const userName = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(setData, 2500);

function setData() {
    header.innerHTML = `
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="Person BG">
    `;
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, inventore.';
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="User photo">';
    userName.innerHTML = 'John Doe';
    date.innerHTML = 'October 8, 2020';

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'));
};