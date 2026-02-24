import { maxHeaderSize } from "http";

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "ograham";
  }
  if (query.toLowerCase().includes("largest")) {
    //return the largest integer listed in the query
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      return numbers.map(Number).sort((a, b) => b - a)[0].toString();
    }
  }
  if (query.toLowerCase().includes("plus")) {
    //return the sum of the two numbers in the query
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      return (Number(numbers[0]) + Number(numbers[1])).toString();
    }
  }//test
  if (
    query.toLowerCase().includes("andrew") &&
    query.toLowerCase().includes("id")
  ) {
    return "ograham";
  }

  return "";
}
