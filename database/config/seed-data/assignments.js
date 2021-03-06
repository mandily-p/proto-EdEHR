"use strict";
import { getPhrase, getName } from "./poc-utils";

const mongoose = require("mongoose");
const Assignment = mongoose.model("Assignment");

module.exports = function() {
  return new Promise(function(resolve, reject) {
    console.log("Running seeding assignments (case studies)");

    function makeSeed1() {
      return {
        progressNotes: [
          {
            name: getName(),
            profession: "Nurse",
            unit: "ER",
            day: "0",
            time: "07:00",
            notes: getPhrase(15)
          }
        ]
      };
    }
    function makeSeed2() {
      return {
        demographics: {
          familyName: "Johns",
          givenName: "Erin",
          middleName: "",
          preferredName: "Erin",
          dateOfBirth: "09-SEP-1944",
          personAge: "74",
          gender: "female",
          martialStatus: "widowed",
          codeStatus: "N/A",
          languagePrimary: "english",
          religion: "",
          indigenous: "no",
          streetAddress: "402 Willow St.",
          city: "Vancouver",
          country: "Canada",
          postalCode: "V3F 9R2",
          noAddress: "false",
          phoneNumber: "778-555-2947",
          email: "",
          occupation: "Retired",
          phn: "123456789",
          mrn: "",
          patientService: "",
          nextOfKin: "Thomas Johns",
          nextOfKinRelationsip: "Son",
          nextOfKinPhone: "604-555-9865",
          decisionMakerName: "Thomas John",
          decisionMakerRelationship: "Son",
          decisionMakerPhone: "604-555-9865"
        }
      };
    }
    function makeSeed3() {
      return {
        visitDetails: {
          admissionDay: "0",
          admissionTime: "07:00",
          admittingDiagnosis: "COPD",
          locations: [
            {
              patientLocation: "ER",
              admissionDay: "0",
              admissionTime: "08:00",
              transferOutDay: "",
              transferOutTime: ""
            }
          ],
          admissionStatus: "Admitted",
          consentForTreatment: true
        }
      };
    }

    let ass1 = {
      externalId: "assignment1",
      name: "Proof of concept assignment 1",
      description:
        "This assignment demonstrates the ability to add progress notes into the proof of concept version of the EdEHR",
      ehrRoutePath: "/ehr/chart/progress-notes",
      ehrRouteName: "progress-notes",
      seedData: makeSeed1()
    };

    let ass2 = {
      externalId: "assignment2",
      name: "Proof of concept assignment 2",
      description:
        "This assignment demonstrates the ability to edit demographic information in the EdEHR",
      ehrRoutePath: "/ehr/patient/demographics",
      ehrRouteName: "demographics",
      seedData: makeSeed2()
    };

    let ass3 = {
      externalId: "assignment3",
      name: "Proof of concept assignment 3",
      description: "Adjust patient location from ER to hallway 3rd floor",
      ehrRoutePath: "/ehr/current/visit-details",
      ehrRouteName: "visit-details",
      seedData: makeSeed3()
    };

    let defaultDef = {
      externalId: "defaultNonAssignment",
      name: "Default Non Assignment",
      description:
        "This assignment is the default assignment that has no seed data and brings the user to the page that lists which assignments are available.",
      ehrRoutePath: "/assignments-listing",
      ehrRouteName: "assignments-listing",
      seedData: {}
    };

    Assignment.deleteMany()
      .then(() => {
        return Assignment.create(defaultDef);
      })
      .then(() => {
        return Assignment.create(ass1);
      })
      .then(() => {
        return Assignment.create(ass2);
      })
      .then(() => {
        return Assignment.create(ass3);
      })
      .then(() => {
        resolve();
      });
  });
};
