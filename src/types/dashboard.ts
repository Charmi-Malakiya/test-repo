export interface CovidDataType {
    updated: number;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
    affectedCountries: number;
}

// Define the interface for a single country's data
export interface ContryCovidDataType {
    country: string;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    recoveredPerOneMillion: number;
    activePerOneMillion: number;
    criticalPerOneMillion: number;
    totalTests: number;
    testsPerOneMillion: number;
    population: number;
    continent: string;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    undefined: number;
  }

  export interface CasesWithDateType {
    country: string;
    province?: string;
    timeline: {
      cases: { [date: string]: number };
      deaths: { [date: string]: number };
      recovered: { [date: string]: number };
    };
  }
  
  