// function to accept and return  string with its index as output

function stringOutput(str){
    
    let i=0;
    let result= '';
    for(i=0;i<str.length;i++){
        result +=i+1 + ' ' + str[i];
        result +='\n';
    }
    return result;
    }

    console.log(stringOutput(['Apple', 'Banana', 'Watermelon', 'Mango']))
