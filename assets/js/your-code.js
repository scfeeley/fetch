export function getAllDogs() {
    return fetch('/dogs');
}

export function getDogNumberTwo() {
    return fetch('/dogs/2')
}

export function postNewDog() {
    let url ='/dogs';
    let name = 'dog';
    let age = 4;
    let body = new URLSearchParams({
        name: name,
        age: age
    });
    let options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded"},
        body: body
    };

    return fetch(url, options);
}

export function postNewDogV2(name, age) {
    let url = "/dogs";
    let body = new URLSearchParams({
        name: name,
        age : age,
    });
    let options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body
    };
     return fetch(url, options);
}

export function deleteDog(id) {
      let url = `/dogs/${id}/delete`
      let options = {
        method : "POST",
        headers: { "AUTH": "ckyut5wau0000jyv5bsrud90y"}
      }
      return fetch(url, options)
}