console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
{
    for(i=1; i <=count; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i);
        }
    }
}
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age)
{
    let aboveSixteen = "Congrats " + userName + ", you can drive!";
    let belowSixteen = "Sorry "+ userName +", but you need to wait until you're 16."
    if(age >= 16)
    {
        console.log(aboveSixteen);
    }
    else
    {
        console.log(belowSixteen);
    }
}
checkAge("User1",35);
checkAge("User2", 11);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function cartesuanPlane(x,y)
{
    if(x>0 && y>0)
    {
        console.log("You are in Quadrant 1");
    }
    else if(x<0 && y>0)
    {
        console.log("You are in Quadrant 2");
    }
    else if(x<0 && y<0)
    {
        console.log("You are in Quadrant 3");
    }
    else if(x>0 && y<0)
    {
        console.log("You are in Quadrant 4");
    }
    else if(x == 0 && x == 0)
    {
        console.log("You are at the origin");
    }
}
cartesuanPlane(0,0);
cartesuanPlane(7,8);
cartesuanPlane(-2,9);
cartesuanPlane(-5,-7);
cartesuanPlane(10,-1);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangle(x,y,z)
{
    if(x+y<z || y+z<x || x+z<y)
    {
        console.log("Invalid triangle");
    }
    else if(x == y && y==z && x==z)
    {
        console.log("Equilateral triangle: all side lengths equal");
    }
    else if(x == y || y == z || x==z)
    {
        console.log("Isosceles triangle: only two side lengths equal");
    }
    else if(x!=y && y!=z && x!=z)
    {
        console.log("Scalene triangle: all different side lengths");
    }
}
triangle(7, 7, 7);
triangle(27, 1, 1);
triangle(8, 8, 9);
triangle(4, 5, 6);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlan(planLimit, day, usage)
{
    let daysremaining = 30 - day;
    let averageUse = planLimit / 30;
    let currentuse = usage / day;
    let exceedUsage = (currentuse*30) - planLimit;
    let newAverageUse = (planLimit - usage) / daysremaining;
    let underUsage = planLimit - (currentuse*30);


    console.log(day + " days used, "+ daysremaining + " days remaining.");
    console.log("Average daily use: "+ averageUse +" GB/day");
    if(averageUse < currentuse)
    {
        console.log("You are EXCEEDING your average daily use ("+ currentuse +" GB/day, continuing this high usage, you'll exceed your data plan by "+ exceedUsage +" GB.To stay below your data plan, use no more than "+newAverageUse+" GB/day.");
    }
    else if(averageUse > currentuse)
    {
        console.log("You are UNDER your average daily use ("+ currentuse +" GB/day, continuing this low usage, you will have "+ underUsage +" GB of your data plan leftover. You can use more data and still stay below your data plan, by using no more than "+newAverageUse+" GB/day.");
    }
}
dataPlan(100, 15, 56);
dataPlan(100, 15, 10);