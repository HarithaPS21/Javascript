function validateAge() {
    // alert("alert")
    let age = txt.value
    // let div = document.createElement("div")
    let res = ""
    if (age<18) {
        // div.innerHTML = "<p>  not eligible  </p>"
        res = `<p style="color:red;">  not eligible  </p>`

    }
    else{
        res = `<p style="color:green;">  Eligible  </p>`
    }
    // document.querySelector("body").append(div)
    result.innerHTML = res
}