# [<SimpleElevator>](https://www.codewars.com/kata/simple-elevator)

Explain the challenge as completely & clearly as you can.

simple_elevator: Function
* Args: 2
  1. Number: the floor the elevator is on ( 0,1,2,3)
  2. String: the floor the elevator should go to ('0','1','2','3')

* Return: Numbers between -3,-2,-1,0,1,2,3
  * Return value indicates hom many floors the elevator has traveled.

* Behavior: This function will move from it's strating location to it's finishing location, returning the number of floors moved. It is a safe elevator. In case any argument is invalid, it will stay in place to avoid injuring the occupants.

'''js
// copy of your polished solution for easy reference.
'''


### Index
* [Input Classifications](#input-classifications)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)
* [Resource Estimation](#resource-estimation)
* [Scaffolding](#scaffolding)
* [Bugs & Challenges](#bugs-challenges) 
* [Language Features](#language-features)
* [Use Cases](#use-cases)
* [Learning Journal](#learning-journal)

---

## Input Classifications

What characteristics of your inputs are important for your solution?  

What groupings will you have to consider when building your solution?  

How did you use this information to select your test cases?



goto(a, b) --> a should be a number, b should be a string


What can we measure, analyze or do to incoming args:
* Types of arguments
	* If it's string, is it empty
	* Do math to them if they're numbers
	* Convert types
	* Range of numbers (<, >, ==, ...)
		* Exclude or include accordingly
* Compare to know valid inputs

Classifications:
* Validity & Invalidity
	* Valid floor, invalid button
	* ... all 4 combinations  
* Floor is higher than button
* Floor is lower  than button
* Floor is same as button
* Button is a string, but not in the list
* Floor is a number, but is not in the rage
* Floor is a number, but has a decimal (ie. is a Float)
* No second argument is passed in
* More than two args are passed in 
* Number strats with too many 0's
* (Noticed this one after failing tests):
   * Inputs whose difference is a valid output, but are not valid themselves.

[TOP](#index)

___

## Solution Explanation

We'll take the arguments directly as they are and try to substracte them, placing some faith that we'll get more valid arguments than invalid arguments. If the result is one of our accepted outputs we'll return it, if not we'll return 0.


 [directly from Sketchboard.io](https://sketchboard.io/blog/2014/03/06/github-sketchboard.html).

[TOP](#index)

---

## Constraints

We will solve it twice:
	1. with pure function
	2. with an object:
	  * testing 

[TOP](#index)

___


## Resource Estimation

Estimate how what resources you will require, and how much of each.  


[TOP](#index)

___

## Scaffolding

Provide a link to Gist you used to construct your solution's scaffolding.  What difficulties did you have making it?  How helpful was it in coming up with your finished solution?

[TOP](#index)

___

## Challenges & Bugs

What particular challenges & bugs did you come across when you were filling in your scaffolding?

Were they logic bugs? Language bugs? 

Did you have trouble keeping track of which part of the challenge you were solving?

[TOP](#index)

___

## Language Features

Nothing fancy: if's, for's and number convertion. 

[TOP](#index)

---
## Use Cases

List 5+ use cases for your solution.  They can be stand-alone, part of an application, or impractical.  Your use cases can be overly complicated, or very basic. What's important is that you come up with as many and as diverse use cases as possible.


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem:
 * !! we faildd the rest case s_e (6, "3") !!!
  	 * this showed us that our strategy is bad, we will accept many arugments that return a valid output but are invalid inputs
     * this class of arguments: any numeber

New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

