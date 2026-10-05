/* =========================================================
   GRAD-007 — NEW CHAPTER

   Change client data ONLY here.
========================================================= */

const GRADUATION = {

  /* =========================
     Graduate
  ========================= */

  graduateName:
    "Sarah Ahmed",

  degree:
    "Bachelor of Architecture",

  faculty:
    "College of Engineering",

  department:
    "Department of Architecture",

  university:
    "University of Mosul",

  classYear:
    "Class of 2027",


  /* =========================
     Library Record
  ========================= */

  catalogId:
    "LIB-2027-007",


  /* =========================
     Academic Chapters
  ========================= */

  chapters: [

    {
      number:
        "01",

      section:
        "VOLUME I",

      title:
        "FIRST YEAR",

      text:
        "The first pages were written with new ideas, unfamiliar halls and the beginning of an academic identity.",

      footerLabel:
        "STATUS",

      footerValue:
        "COMPLETED"
    },

    {
      number:
        "02",

      section:
        "VOLUME II",

      title:
        "DISCIPLINE",

      text:
        "Lectures became routine, deadlines became discipline and the academic journey began to take shape.",

      footerLabel:
        "STATUS",

      footerValue:
        "COMPLETED"
    },

    {
      number:
        "03",

      section:
        "VOLUME III",

      title:
        "SPECIALIZATION",

      text:
        "The path became more focused. Knowledge turned into practical skill, projects and professional direction.",

      footerLabel:
        "STATUS",

      footerValue:
        "COMPLETED"
    },

    {
      number:
        "04",

      section:
        "VOLUME IV",

      title:
        "FINAL YEAR",

      text:
        "The final requirements, examinations and projects brought the academic volume to its closing pages.",

      footerLabel:
        "STATUS",

      footerValue:
        "COMPLETED"
    },

    {
      number:
        "05",

      section:
        "FINAL EDITION",

      title:
        "GRADUATION",

      text:
        "The academic volume is complete. The final page is written and a new chapter is ready to begin.",

      footerLabel:
        "BOOK STATUS",

      footerValue:
        "COMPLETED",

      final:
        true
    }

  ],


  /* =========================
     Message
  ========================= */

  tagline:
    "The academic journey is complete. Join us as the next chapter begins.",


  /* =========================
     Ceremony
  ========================= */

  startAt:
    "2027-07-15T18:00:00+03:00",

  endAt:
    "2027-07-15T21:00:00+03:00",

  timeZone:
    "Asia/Baghdad",


  /* =========================
     Venue
  ========================= */

  venue:
    "Grand Celebration Hall",

  address:
    "Mosul, Nineveh",

  city:
    "Mosul",

  country:
    "Iraq",


  /* =========================
     Links
  ========================= */

  mapsUrl:
    "",

  shareUrl:
    ""

};


/* =========================================================
   ELEMENTS
========================================================= */

const journeyTrack =
  document.getElementById(
    "journeyTrack"
  );

const journeyPrev =
  document.getElementById(
    "journeyPrev"
  );

const journeyNext =
  document.getElementById(
    "journeyNext"
  );

const activeChapter =
  document.getElementById(
    "activeChapter"
  );

const totalChapters =
  document.getElementById(
    "totalChapters"
  );

const journeyProgress =
  document.getElementById(
    "journeyProgress"
  );

const mapsButton =
  document.getElementById(
    "mapsButton"
  );

const calendarButton =
  document.getElementById(
    "calendarButton"
  );

const shareButton =
  document.getElementById(
    "shareButton"
  );

const shareFeedback =
  document.getElementById(
    "shareFeedback"
  );

const reducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

const desktopMedia =
  window.matchMedia(
    "(min-width: 1050px)"
  );


/* =========================================================
   STATE
========================================================= */

let horizontalTween =
  null;

let horizontalTrigger =
  null;

let resizeTimer =
  null;


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initialize
);


function initialize() {

  applyData();

  buildChapters();

  setupDate();

  setupMaps();

  setupCalendar();

  setupShare();

  setupJourneyControls();

  setupAnimations();

  setupResponsiveHorizontal();

}


