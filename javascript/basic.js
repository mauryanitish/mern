/*
    JavaScript Basics:
        Keywords:
            Reserve Words
        Identifiers:
            Name of programming entities likes: variables,functions,objects, classes, etc

            Rules:
                1. Not used Reserve words
                2. Digits are not used in starting of identifier but use postfix eg: not use as 1a. use as a1
                3. Not use any special characters expect _ (Underscore).
                4. Not use same name in same statement.
        Datatypes:
            1. Boolean : true   false
            2. Number : 10  -30     40.3
            3. String : 'Hello' "World"
            4. Array 
            5. null
            6. undefined 
            7. bigint
            8. objects

        Variables : Name of memory location in which RAM  which contains some information
                    or
                    Variables are data containers

                    It is used when information is not fixed. 
                    Syntax :
                        1. var  variableName = value;
                        eg. var a = 10; FUNCTION LEVEL
                        2. let variableName = value;
                        eg. let a = 10; BLOCK LEVEL
                        3. const variableName = value;
                        eg. const a = 10;
                        4. variableName = value;
                        eg. a = 10; not reccommended GLOBE LEVEL

        Constants : fixed value
                    eg :  10 -83 983.9  true false "srting" 'world'
        Tokens : smallest entities of program
        Input/Output : 
            output :
                console.log()
                console.warn()
                console.error()
                document.write()
                alert()
                confirm()
                etc
            Input :
                form
                prompt() 
        Operators
*/

var a = 10
var b = 20.9
var c = true
var d = false
var e = "Hello"
var f = 'World'

console.log(a,typeof(a))
console.log(b,typeof(b))
console.log(c,typeof(c))
console.log(d,typeof(d))
console.log(e,typeof(e))
console.log(f,typeof(f))


// add
{
    let a = 20
    let b = 30
    var sum = a+b
    console.log(a," + ",b," = ",sum)
    // concatination
    console.log(a+" + "+b+" = "+sum)
    // after version 6
    console.log(`${a} + ${b} = ${sum}`);
}