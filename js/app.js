const worldwideApi = "https://api.covid19api.com/summary";
const cases = document.querySelector("#cases");
const recoveries = document.querySelector("#recoveries");
const deaths = document.querySelector("#deaths");
const tbody = document.querySelector("tbody");
const date = document.querySelector("#date");
const counter = document.querySelector(".counter");
const gambiaCases = document.querySelector("#gambia-cases");
const gambiaRecoveries = document.querySelector("#gambia-recoveries");
const gambiaDeaths = document.querySelector("#gambia-deaths");
const senegalCases = document.querySelector("#senegal-cases");
const senegalRecoveries = document.querySelector("#senegal-recoveries");
const senegalDeaths = document.querySelector("#senegal-deaths");

const coronaWWW = async () => {
  const response = await fetch(worldwideApi);
  const data = await response.json();
  cases.textContent = 0;
  deaths.textContent = 0;
  recoveries.textContent = 0;
  const updateCases = () => {
    const TotalConfirmed = data.Global.TotalConfirmed;
    const increment = TotalConfirmed / 100;
    let c = +cases.textContent;
    if (c < TotalConfirmed) {
      c += increment;
      cases.textContent = c.toFixed(0);
      setTimeout(updateCases, 30);
    } else {
      cases.textContent = new Intl.NumberFormat().format(TotalConfirmed);
    }
  };

  const updateRecoveries = () => {
    const TotalRecovered = data.Global.TotalRecovered;
    const increment = TotalRecovered / 100;
    let c = +recoveries.textContent;
    if (c < TotalRecovered) {
      c += increment;
      recoveries.textContent = c.toFixed(0);
      setTimeout(updateRecoveries, 30);
    } else {
      recoveries.textContent = new Intl.NumberFormat().format(TotalRecovered);
    }
  };

  const updateDeaths = () => {
    const TotalDeaths = data.Global.TotalDeaths;
    const increment = TotalDeaths / 100;
    let c = +deaths.textContent;
    if (c < TotalDeaths) {
      c += increment;
      deaths.textContent = c.toFixed(0);
      setTimeout(updateDeaths, 30);
    } else {
      deaths.textContent = new Intl.NumberFormat().format(TotalDeaths);
    }
  };

  const gambia = (element) => {
    if (element.CountryCode == "GM") {
      gambiaCases.textContent = element.TotalConfirmed;
      gambiaRecoveries.textContent = element.TotalRecovered;
      gambiaDeaths.textContent = element.TotalDeaths;
    }
  };

  const senegal = (element) => {
    if (element.CountryCode == "SN") {
      senegalCases.textContent = element.TotalConfirmed;
      senegalRecoveries.textContent = element.TotalRecovered;
      senegalDeaths.textContent = element.TotalDeaths;
    }
  };

  updateCases();
  updateRecoveries();
  updateDeaths();

  data.Countries.forEach((element) => {
    gambia(element);
    senegal(element);
  });
};

coronaWWW();
let theDate = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.textContent = `${days[theDate.getUTCDay()]}, ${theDate.getUTCDate()} ${
  months[theDate.getUTCMonth()]
}`;
