const nepaliDateData = {
  '2000': [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2001': [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2002': [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2003': [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2004': [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2005': [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2006': [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2007': [2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2008': [2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  '2009': [2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2010': [2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2011': [2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2012': [2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  '2013': [2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2014': [2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2015': [2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2016': [2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  '2017': [2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2018': [2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2019': [2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2020': [2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  '2021': [2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2022': [2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  '2023': [2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2024': [2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  '2025': [2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2026': [2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2027': [2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2028': [2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2029': [2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  '2030': [2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2031': [2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2032': [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2033': [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2034': [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2035': [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  '2036': [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2037': [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2038': [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2039': [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  '2040': [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2041': [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2042': [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2043': [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  '2044': [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2045': [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2046': [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2047': [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  '2048': [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2049': [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  '2050': [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2051': [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  '2052': [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2053': [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  '2054': [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2055': [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2056': [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  '2057': [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2058': [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2059': [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2060': [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2061': [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2062': [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  '2063': [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2064': [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2065': [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2066': [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  '2067': [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2068': [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2069': [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2070': [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  '2071': [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2072': [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  '2073': [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  '2074': [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  '2075': [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2076': [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  '2077': [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  '2078': [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  '2079': [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  '2080': [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  '2081': [2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  '2082': [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  '2083': [2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  '2084': [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  '2085': [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  '2086': [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  '2087': [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  '2088': [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  '2089': [2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  '2090': [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
};

export default nepaliDateData;
