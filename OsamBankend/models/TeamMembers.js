const express = require('express');
const mongoose = require('mongoose');

const TeamMemberSchema = new mongoose.Schema(
  {
    // Personal Information
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      trim: true,
    },

    // Skills and Expertise
    skills: {
      type: [String], 
      enum: [
        'UI/UX Design',
        'Frontend Development',
        'Backend Development',
        'DevOps',
        'App Reviews',
        'Map Reviews',
        'App Registration',
        'App Testing',
        'Video Editing',
        'Photoshop and Graphic Design',
        'SEO Improvements',
      ],
      required: true,
    },
    experience: {
        type: String,
        enum: [
          'Under 1 month',
          '1-3 months',
          '3-6 months',
          '6-12 months',
          '1-2 years',
          '2-3 years',
          '3+ years',
          '5+ years',
        ],
        required: true,
      },

    // Communication and Teams
    hasTeam: {
      type: Boolean, 
      default: false,
    },
    teamSize: {
      type: Number,
      default: 0,
    },
    // For designers or developers
    socialMediaLinks: {
      linkedin: { type: String, trim: true },
      portfolio: { type: String, trim: true }, 
    },

    // services they are interested in
    interestedServices: {
      type: [String],
      enum: [
        'App Reviews',
        'Map Reviews',
        'App Registration',
        'App Testing',
        'Website Design and Development',
        'Advertisement Creation',
        'Video Editing',
        'SEO Improvements',
        'Photoshop and Logo Design',
      ],
    },

    // Additional Details
    additionalNotes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

TeamMemberSchema.pre('save', function (next) {
    if(!this.isModified('password')) {
        return next();
    }
    try{
        const salt = bycrypt.genSaltSync(10);
        this.password = bycrypt.hashSync(this.password, salt);
        next();
    } catch(err) {
        return next(err);
    }
});

TeamMemberSchema.static("compareANDgenerateToken", async function(email, password) {
    const user = await this.findOne({email});
    if(!user) {
        throw new Error('User not found');
    }
    const isMatch = bycrypt.compareSync(password, user.password);
    if(!isMatch) {
        throw new Error('Invalid Password');
    }
    return user;
})
module.exports = mongoose.model('TeamMember', TeamMemberSchema);
