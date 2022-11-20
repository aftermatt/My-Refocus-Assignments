import { sort, search, newsList } from "./main.js";

//Example testing for search function
// test("Search function testing", () => {
//   expect(search(newsList)).toBe("I am a cool web developer");
// });

test("Search function testing with InputValue = 'an'", () => {
  expect(search(searchList)).toEqual([
    "What films should an aspiring journalist watch?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Media glare can enrich tennis pros yet imperil mental health",
    "What books should an aspiring journalist read?",]);
  });

test("Sort function testing with InputValue = 'an'", () => {
expect(sort("descending")).toEqual([
  "What films should an aspiring journalist watch?",
  "What books should an aspiring journalist read?",
  "Media glare can enrich tennis pros yet imperil mental health",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Buried underpants and tea bags help scientists evaluate soil"]);
});
