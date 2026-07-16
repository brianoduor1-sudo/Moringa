/*
    in built js library<api> handling http request

    fetch(@param1,@param2) => response on object with function then
                            => response.catch

    @param1=>url:<>
    @param2=>configuration. <headers,method>

*/

const requestOptions = {
    method: "GET",
    redirect: "follow",
};

fetch("https://api.github.com/users", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        console.log("type of result", typeof result);
        console.log(result);
    })
    .catch((error) => console.error(error));



/*
code without a promise.
1.create a variable<any name> global variable
2.console.log the value of the variable.
3.create and call a function that modifies this variable
4.console.log( ) the value of the variable
*/

let flow = "This flow";
console.log("36:", flow);

function testfunc() {
    flow = "updated flow";
}

testfunc();

console.log("41:", flow);

let result = fetch("https://api.github.com/users", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        // console.log("line 36");
        // flow = "Updated Flow";
        // console.log("type of result", typeof result);
        // console.log(result);
    });

console.log(result);

/*
JS has change how we execute lines of code
*/