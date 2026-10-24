
// Mobile Navigation
const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isExpanded =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer: Current Year
const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

// Share Campaign
const shareButton = document.querySelector("#share-campaign");
const shareStatus = document.querySelector("#share-status");

shareButton?.addEventListener("click", async () => {
  const shareData = {
    title: "PCC Computer Club Campaign | Rafiq",
    text: "Explore my PCC Computer Club Election 2026–27 campaign.",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);

      if (shareStatus) {
        shareStatus.textContent = "Thanks for sharing!";
      }
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(shareData.url);

      if (shareStatus) {
        shareStatus.textContent = "Campaign link copied!";
      }
    } else {
      window.prompt("Copy your campaign link:", shareData.url);
    }
  } catch (error) {
    if (error.name !== "AbortError" && shareStatus) {
      shareStatus.textContent =
        "Unable to share right now. Please copy the page URL manually.";
    }
  }
});
