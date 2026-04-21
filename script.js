const intro = document.getElementById("intro");
const introVideo = document.getElementById("introVideo");
const skipIntro = document.getElementById("skipIntro");
const site = document.getElementById("site");
const copyContract = document.getElementById("copyContract");
const contractValue = document.getElementById("contractValue");
const copyStatus = document.getElementById("copyStatus");

let isDone = false;

function revealSite() {
  if (isDone) return;
  isDone = true;
  intro.classList.add("fade-out");
  site.classList.remove("hidden");
  requestAnimationFrame(() => site.classList.add("show"));
}

skipIntro.addEventListener("click", revealSite);

introVideo.addEventListener("ended", revealSite);
introVideo.addEventListener("error", revealSite);

setTimeout(revealSite, 14000);

if (copyContract && contractValue && copyStatus) {
  copyContract.addEventListener("click", async () => {
    const value = contractValue.textContent?.trim();
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      copyStatus.textContent = "Contract copied.";
    } catch {
      copyStatus.textContent = "Copy failed. Please copy manually.";
    }
  });
}
