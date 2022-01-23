const chai = require("chai");
let chaiHttp = require('chai-http');
const request = require("supertest");
const assert = require("assert");

const expect = chai.expect;
const app = require("../server");

chai.use(chaiHttp);

describe("Users", function () {
    describe("GET /", function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});