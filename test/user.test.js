const chai = require("chai");
let chaiHttp = require('chai-http');
const request = require("supertest");
const assert = require("assert");

const expect = chai.expect;
const app = require("../server");

chai.use(chaiHttp);

describe("Users", function () {
    describe("GET /", function () {
        it("should return 200 OK with a specific message", async function () {
            const response = await request(app)
                .get("/")
                .expect(200)
                .expect("Content-Type", /json/);
            assert.strictEqual(response.body.message, "Welcome to mrvincentoti application.");
        });

        it("should return 200 OK with several users", async function () {
            const response = await request(app)
                .get("/api/users")
                .expect(200)
                .expect("Content-Type", /json/);

            const users = response.body;
            expect(users).to.be.an("array");
            expect(users).length.to.be.greaterThan(0);
        });

        it("should return 200 OK with valid users", async function () {
            const response = await request(app)
                .get("/api/users")
                .expect(200)
                .expect("Content-Type", /json/);

            const users = response.body;
            expect(users).to.be.an("array");

            users.forEach(user => {
                expect(user.username).to.be.a("string");
                expect(user.email).to.be.a("string");
                expect(user.id).to.be.a("number");
            });
        });
    });

    describe("POST /api/auth/signup", function () {
        it('it should register a user', async function () {
            let user = {
                username: "admin",
                email: "admin2@demo.com",
                password: "password123",
                role: ["user"]
            }
            const response = await request(app)
                .post('/api/auth/signup')
                .send(user);
            const output = response.body;
            expect(output).to.be.an("object");
            expect(output).to.have.property('message');
        });
    });

});