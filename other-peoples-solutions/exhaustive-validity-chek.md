# [Exhaustive Validity Check's Solution

```js
exhaustive_check(num_floor, string_butt)
    returner
    valid_floor = false
    valid_butt = false

    possible_floors <- [0, 1, 2, 3]
    for floor in possible_floors
        if num_floor== floor
            valid_floor = true

    possible_butts <- ["0", "1", "2", "3"]
    for butt in possible_butts
        if string_butt == butt
            valid_butt = true

    if (valid_butt & valid_floor)
        returner = num_floor - string_butt
    
    return returner
END exhaustive_check

// copy-paste their solution here
```

---

## Solution Explanation

Explain the solution they used.  Was it heavy in logic or languge features? What strategies did they use?  How is it like and unlike others?

---

## Language Features

What language features did they use?

---

## Comparison

How does their solution compare to yours?  How would you make yours more like theirs? What suggestions would you have for them?

---

## Notes

What you learned from this solution:
*
*
*

What you still don't understand:
*
*
*

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
