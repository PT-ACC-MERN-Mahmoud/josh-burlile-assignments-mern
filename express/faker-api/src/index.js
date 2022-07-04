const faker = require("faker");

const express = require("express");
const app = express();

const createUser = () => ({
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    _Id: faker.datatype.uuid(),
    });

const createCompany = () => ({
    _Id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
    });

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

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
