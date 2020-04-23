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
    console.log("Gambia");
  }
};

const senegal = (element) => {
  if (element.CountryCode == "SN") {
    senegalCases.textContent = element.TotalConfirmed;
    senegalRecoveries.textContent = element.TotalRecovered;
    senegalDeaths.textContent = element.TotalDeaths;
    console.log("Senegal");
  }
};
