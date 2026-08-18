// 연도 자동 갱신
const now = new Date().getFullYear();
document.getElementById('year').textContent = now;
document.getElementById('footYear').textContent = now;

// 모바일 내비게이션 토글
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// 스크롤 리빌 애니메이션
const revealTargets = document.querySelectorAll(
  '.about, .timeline__item, .skills__group, .work__card, .titleblock--contact'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach(el => observer.observe(el));

// 네비 활성 섹션 하이라이트 (선택 사항 — 필요 없으면 삭제 가능)
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav__links a[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.style.color = '');
        link.style.color = '#F5F3EC';
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach(sec => navObserver.observe(sec));