// var text = "hello hai hello hai how"
// var w_count = {}
// text.split(" ").map(word => word in w_count ? w_count[word]+=1 : w_count[word]=1)
// console.log(w_count);



// hhaaii hhooww aarree  => hai how are
var data = "hhaaii hhooww aarree"
var words = data.split(" ")
var items = []
console.log(words);
for (let word of words) {
    console.log(word);
    for (let item of word) {
        console.log(item);
        if (item in items) {
            continue
        }
        else{
            items.
        }
    }
}