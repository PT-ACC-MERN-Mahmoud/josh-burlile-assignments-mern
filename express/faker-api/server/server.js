const faker = require("faker");

const express = require("express");
const app = express();
const port = 8000;

const createUser = () => ({
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    password: faker.internet.password(),
    _id: faker.datatype.uuid(),
    });
console.log(createUser());

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
    });
console.log(createCompany());

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const responseObject = {
    user: newUser,
    company: newCompany,
    };
    res.json(responseObject);
});

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