/* =========================================================
   DATA
========================================================= */

function applyData() {

  const fields = {

    graduateName:
      GRADUATION.graduateName,

    degree:
      GRADUATION.degree,

    faculty:
      GRADUATION.faculty,

    university:
      GRADUATION.university,

    classYear:
      GRADUATION.classYear,

    catalogId:
      GRADUATION.catalogId,

    venue:
      GRADUATION.venue,

    tagline:
      GRADUATION.tagline

  };


  Object.entries(fields)
    .forEach(
      ([field, value]) => {

        document
          .querySelectorAll(
            `[data-field="${field}"]`
          )
          .forEach(
            element => {

              element.textContent =
                value || "—";

            }
          );

      }
    );


  document.title =
    `${GRADUATION.graduateName} — New Chapter`;


  const ogTitle =
    document.querySelector(
      'meta[property="og:title"]'
    );


  const ogDescription =
    document.querySelector(
      'meta[property="og:description"]'
    );


  if (ogTitle) {

    ogTitle.setAttribute(
      "content",
      `${GRADUATION.graduateName} — Graduation Invitation`
    );

  }


  if (ogDescription) {

    ogDescription.setAttribute(
      "content",
      GRADUATION.tagline
    );

  }

}


/* =========================================================
   BUILD CHAPTERS
========================================================= */

function buildChapters() {

  journeyTrack.innerHTML =
    "";


  GRADUATION.chapters
    .forEach(
      chapter => {

        const spread =
          document.createElement(
            "article"
          );


        spread.className =
          `spread${
            chapter.final
              ? " is-final"
              : ""
          }`;


        spread.innerHTML = `
          <div class="spread-top">

            <span class="spread-number">
              ${escapeHTML(chapter.number)}
            </span>

            <span class="spread-status">
              ${
                chapter.final
                  ? "FINAL PAGE"
                  : "ARCHIVED"
              }
            </span>

          </div>


          <div class="spread-main">

            <span>
              ${escapeHTML(chapter.section)}
            </span>

            <h3>
              ${escapeHTML(chapter.title)}
            </h3>

            <p>
              ${escapeHTML(chapter.text)}
            </p>

          </div>


          <div class="spread-footer">

            <div>

              <span>
                ${escapeHTML(chapter.footerLabel)}
              </span>

              <strong>
                ${escapeHTML(chapter.footerValue)}
              </strong>

            </div>

            <span class="spread-number">
              ${escapeHTML(chapter.number)}
            </span>

          </div>
        `;


        journeyTrack.appendChild(
          spread
        );

      }
    );


  totalChapters.textContent =
    String(
      GRADUATION.chapters.length
    ).padStart(
      2,
      "0"
    );


  updateJourneyUI(
    0
  );

}


/* =========================================================
   JOURNEY CONTROLS
========================================================= */

function setupJourneyControls() {

  journeyPrev.addEventListener(
    "click",
    () => {

      if (
        desktopMedia.matches &&
        horizontalTrigger
      ) {

        moveDesktopChapter(
          -1
        );

        return;

      }


      scrollMobileChapter(
        -1
      );

    }
  );


  journeyNext.addEventListener(
    "click",
    () => {

      if (
        desktopMedia.matches &&
        horizontalTrigger
      ) {

        moveDesktopChapter(
          1
        );

        return;

      }


      scrollMobileChapter(
        1
      );

    }
  );


  journeyTrack.addEventListener(
    "scroll",
    handleNativeJourneyScroll,
    {
      passive: true
    }
  );


  journeyTrack.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "ArrowRight"
      ) {

        event.preventDefault();

        journeyNext.click();

      }


      if (
        event.key ===
        "ArrowLeft"
      ) {

        event.preventDefault();

        journeyPrev.click();

      }

    }
  );

}


/* =========================================================
   MOBILE / TABLET SWIPE
========================================================= */

