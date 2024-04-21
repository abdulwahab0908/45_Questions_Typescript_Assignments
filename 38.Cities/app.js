function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('lahore');
describe_city('abudhabhi', 'dubai');
describe_city('tokyo', 'japan');
