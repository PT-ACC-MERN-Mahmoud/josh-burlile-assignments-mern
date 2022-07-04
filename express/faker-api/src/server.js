import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

export const USERS: User[] = [];

export function createUser(): User {
    return {
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    userId: faker.datatype.uuid(),
    };
};

export const COMPANY: Company[] = [];

export function createCompany(): Company {
    return {
    userId: faker.datatype.uuid(),
    name: faker.company.companyName(),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),

    }
}

Array.from({ length: 10 }).forEach(() => {
    USERS.push(createUser());
});

const express = require("express");
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Awesome!");
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
