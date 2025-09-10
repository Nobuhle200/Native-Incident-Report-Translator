// Pre-fill date/time
const datetimeInput = document.getElementById("datetime");
if (datetimeInput) {
  datetimeInput.value = new Date().toISOString().slice(0, 16);
}

// Translation dictionary
const translations = {
  en: {
    title: "Incident Reporting Portal",
    "language-label": "Language / Ulimi",
    "name-label": "Name:",
    "surname-label": "Surname:",
    "employeenumber-label": "Employee Number:",
    "datetime-label": "Date & Time",
    "site-label": "Site:",
    "report-type-label": "Type of Report",
    "incident-label": "Describe the Incident",
    "voice-label": "Upload Voice Note (Optional)",
    "media-label": "Upload Photos or Video",
    "submit-button": "Submit Report",
    reportTypes: {
      theft: "Theft",
      vandalism: "Vandalism",
      injury: "Injury",
      suspicious: "Suspicious"
    }
  },
  zu: {
    title: "Iphothali Yokubika Izehlakalo",
    "language-label": "Ulimi / Language",
    "name-label": "Igama:",
    "surname-label": "Isibongo:",
    "employeenumber-label": "Inombolo Yomsebenzi:",
    "datetime-label": "Usuku Nesikhathi",
    "site-label": "Indawo:",
    "report-type-label": "Uhlobo Lweriphothi",
    "incident-label": "Chaza Izehlakalo",
    "voice-label": "Layisha Inothi Yezwi (Ongakukhetha)",
    "media-label": "Layisha Izithombe noma Ividiyo",
    "submit-button": "Thumela Umbiko",
    reportTypes: {
      theft: "Ukwebiwa",
      vandalism: "Umonakalo",
      injury: "Ukulimala",
      suspicious: "Okusolisayo"
    }
  }
};

// Update language dynamically
function updateLanguage(lang) {
  const t = translations[lang];
  for (const id in t) {
    if (id === "reportTypes") continue;
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.tagName === "BUTTON") {
        if (el.tagName === "BUTTON") {
          el.textContent = t[id];
        } else {
          el.placeholder = t[id] || el.placeholder;
        }
      } else {
        el.textContent = t[id];
      }
    }
  }

  // Update report type <select> options
  const reportTypeSelect = document.getElementById("report-type");
  if (reportTypeSelect && t.reportTypes) {
    Array.from(reportTypeSelect.options).forEach(option => {
      const key = option.value; // e.g., "theft"
      if (t.reportTypes[key]) {
        option.textContent = t.reportTypes[key];
      }
    });
  }
}

document.getElementById("language").addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

updateLanguage("en");

// Example form submission handler
document.getElementById("submit-button").addEventListener("click", () => {
  alert("Form data would now be sent to the server or cloud service.");
});
