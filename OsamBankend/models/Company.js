const express = require("express");
const mongoose = require("mongoose");
const bycrypt = require("bcrypt");

const CompanySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      unique: true,
      required: true,
    },
    industry: {
      type: String,
      required: true,
      enum: [
        "Information Technology",
        "Finance",
        "Healthcare",
        "Retail",
        "Manufacturing",
        "Education",
        "Real Estate",
        "Media and Entertainment",
        "Travel and Hospitality",
        "E-commerce",
        "Consulting",
        "Other",
      ],
    },
    website: {
      type: String,
      trim: true,
    },

    ContractorName: {
      type: String,
      required: true,
      trim: true,
    },
    ContractorEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    ContractorPhone: {
      type: Number,
      required: true,
    },
    ContractorPassword: {
      type: String,
      required : true,
      trim: true,
    },

    servicesRequired: {
      type: [String],
      enum: [
        "App Reviews",
        "App Registration",
        "Map Reviews",
        "Advertisement",
        "SEO Improvements",
        "Website Design and Development",
        "App Design and Development",
        "Ratings Improvement",
        "App Testing",
        "Video Editing",
        "Photoshop and Logo Design",
      ],
    },
    budget: {
      type: String,
    },
    socialMediaLinks: {
      facebook: { type: String, trim: true },
      instagram: { type: String, trim: true },
      linkedin: { type: String, trim: true },
    },
    additionalNotes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// CompanySchema.pre("save", function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
// });


const Company = mongoose.model("CompanyUser", CompanySchema);

module.exports = Company;
