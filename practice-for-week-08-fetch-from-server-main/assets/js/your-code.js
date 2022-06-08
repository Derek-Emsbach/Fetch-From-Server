export function getAllDogs() {
    return fetch("/dogs")
}

export function getDogNumberTwo() {
   return fetch("/dogs/2")
}

export function postNewDog() {
    return fetch("/dogs", {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        "body" : new URLSearchParams({
            "name" : true,
            "age" : true
        }),
    })
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}
