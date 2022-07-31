/**
 * https://exercism.org/tracks/javascript/exercises/freelancer-rates
 *
 * Instructions
 *
 * In this exercise you will be writing code to help a freelancer communicate with his clients about the prices of
 * certain projects. You will write a few utility functions to quickly calculate the costs for the clients.
 * 1. Calculate the day rate given an hourly rate
 *
 * A client contacts the freelancer to enquire about his rates. The freelancer explains that he works 8 hours a day.
 * However, the freelancer knows only his hourly rates for the project. Help him estimate a day rate given an hourly
 * rate.
 *
 * dayRate(89);
 * // => 712
 *
 * The day rate does not need to be rounded or changed to a "fixed" precision.
 * 2. Calculate the number of workdays given a fixed budget
 *
 * Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed
 * budget and the freelancer's hourly rate, help him calculate the number of days he would work until the budget is
 * exhausted. The result must be rounded down to the nearest whole number.
 *
 * daysInBudget(20000, 89);
 * // => 28
 *
 * 3. Calculate the discounted rate for large projects
 *
 * Often, the freelancer's clients hire him for projects spanning over multiple months. In these cases, the freelancer
 * decides to offer a discount for every full month, and the remaining days are billed at day rate. Every month has 22
 * billable days. Help him estimate his cost for such projects, given an hourly rate, the number of days the project
 * spans, and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result
 * must be rounded up to the nearest whole number.
 *
 * priceWithMonthlyDiscount(89, 230, 0.42);
 * // => 97972
 */

const WORK_DAY = 8;
const BILLABLE_DAYS = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
    return WORK_DAY * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    var months = Math.floor(numDays / BILLABLE_DAYS);
    var disc = 1.0 - discount;
    var days = numDays % BILLABLE_DAYS;
}