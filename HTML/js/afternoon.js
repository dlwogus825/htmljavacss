class Student {
  #name = "이재현";
  #birthday = "2001.05.01";
  #country = "South Korea";
  #city = "SEOUL";
  #email = "dlwogus825@gmail.com";
  #phone = "010-6494-7516";
  #schoolname = "충암고등학교";
  #schoolnumber = "2020051078";

  constructor(
    name,
    birthday,
    country,
    city,
    email,
    phone,
    schoolname,
    schoolnumber
  ) {
    this.#name = name;
    this.#birthday = birthday;
    this.#country = country;
    this.#city = city;
    this.#email = email;
    this.#phone = phone;
    this.#schoolname = schoolname;
    this.#schoolnumber = schoolnumber;
  }

  getName() {
    return this.#name;
  }

  getBirthday() {
    return this.#birthday;
  }

  getCountry() {
    return this.#country;
  }

  getCity() {
    return this.#city;
  }

  getEmail() {
    return this.#email;
  }

  getPhone() {
    return this.#phone;
  }

  getSchoolname() {
    return this.#schoolname;
  }

  getSchoolnumber() {
    return this.#schoolnumber;
  }

  print() {
    let msg = `name: ${this.#name}, birth: ${this.#birthday}, country: ${
      this.#country
    }, city: ${this.#city}, email: ${this.email}, phone: ${
      this.phone
    },schoolnumber: ${this.#schoolnumber}, schoolnumber: ${this.#schoolnumber}`;
    console.log(msg);
    return msg;
  }
}

let p1 = new Student(
  "이재현",
  "2001.05.01",
  "South Korea",
  "SEOUL",
  "dlwogus825@gmail.com",
  "010-6494-7516",
  "충암고등학교",
  "2020051078"
);

console.log(`p1.getName = ${p1.getName()}`);
console.log(`p1.getBirthday = ${p1.getBirthday()}`);
console.log(`p1.getCountry = ${p1.getCountry()}`);
console.log(`p1.getCity = ${p1.getCity()}`);
console.log(`p1.getEmail = ${p1.getEmail()}`);
console.log(`p1.getPhone = ${p1.getPhone()}`);
console.log(`p1.getSchoolname = ${p1.getSchoolname()}`);
console.log(`p1.getSchoolnumber = ${p1.getSchoolnumber()}`);