function scrollMobileChapter(
  direction
) {

  const card =
    journeyTrack.querySelector(
      ".spread"
    );


  if (!card) {
    return;
  }


  const distance =
    card.offsetWidth + 12;


  journeyTrack.scrollBy({

    left:
      direction *
      distance,

    behavior:
      reducedMotion
        ? "auto"
        : "smooth"

  });

}


function handleNativeJourneyScroll() {

  if (
    desktopMedia.matches &&
    horizontalTrigger
  ) {

    return;

  }


  const maxScroll =
    journeyTrack.scrollWidth -
    journeyTrack.clientWidth;


  const progress =
    maxScroll > 0
      ? journeyTrack.scrollLeft /
        maxScroll
      : 0;


  const index =
    Math.round(
      progress *
      (
        GRADUATION.chapters.length -
        1
      )
    );


  updateJourneyUI(
    index
  );

}


/* =========================================================
   UI
========================================================= */

function updateJourneyUI(
  index
) {

  const safe =
    Math.max(
      0,
      Math.min(
        GRADUATION.chapters.length - 1,
        index
      )
    );


  activeChapter.textContent =
    String(
      safe + 1
    ).padStart(
      2,
      "0"
    );


  const percentage =
    (
      (
        safe + 1
      ) /
      GRADUATION.chapters.length
    ) *
    100;


  journeyProgress.style.width =
    `${percentage}%`;

}


/* =========================================================
   DESKTOP HORIZONTAL GSAP
========================================================= */

function setupResponsiveHorizontal() {

  if (reducedMotion) {
    return;
  }


  const refresh =
    () => {

      clearHorizontal();


      if (
        desktopMedia.matches
      ) {

        setupDesktopHorizontal();

      }

    };


  refresh();


  window.addEventListener(
    "resize",
    () => {

      clearTimeout(
        resizeTimer
      );


      resizeTimer =
        setTimeout(
          refresh,
          220
        );

    }
  );

}


function setupDesktopHorizontal() {

  if (
    typeof gsap ===
      "undefined" ||
    typeof ScrollTrigger ===
      "undefined"
  ) {

    return;

  }


  gsap.registerPlugin(
    ScrollTrigger
  );


  document.body.classList.add(
    "has-horizontal-gsap"
  );


  const section =
    document.querySelector(
      ".journey-section"
    );


  const viewportWidth =
    window.innerWidth;


  const getDistance =
    () => {

      return Math.max(
        0,
        journeyTrack.scrollWidth -
        viewportWidth +
        70
      );

    };


  horizontalTween =
    gsap.to(
      journeyTrack,
      {

        x: () =>
          -getDistance(),

        ease:
          "none",

        scrollTrigger: {

          trigger:
            section,

          start:
            "top top",

          end: () =>
            `+=${getDistance() + 700}`,

          pin:
            true,

          scrub:
            1,

          anticipatePin:
            1,

          invalidateOnRefresh:
            true,

          onUpdate:
            self => {

              const index =
                Math.round(
                  self.progress *
                  (
                    GRADUATION.chapters.length -
                    1
                  )
                );


              updateJourneyUI(
                index
              );

            }

        }

      }
    );


  horizontalTrigger =
    horizontalTween
      .scrollTrigger;

}


/* =========================================================
   DESKTOP BUTTON NAV
========================================================= */

function moveDesktopChapter(
  direction
) {

  if (!horizontalTrigger) {
    return;
  }


  const current =
    Number(
      activeChapter.textContent
    ) - 1;


  const next =
    Math.max(
      0,
      Math.min(
        GRADUATION.chapters.length - 1,
        current + direction
      )
    );


  const ratio =
    GRADUATION.chapters.length > 1
      ? next /
        (
          GRADUATION.chapters.length -
          1
        )
      : 0;


  const scrollRange =
    horizontalTrigger.end -
    horizontalTrigger.start;


  const target =
    horizontalTrigger.start +
    scrollRange *
    ratio;


  window.scrollTo({

    top:
      target,

    behavior:
      reducedMotion
        ? "auto"
        : "smooth"

  });

}


