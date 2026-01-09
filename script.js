gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1, .hero p", {
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.3
});

gsap.utils.toArray("section").forEach(sec => {
  gsap.from(sec, {
    scrollTrigger: { trigger: sec, start: "top 85%" },
    opacity: 0,
    y: 40,
    duration: 1
  });
});

hireBtn.onclick = () =>
  contact.scrollIntoView({ behavior: "smooth" });

contactForm.onsubmit = e => {
  e.preventDefault();
  const data = {
    name: name.value,
    email: email.value,
    message: message.value,
    date: new Date().toLocaleString()
  };
  const saved = JSON.parse(localStorage.getItem("contracts")) || [];
  saved.push(data);
  localStorage.setItem("contracts", JSON.stringify(saved));
  success.innerText = "✔️ Message stored successfully!";
  e.target.reset();
};
