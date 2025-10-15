/* ===========================================================
   🧭 NAVIGATION BAR TOGGLE (Mobile Responsive)
   =========================================================== */
$(function () {
  $("#nav-toggle").on("click", function () {
    $(".navbar").toggleClass("open");
  });
});


// === Scroll Reveal for Project Cards ===
$(window).on("scroll", function () {
  $(".project-card").each(function () {
    const top = $(this).offset().top;
    const windowBottom = $(window).scrollTop() + $(window).height();
    if (top < windowBottom - 100) {
      $(this).addClass("visible");
    }
  });
});

/* ===========================================================
   🌗 UNIVERSAL THEME TOGGLER (Guaranteed Working)
   =========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggle = document.querySelector("#theme-toggle");

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem("site-theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  toggle.checked = savedTheme === "dark";

  // Toggle on click
  toggle.addEventListener("change", () => {
    const newTheme = toggle.checked ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("site-theme", newTheme);
  });
});








/* ===========================================================
   ⌨️ HERO TITLE TYPING EFFECT (Simple Reveal Animation)
   =========================================================== */
$(function () {
  const fullText = "Ujwala — Web Developer";
  let i = 0;

  function reveal() {
    if (i <= fullText.length) {
      $(".hero-title").text(fullText.slice(0, i));
      i++;
      setTimeout(reveal, 40); // typing speed
    } else {
      $(".hero-title").html(`<span>${fullText}</span>`);
    }
  }

  reveal();
});

/* ===========================================================
   🧭 SMOOTH SCROLL FOR IN-PAGE LINKS
   =========================================================== */
$(function () {
  $('a[href^="#"]').on("click", function (e) {
    const href = $(this).attr("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = $(href);
      if (target.length) {
        $("html,body").animate({ scrollTop: target.offset().top - 70 }, 500);
      }
    }
  });
});

/* ===========================================================
   ⬆️ SCROLL-TO-TOP BUTTON (Appears After Scrolling)
   =========================================================== */
$(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 220) $("#scroll-top").fadeIn();
    else $("#scroll-top").fadeOut();
  });

  $("#scroll-top").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 400);
  });
});

/* ===========================================================
   🧩 SKILL BAR ANIMATION (Fills Up to % on Load)
   =========================================================== */
$(function () {
  function animateSkills() {
    $(".skill-fill").each(function () {
      const percent = $(this).data("percent") || 0;
      $(this).css("width", percent + "%");
    });
  }
  animateSkills();
});

/* ===========================================================
   📩 CONTACT FORM VALIDATION (Simple Front-End Check)
   =========================================================== */
$(function () {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();

    const name = $("#cname").val().trim();
    const email = $("#cemail").val().trim();
    const message = $("#cmessage").val().trim();
    const isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

    if (name.length < 2 || !isValidEmail || message.length < 6) {
      $("#form-msg").text("⚠️ Please complete the form correctly.");
      return;
    }

    $("#form-msg").text("✅ Thanks! Message noted (demo).");
    $(this)[0].reset();
  });
});

/* ===========================================================
   💫 FLOATING TECH ICONS — SMOOTH CONTINUOUS DRIFT EFFECT
   =========================================================== */
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  const icons = document.querySelectorAll(".floating-icons .icon");

  if (!hero || icons.length === 0) return;

  hero.style.position = "relative";
  const iconData = [];

  // initialize random positions and velocities
  icons.forEach((icon) => {
    const size = 20 + Math.random() * 20;
    const x = Math.random() * hero.clientWidth;
    const y = Math.random() * hero.clientHeight;
    const vx = (Math.random() - 0.5) * 1.5; // horizontal speed
    const vy = (Math.random() - 0.5) * 1.5; // vertical speed
    const rotation = Math.random() * 360;

    icon.style.position = "absolute";
    icon.style.fontSize = `${size}px`;
    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;
    icon.style.opacity = 0.4 + Math.random() * 0.6;

    iconData.push({ icon, x, y, vx, vy, rotation });
  });

  // smooth animation
  function animate() {
    const width = hero.clientWidth;
    const height = hero.clientHeight;

    iconData.forEach((data) => {
      data.x += data.vx;
      data.y += data.vy;
      data.rotation += 0.2;

      // bounce at edges
      if (data.x <= 0 || data.x >= width - 40) data.vx *= -1;
      if (data.y <= 0 || data.y >= height - 40) data.vy *= -1;

      data.icon.style.transform = `translate(${data.x}px, ${data.y}px) rotate(${data.rotation}deg)`;
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Update positions when resizing
  window.addEventListener("resize", () => {
    iconData.forEach((data) => {
      data.x = Math.min(data.x, hero.clientWidth - 40);
      data.y = Math.min(data.y, hero.clientHeight - 40);
    });
  });
});





/* ===========================================================
   📱 PERFORMANCE TWEAK: Adjust Animation Speed on Mobile
   =========================================================== */
window.addEventListener("resize", () => {
  const icons = document.querySelectorAll(".floating-icons .icon");
  const isMobile = window.innerWidth < 768;

  icons.forEach((icon) => {
    icon.style.transitionDuration = isMobile ? "6s" : "4.5s";
  });
});

//about
  
    const paragraphs = document.querySelectorAll('.about-content p');

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      paragraphs.forEach(p => {
        const boxTop = p.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          p.classList.add('visible');
        }
      });
    };
    



    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
        paragraphs.forEach((p, index) => {
          const boxTop = p.getBoundingClientRect().top;
          if (boxTop < triggerBottom) {
            setTimeout(() => {
              p.classList.add("visible");
            }, index * 200); // 0.2s delay between paragraphs
          }
        });



        

  