/* =========================================================
   CLEAR DESKTOP
========================================================= */

function clearHorizontal() {

  document.body.classList.remove(
    "has-horizontal-gsap"
  );


  if (
    horizontalTrigger
  ) {

    horizontalTrigger.kill();

    horizontalTrigger =
      null;

  }


  if (
    horizontalTween
  ) {

    horizontalTween.kill();

    horizontalTween =
      null;

  }


  if (
    typeof gsap !==
      "undefined"
  ) {

    gsap.set(
      journeyTrack,
      {
        clearProps:
          "transform"
      }
    );

  }

}


/* =========================================================
   OTHER SCROLL ANIMATIONS
========================================================= */

function setupAnimations() {

  if (
    reducedMotion ||
    typeof gsap ===
      "undefined" ||
    typeof ScrollTrigger ===
      "undefined"
  ) {

    return;

  }


  gsap.registerPlugin(
    ScrollTrigger
  );


  /*
    Record cards
  */

  gsap.utils
    .toArray(
      ".record-cell"
    )
    .forEach(
      element => {

        gsap.from(
          element,
          {

            opacity: 0,

            y: 22,

            duration: 0.6,

            ease:
              "power2.out",

            scrollTrigger: {

              trigger:
                element,

              start:
                "top 92%",

              once:
                true

            }

          }
        );

      }
    );


  /*
    Book completed
  */

  gsap.from(
    ".completed-content",
    {

      opacity: 0,

      y: 30,

      duration: 0.8,

      ease:
        "power2.out",

      scrollTrigger: {

        trigger:
          ".completed-section",

        start:
          "top 65%",

        once:
          true

      }

    }
  );


  gsap.from(
    ".completed-rule",
    {

      scaleX: 0,

      transformOrigin:
        "left center",

      duration: 1,

      ease:
        "power2.out",

      scrollTrigger: {

        trigger:
          ".completed-rule",

        start:
          "top 85%",

        once:
          true

      }

    }
  );


  /*
    New chapter
  */

  gsap.from(
    ".new-chapter-content",
    {

      opacity: 0,

      y: 28,

      duration: 0.8,

      ease:
        "power2.out",

      scrollTrigger: {

        trigger:
          ".new-chapter-section",

        start:
          "top 70%",

        once:
          true

      }

    }
  );


  /*
    Invitation edition
  */

  gsap.from(
    ".edition-card",
    {

      opacity: 0,

      y: 35,

      duration: 0.8,

      ease:
        "power2.out",

      scrollTrigger: {

        trigger:
          ".edition-card",

        start:
          "top 88%",

        once:
          true

      }

    }
  );

}


/* =========================================================
   DATE
========================================================= */

function setupDate() {

  const date =
    new Date(
      GRADUATION.startAt
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return;

  }


  const dateFormatter =
    new Intl.DateTimeFormat(
      "en",
      {

        weekday:
          "long",

        month:
          "long",

        day:
          "numeric",

        year:
          "numeric",

        timeZone:
          GRADUATION.timeZone

      }
    );


  const timeFormatter =
    new Intl.DateTimeFormat(
      "en",
      {

        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,

        timeZone:
          GRADUATION.timeZone

      }
    );


  document.getElementById(
    "formattedDate"
  ).textContent =
    dateFormatter.format(
      date
    );


  document.getElementById(
    "formattedTime"
  ).textContent =
    timeFormatter.format(
      date
    );


  document.getElementById(
    "fullAddress"
  ).textContent =
    [
      GRADUATION.address,
      GRADUATION.country
    ]
      .filter(Boolean)
      .join(", ");

}


/* =========================================================
   MAP
========================================================= */

function setupMaps() {

  mapsButton.href =
    getMapsUrl();

}


function getMapsUrl() {

  if (
    GRADUATION.mapsUrl &&
    GRADUATION.mapsUrl.trim()
  ) {

    return GRADUATION.mapsUrl;

  }


  const query =
    [
      GRADUATION.venue,
      GRADUATION.address,
      GRADUATION.city,
      GRADUATION.country
    ]
      .filter(Boolean)
      .join(", ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      query
    )
  );

}


