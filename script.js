/* ==========================================================
   EDIT DI SINI — ganti isi konfigurasi sesuai data kamu
   ========================================================== */
const PROFILE = {
  taglines: [
    "Develope, Deploy, Deliver",
    "membangun hal-hal kecil yang menyenangkan",
    "status: online dan siap bekerja sama",
  ],
};

const SECTIONS = [
  {
    title: "Social Media",
    links: [
      { label: "Instagram", desc: "@devacctorpl", url: "https://www.instagram.com/devacctorpl/", icon: "instagram" },
      { label: "Itch.io", desc: "@Ryuupz", url: "https://itch.io/profile/", icon: "itchio" },
      { label: "Discord", desc: "@Kicau_orgspark", url: "https://discord.gg/SXUyd8WA3", icon: "discord" },
    ],
  },
  {
    title: "Project Game",
    links: [
      { label: "Dinolin Adventurer 2D", desc: "Demo — Early Access", url: "https://ryuupz.itch.io/dinolin-demo", icon: "gamepad", soon: false },
      { label: "Fox Multiplayer 3D", desc: "Demo — segera hadir", url: "#", icon: "gamepad", soon: false },
      { label: "Smiley Things", desc: "Demo — segera hadir", url: "https://thealvarchive.itch.io/smiley-things", icon: "gamepad", soon: false },
      { label: "Nama Proyek 2", desc: "Demo — segera hadir", url: "#", icon: "gamepad", soon: true },
      { label: "Nama Proyek 2", desc: "Demo — segera hadir", url: "#", icon: "gamepad", soon: true },
      { label: "Nama Proyek 2", desc: "Demo — segera hadir", url: "#", icon: "gamepad", soon: true },
      { label: "Nama Proyek 2", desc: "Demo — segera hadir", url: "#", icon: "gamepad", soon: true },
      { label: "Nama Proyek 2", desc: "Demo — segera hadir", url: "#", icon: "gamepad", soon: true },
    ],
  },
//   {
//     title: "Website",
//     links: [
//       { label: "Portofolio", desc: "Lihat karya lengkap", url: "#", icon: "globe" },
//     ],
//   },
];

/* ==========================================================
   Icon set (inline SVG paths, feather-style, stroke-based)
   ========================================================== */
const ICONS = {
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  youtube: '<path d="M22 8.5s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.3 5 12 5 12 5h0s-4.3 0-7.1.2c-.4 0-1.3.1-2.1 1C2.2 6.9 2 8.5 2 8.5S2 10.3 2 12.2v1.6C2 15.7 2 17.5 2 17.5s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1C7 21 12 21 12 21s4.3 0 7.1-.3c.4 0 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s0-1.8 0-3.7v-1.6c0-1.9 0-3.7 0-3.7z"/><path d="m10 9.5 5 2.7-5 2.7z" fill="currentColor" stroke="none"/>',
  twitter: '<path d="M4 4l7.5 10L4.5 20h2.3l6.1-6.9L18 20h4l-8-10.9L20 4h-2.3l-5.5 6.2L9 4z"/>',
  github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/>',
  itchio: '<path d="M3 7l2-4h14l2 4-2 3H5z"/><path d="M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9"/><path d="M9 14a2 2 0 0 0 3 1.7A2 2 0 0 0 15 14"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
  gamepad: '<rect x="2" y="7" width="20" height="10" rx="4"/><path d="M6 10v4M4 12h4"/><circle cx="16" cy="10.5" r="1"/><circle cx="18.5" cy="13" r="1"/>',
  mail: '<path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/>',
};

function iconSvg(name) {
  const paths = ICONS[name] || ICONS.link;
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

/* ==========================================================
   Render sections + links from config
   ========================================================== */
function renderSections() {
  const root = document.getElementById("linkSections");
  root.innerHTML = SECTIONS.map((section) => `
    <section class="section" aria-label="${escapeHtml(section.title)}">
      <h2 class="section__heading">${escapeHtml(section.title)}</h2>
      <ul class="link-list">
        ${section.links.map(renderLink).join("")}
      </ul>
    </section>
  `).join("");
}

function renderLink(link) {
  const soonClass = link.soon ? " is-soon" : "";
  const target = link.soon ? "" : ' target="_blank" rel="noopener noreferrer"';
  const badge = link.soon ? '<span class="badge">soon</span>' : arrowSvg();
  return `
    <li class="link-item">
      <a href="${escapeAttr(link.url)}"${target} class="${soonClass.trim()}">
        <span class="icon-wrap">${iconSvg(link.icon)}</span>
        <span class="link-text">
          <span class="link-label">${escapeHtml(link.label)}</span>
          <span class="link-desc">${escapeHtml(link.desc || "")}</span>
        </span>
        ${badge}
      </a>
    </li>
  `;
}

function arrowSvg() {
  return '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>';
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}
function escapeAttr(str) { return escapeHtml(str); }

/* ==========================================================
   Typing effect for tagline
   ========================================================== */
function startTyping() {
  const el = document.getElementById("typing");
  if (!el) return;
  const lines = PROFILE.taglines.length ? PROFILE.taglines : [""];
  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = lines[lineIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }
    setTimeout(tick, deleting ? 28 : 55);
  }
  tick();
}

/* ==========================================================
   Live clock in terminal bar
   ========================================================== */
function startClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  function update() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    el.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  }
  update();
  setInterval(update, 1000);
}

/* ==========================================================
   Init
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderSections();
  startTyping();
  startClock();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});