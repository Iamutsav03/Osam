const { ComparePassword, HashPassword } = require("../middleware/Hashing");
const Company = require("../models/Company");

const CompanyRegister = async (req, res) => {
  const {
    companyName,
    industry,
    website,
    ContractorName,
    ContractorEmail,
    ContractorPhone,
    ContractorPassword,
    servicesRequired,
    budget,
    socialMediaLinks,
    additionalNotes,
  } = req.body;

  // Check for missing fields
  if (!companyName || !industry || !ContractorName || !ContractorEmail || !ContractorPhone || !ContractorPassword) {
    return res.status(400).send({ error: "Please fill all the required fields" });
  }

  try {
    const isCompanyRegistered = await Company.findOne({ companyName });
    if (isCompanyRegistered) {
      return res.status(400).send({ error: "Company already registered" });
    }
    const isEmailRegistered = await Company.findOne({ ContractorEmail });
    if (isEmailRegistered) {
      return res.status(400).send({ error: "Email already registered" });
    }

    const Hash = await HashPassword(ContractorPassword)

    const company = await Company.create({
      companyName: companyName,
      industry: industry,
      website: website,
      ContractorName: ContractorName,
      ContractorEmail: ContractorEmail,
      ContractorPhone: ContractorPhone,
      ContractorPassword: Hash,
      servicesRequired: servicesRequired,
      budget: budget,
      socialMediaLinks: socialMediaLinks,
      additionalNotes: additionalNotes,
    });
    res.status(200).send({ message: "Company registered successfully", company });
  } catch (error) {
    console.error("Error during company registration:", error);
    res.status(400).send({ error: "Company registration failed", details: error.message });
  }
};

const CompanyLogin = async (req, res) => {
  const { ContractorEmail, ContractorPassword } = req.body;

  if (!ContractorEmail || !ContractorPassword) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const company = await Company.findOne({ ContractorEmail });
    if (!company) {
      return res.status(401).json({ error: "Email is not Registered" });
    }

    const token = await ComparePassword(ContractorEmail, ContractorPassword, company.ContractorPassword);
    console.log(token);
    if (!token) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ success: "Company logged in successfully", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Company login failed" });
  }
};

module.exports = { CompanyRegister, CompanyLogin };