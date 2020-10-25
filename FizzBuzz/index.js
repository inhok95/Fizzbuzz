// your code here

function main(){

    // Getting the value of input in the submit form
    $('#number-chooser').submit(function(event){
        event.preventDefault();
        $(".js-results").empty();
        let number = $(event.currentTarget).find(
            '#number-choice').val()
        //console.log(number)
        //console.log(typeof number)
        

        //Creating the function of fizzbuzz and calling it
        function fizzBuzz(number){
            let arr = []
            for (let i = 1; i <= number; i++){
                if (i % 15 === 0){
                    //console.log("fizzbuzz")
                    //arr.push('fizzbuzz')
                    arr.push($(
                        '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'))
                }else if(i % 3 ===0){
                    //console.log("fizz")
                    //arr.push('fizz')
                    arr.push($(
                        '<div class="fizz-buzz-item fizz"><span>fizz</span></div>'))
                }else if(i % 5 === 0){
                    //console.log("buzz")
                    //arr.push('buzz')
                    arr.push($(
                        '<div class="fizz-buzz-item buzz"><span>buzz</span></div>'))
                }else{
                    //console.log(i)
                    arr.push(i)
                    arr.push($(
                        `<div class="fizz-buzz-item"><span>${i}</span></div>`))
                }
            }
            return arr
        }

    
        //Displaying it on the html
        $('.js-results').append(fizzBuzz(number))
    
        

    })
}

$(main)




