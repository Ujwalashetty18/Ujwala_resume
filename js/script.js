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

    $("#form-msg").text("✅ Thanks! Message noted .");
    $(this)[0].reset();
  });
});

/* ===========================================================
   💫 GLOBAL FLOATING ICONS — Animate in All Sections
   =========================================================== */
window.addEventListener("load", () => {
  const containers = document.querySelectorAll(".floating-icons");

  containers.forEach(container => {
    const icons = container.querySelectorAll(".icon");
    const iconData = [];

    icons.forEach(icon => {
      const size = 18 + Math.random() * 25;
      const x = Math.random() * container.clientWidth;
      const y = Math.random() * container.clientHeight;
      const vx = (Math.random() - 0.5) * 1.2;
      const vy = (Math.random() - 0.5) * 1.2;
      const rotation = Math.random() * 360;

      icon.style.fontSize = `${size}px`;
      icon.style.left = `${x}px`;
      icon.style.top = `${y}px`;

      iconData.push({ icon, x, y, vx, vy, rotation });
    });

    function animate() {
      const width = container.clientWidth;
      const height = container.clientHeight;

      iconData.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        d.rotation += 0.2;

        if (d.x <= 0 || d.x >= width - 30) d.vx *= -1;
        if (d.y <= 0 || d.y >= height - 30) d.vy *= -1;

        d.icon.style.transform = `translate(${d.x}px, ${d.y}px) rotate(${d.rotation}deg)`;
      });

      requestAnimationFrame(animate);
    }

    animate();
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
  
    /* ===========================================================
   💌 CONTACT FORM — SEND EMAIL USING EMAILJS (Enhanced Version)
   =========================================================== */
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  emailjs.init("lGLVAfblRMrQum157");

  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-msg");
  const button = form.querySelector(".send-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const message = document.getElementById("cmessage").value.trim();

    // Simple validation
    if (!name || !email || !message) {
      msg.textContent = "⚠️ Please fill in all fields.";
      msg.style.color = "orange";
      return;
    }

    // Disable button + show loading animation
    button.disabled = true;
    button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    // Send message using EmailJS
    emailjs
      .send("service_vk7j3dr", "template_vtil6l8", {
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        // Success
        msg.textContent = "✅ Message sent successfully!";
        msg.style.color = "lightgreen";

        // Reset form
        form.reset();

        // Button reverts after 2 sec
        setTimeout(() => {
          button.disabled = false;
          button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        }, 1500);

        // Message fades out after 5 sec
        setTimeout(() => {
          msg.textContent = "";
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        msg.textContent = "❌ Failed to send message. Please try again.";
        msg.style.color = "red";

        // Re-enable button
        button.disabled = false;
        button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      });
  });
});
