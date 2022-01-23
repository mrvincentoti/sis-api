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
    });
});