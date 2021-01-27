1. The length of prices will be printed, because var has no block scope.
2. the last discounted price will be printed because var has no block scope.
3. the finalprice of the last price in discounted will be printed because var has no block scope
4. The function will discount all of these prices by .5 and return [50,100,150]
5. reference error because  i is out of scope
6. assuming we did not error out already, reference error because  discountedPrice is out of scope
7.  assuming we did not error out already, the finalprice of the last price in discounted will be printed because let finalPrice = 0 is in scope but it keeps its last assigned value
8. The function will error out and not return anything
9. if we did not error out already (if prices is empty), we will get a reference error because i is out of scope
10. assuming we did not error out already (if prices is empty), reference error because  discountedPrice is out of scope
11. assuming we did not error out already, 0 will be logged (if prices is empty)
12. the function will error out at line 7 from trying to change a const variable and nothing will return
13. ""
    a. student.name
    b. student['Grad Year']
    c. student.greeting()
    d. student['Favorite Techer].name
    e. student.courseload[0]
14. ""
    a. 32 - converts 2 to string and does concatenation
    b. 1 - converts '3' to number and subtracts
    c. 3 - converts null to 0 and adds
    d. 3null - converts null to string and concatenates
    e. 4 - converts true to 1 and adds
    f. 0 - converts both to 0 and adds
    g. 3undefined - converts undefined to string and concatenates
    h. NaN - converts 3 to num and undefined to NaN and subtracts
15. 
    a.  true - converts '2' to 2 and compares
    b. false - '2' is greater than '12' lexigraphically
    c. true - '2' becomes 2 and compares
    d. false - not same type
    e. false - converts true to 1 and compares
    f. true - converts Boolean(2) to true and compares
16. == is a 'loose' comparison and === is a 'strict' comparison meaning that == tries to convert to the same type before comparing and === does not, so if 2 values are of different type they are not equal. 
17. How are you? - this is because true is converted to 1 and 1 is not equal to 2 so it does not execute. THen, 2 is converted to boolean which is true, so the else if executes. The else therefore does not execute. 
18. see file
19. [6, 8,10] - for each run of the for loop, we push the result of callback. In our case, callback() is doSomething.
    1.  doSomething executres its callback with the parameter x+2, which is function. Function multiplies this by 2, then returns. doSomething then returns this, then this is pushed to newArr. So, it goes like this: (1+2) * 2 = 6, (2+2) * 2 = 8,  (3+2) * 2 = 10.
20.  see file
21.  (Assuming the i should be a 1):
    1 4 3 2
23.  sgf