/* =========================================================
   CALENDAR
========================================================= */

function setupCalendar() {

  calendarButton.addEventListener(
    "click",
    downloadCalendar
  );

}


function downloadCalendar() {

  const start =
    new Date(
      GRADUATION.startAt
    );


  const end =
    new Date(
      GRADUATION.endAt
    );


  if (
    Number.isNaN(
      start.getTime()
    ) ||
    Number.isNaN(
      end.getTime()
    )
  ) {

    return;

  }


  const title =
    `${GRADUATION.graduateName} Graduation Celebration`;


  const location =
    [
      GRADUATION.venue,
      GRADUATION.address,
      GRADUATION.city,
      GRADUATION.country
    ]
      .filter(Boolean)
      .join(", ");


  const shareUrl =
    getShareUrl();


  const description =
    [
      GRADUATION.tagline,
      GRADUATION.degree,
      GRADUATION.university,
      shareUrl
        ? `Invitation: ${shareUrl}`
        : ""
    ]
      .filter(Boolean)
      .join("\\n");


  const content =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//InviteUs//NewChapter//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@inviteus.party
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(start)}
DTEND:${formatICSDate(end)}
SUMMARY:${escapeICS(title)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(shareUrl)}
END:VEVENT
END:VCALENDAR`;


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    "graduation-new-chapter.ics";


  document.body.appendChild(
    link
  );


  link.click();


  link.remove();


  URL.revokeObjectURL(
    url
  );

}


function formatICSDate(
  date
) {

  return date
    .toISOString()
    .replace(
      /[-:]/g,
      ""
    )
    .replace(
      /\.\d{3}/,
      ""
    );

}


function escapeICS(
  value = ""
) {

  return String(value)

    .replace(
      /\\/g,
      "\\\\"
    )

    .replace(
      /,/g,
      "\\,"
    )

    .replace(
      /;/g,
      "\\;"
    )

    .replace(
      /\n/g,
      "\\n"
    );

}


/* =========================================================
   SHARE
========================================================= */

function setupShare() {

  shareButton.addEventListener(
    "click",
    shareInvitation
  );

}


async function shareInvitation() {

  const url =
    getShareUrl();


  const title =
    `${GRADUATION.graduateName} — New Chapter`;


  const text =
    `${GRADUATION.tagline} ${GRADUATION.graduateName}, ${GRADUATION.classYear}.`;


  try {

    if (
      navigator.share
    ) {

      await navigator.share({
        title,
        text,
        url
      });


      showShareFeedback(
        "Invitation shared successfully."
      );


      return;

    }


    if (
      navigator.clipboard &&
      window.isSecureContext
    ) {

      await navigator.clipboard.writeText(
        url
      );


      showShareFeedback(
        "Invitation link copied."
      );


      return;

    }


    fallbackCopy(
      url
    );


    showShareFeedback(
      "Invitation link copied."
    );

  } catch (error) {

    if (
      error?.name ===
      "AbortError"
    ) {

      return;

    }


    fallbackCopy(
      url
    );


    showShareFeedback(
      "Invitation link copied."
    );

  }

}


function getShareUrl() {

  if (
    GRADUATION.shareUrl &&
    GRADUATION.shareUrl.trim()
  ) {

    return GRADUATION.shareUrl;

  }


  return window.location.href;

}


function fallbackCopy(
  value
) {

  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    value;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  document.body.appendChild(
    textarea
  );


  textarea.select();


  document.execCommand(
    "copy"
  );


  textarea.remove();

}


function showShareFeedback(
  message
) {

  shareFeedback.textContent =
    message;


  clearTimeout(
    showShareFeedback.timer
  );


  showShareFeedback.timer =
    setTimeout(
      () => {

        shareFeedback.textContent =
          "";

      },
      3500
    );

}


/* =========================================================
   UTILITY
========================================================= */

function escapeHTML(
  value = ""
) {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}
