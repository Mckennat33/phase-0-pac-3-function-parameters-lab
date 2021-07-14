function introduction(name = "Tom") { 
    return (`Hi, my name is ${name}.`); 
}

function introductionWithLanguage(name = "Tom", language = "Javascript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`); 
}

const name = "Tom"
function introductionWithLanguageOptional(name = "Tom", language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`); 
}
