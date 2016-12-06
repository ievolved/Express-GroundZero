
process.env.NODE_ENV = "test";


let chai = require("chai");
let chaiHttp = require("chai-http");
let request = require("request");
let server = require("../server/server.js");

let should = chai.should();
let expect = require("chai").expect;

chai.use(chaiHttp);


"use strict";

let host = "http://127.0.0.1:4000";

describe("pages.", () => {
  it("homepage should load successfully.", (done) => {
    request
      .get(`${host}/`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/html; charset=UTF-8");
        expect(body).include("static");
        done();
      });
  });

  it("/index.html should load successfully.", (done) => {
    request
      .get(`${host}/index.html`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/html; charset=UTF-8");
        expect(body).include("static");
        done();
      });
  });

  it("/invalid.html should return 200 with content 'star'.", (done) => {
    request
      .get(`${host}/invalid.html`, (err, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).include("star");
        done();
      });
  });

  it("unsupported method should return 404 (really should be 405).", (done) => {
    request
      .put(`${host}/invalid.html`, (err, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
  });
});

