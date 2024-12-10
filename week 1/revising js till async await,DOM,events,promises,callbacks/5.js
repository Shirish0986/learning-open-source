const calstrings = (strings) => {
    vowel = 0
    for (let i = 0; i < strings.length; i++) {
        // if (strings[i] === 'a' || strings[i] === 'e' || strings[i] === 'i' || strings[i] === 'o' || strings[i] === 'u'){
        //     vowel++;
        // }
        if ("aeiou".includes(strings[i])) {
            vowel++
        }
    }
    console.log(vowel)
}

calstrings("shirish")