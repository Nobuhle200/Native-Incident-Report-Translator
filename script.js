// Pre-fill date/time
document.getElementById("datetime").value = new Date().toISOString().slice(0, 16);

// Translation dictionary (labels and input placeholders!)
const translations = {
  en: {
    title: "Incident Reporting Portal",
    "language-label": "Language / Ulimi",
    "name-label": "Name:",
    "name-placeholder": "Enter your name",
    "surname-label": "Surname:",
    "surname-placeholder": "Enter your surname",
    "employeenumber-label": "Employee Number:",
    "employeenumber-placeholder": "Enter your employee number",
    "datetime-label": "Date & Time",
    "site-label": "Site:",
    "report-type-label": "Type of Report",
    "incident-label": "Describe the Incident",
    "incident-placeholder": "Describe...",
    "voice-label": "Upload Voice Note (Optional)",
    "media-label": "Upload Photos or Video",
    "submit-button": "Submit",
    reportTypes: {
      theft: "Theft",
      vandalism: "Vandalism",
      injury: "Injury",
      suspicious: "Suspicious"
    },
    siteOptions: {
      "Mkhukhu Estate": "Mkhukhu Estate",
      "Zimbali Estate": "Zimbali Estate"
    }
  },
  zu: {
    title: "Iphothali Yokubika Izehlakalo",
    "language-label": "Ulimi / Language",
    "name-label": "Igama:",
    "name-placeholder": "Faka igama lakho",
    "surname-label": "Isibongo:",
    "surname-placeholder": "Faka isibongo sakho",
    "employeenumber-label": "Inombolo Yomsebenzi:",
    "employeenumber-placeholder": "Faka inombolo yomsebenzi",
    "datetime-label": "Usuku Nesikhathi",
    "site-label": "Indawo:",
    "report-type-label": "Uhlobo Lweriphothi",
    "incident-label": "Chaza Izehlakalo",
    "incident-placeholder": "Chaza...",
    "voice-label": "Layisha Inothi Yezwi (Ongakukhetha)",
    "media-label": "Layisha Izithombe noma Ividiyo",
    "submit-button": "Thumela Umbiko",
    reportTypes: {
      theft: "Ukwebiwa",
      vandalism: "Umonakalo",
      injury: "Ukulimala",
      suspicious: "Okusolisayo"
    },
    siteOptions: {
      "Mkhukhu Estate": "Isitezi saseMkhukhu",
      "Zimbali Estate": "Isitezi saseZimbali"
    }
  }
};

// Update language dynamically
function updateLanguage(lang) {
  const t = translations[lang];

  // Labels
  const labelIds = [
    "title", "language-label", "name-label", "surname-label",
    "employeenumber-label", "datetime-label", "site-label",
    "report-type-label", "incident-label", "voice-label", "media-label", "submit-button"
  ];
  labelIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === "submit-button") {
        el.textContent = t[id];
      } else {
        el.textContent = t[id];
      }
    }
  });

  // Input placeholders
  const inputMap = [
    { id: "name", key: "name-placeholder" },
    { id: "surname", key: "surname-placeholder" },
    { id: "employeenumber", key: "employeenumber-placeholder" },
    { id: "incident", key: "incident-placeholder" }
  ];
  inputMap.forEach(obj => {
    const el = document.getElementById(obj.id);
    if (el && t[obj.key]) {
      el.placeholder = t[obj.key];
    }
  });

  // Report-types (select)
  const reportTypeSelect = document.getElementById("report-type");
  if (reportTypeSelect && t.reportTypes) {
    Array.from(reportTypeSelect.options).forEach((option) => {
      const key = option.value;
      if (t.reportTypes[key]) {
        option.textContent = t.reportTypes[key];
      }
    });
  }

  // Site select options
  const siteSelect = document.getElementById("site");
  if (siteSelect && t.siteOptions) {
    Array.from(siteSelect.options).forEach((option) => {
      const key = option.value;
      if (t.siteOptions[key]) {
        option.textContent = t.siteOptions[key];
      }
    });
  }
}

// Language change event
document.getElementById("language").addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

// Initial language
updateLanguage("en");

// Example form submission handler
document.getElementById("submit-button").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Form data would now be sent to the server or cloud service.");
});
