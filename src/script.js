document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

const skillSubjects = [
  { src: "../assets/Skills/html.png", title: "HTML", percent: "85%" },
  { src: "../assets/Skills/css-3.png", title: "CSS", percent: "78%" },
  { src: "../assets/Skills/js.png", title: "JavaScript", percent: "60%" },
  {
    src: "../assets/Skills/bootstrap.png",
    title: "Bootstrap",
    percent: "90%",
  },
  { src: "../assets/Skills/reactjs.png", title: "React", percent: "55%" },
  { src: "../assets/Skills/java.png", title: "Java", percent: "77%" },
  { src: "../assets/Skills/csharp.png", title: "C#", percent: "70%" },
  { src: "../assets/Skills/mysql.png", title: "MySQL", percent: "72%" },
];

const skillList = document.getElementById("skillList");
skillSubjects.forEach((skill) => {
  skillList.innerHTML += `
    <div class="col-md-3 col-6">
      <div class="p-3 bg-white rounded-3 text-center">
        <img src="${skill.src}" alt="${skill.title}" />
        <h3 class="mt-3">${skill.title}</h3>
        <p>${skill.percent}</p>
      </div>
    </div>
  `;
});