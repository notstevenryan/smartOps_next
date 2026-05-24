'use client';

import { use } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

// --- DATA ---
// Each service maps to its step id from the list page
const services = {
  1: {
    title: "Processing of Request for Distribution of Fish Seed (Fry, Fingerlings, Broodstock, Post-Larvae) for Free",
    description:
      "Distribution of fish seeds for free will be conducted to clients with letter requests depending on the availability of fingerlings. If there are no available fingerlings during the time of the request, the dispersal will be scheduled on a first come first serve basis.",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Provincial Fishery Offices (PFOs), Regional Fishery Officers, BFAR Central Office Personnel, BFAR-National Centers",
    requirements: {
      email: [{ label: "1. Letter Request", note: "(1) Electronic Copy", source: "Applicant/Client" }],
      walkIn: [{ label: "1. Client Fish Seed Request Form", note: "(1) Original Copy", source: "BFAR-NIFTC Fish Production Unit" }],
    },
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: "1.A. Thru E-mail Path",
            clientAction: "Submit the request through e-mail address: niftc@bfar.da.gov.ph",
            clientFees: "None",
            agencyActions: [
              { code: "1.A.1", text: "Receive the client's letter request, then prepare a reply letter for the approval of the Center Chief.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Administrative Assistant IV, National Inland Fisheries Technology Center" },
              { code: "1.A.2", text: "Endorse the letter request to the Chief Aquaculturist for his approval and signature.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Supervising Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.A.3", text: "Review, approve and sign the letter provided by the client.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.A.4", text: "Send a signed reply letter to the client stating the schedule of fingerling distribution through the e-mail provided by the client.", time: "~5 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center" },
            ],
          },
          {
            label: "1.B. Walk-in Path",
            clientAction: "Submit the accomplished Client Fish Seed Request Form to:\nAdministrative Office: BFAR-NIFTC km 53 Manila East Road, Sitio Tayak, Brgy. Tandang Muna, Tanay, Rizal",
            clientFees: "None",
            agencyActions: [
              { code: "1.B.1", text: "Receive the client's accomplished Client Fish Seed Request Form and endorse to the Center Chief for approval.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Administrative Assistant IV, National Inland Fisheries Technology Center" },
              { code: "1.B.2", text: "Approve and sign Client Fish Seed Request Form to allow distribution of fingerlings and coordinate with the Dispersal Office for distribution.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 2,
        title: "Distribution and Request",
        paths: [
          {
            label: null,
            clientAction: "Receive the requested fish seed at Fish Production and Dispersal Section: BFAR-NIFTC Km 53 Manila East Road, Sitio Tayak, Brgy. Tandang Muna, Tanay, Rizal",
            clientFees: "None",
            agencyActions: [
              { code: "2", text: "Distribute the requested fish seed (actual loading and packing of fingerlings).", time: "~2 hours", person: "Aquaculturist I, National Inland Fisheries Technology Center; Aquaculture Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 3,
        title: "Feedback",
        paths: [
          {
            label: null,
            clientAction: "Accomplish the filled-out Client Satisfaction/Feedback Form at:\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "3", text: "Receive the accomplished Client Satisfaction/Feedback form provided.", time: "~5 mins", person: "Administrative Assistant IV, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: { email: "2 hour/s", walkIn: "2 hours, 25 minutes/s" },
    totalFee: { email: "None", walkIn: "None" },
    totalFeeLabel: {
      email: "*If Thru E-mail (Submit letter request through E-mail)",
      walkIn: "*If Thru Walk-in (Secure and submit the accomplished Client Fish Seed Request Form provided)",
    },
  },
  2: {
    title: "Processing of Request for Distribution of Fish Seed (Fry, Fingerlings, Broodstock, Post-Larvae) for Payment",
    description:
      "Distribution of fish seeds with payment will be conducted to clients with letter requests depending on the availability of fingerlings. If there are no available fingerlings during the time of the request, the dispersal will be scheduled on a first come first serve basis.",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Provincial Fishery Offices (PFOs), Regional Fishery Officers, BFAR Central Office Personnel, BFAR-National Centers",
    requirements: {
      email: [{ label: "1. Letter Request", note: "(1) Electronic Copy", source: "Applicant/Client" }],
      walkIn: [{ label: "1. Client Fish Seed Request Form", note: "(1) Original Copy", source: "BFAR-NIFTC Fish Production Unit" }],
    },
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: "1.A. Thru E-mail Path",
            clientAction: "Submit letter request through email address:\nEmail: niftc@bfar.da.gov.ph",
            clientFees: "None",
            agencyActions: [
              { code: "1.A.1", text: "Receive the client's letter request, then prepare a reply letter for the approval of the Center Chief.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Administrative Assistant IV, National Inland Fisheries Technology Center" },
              { code: "1.A.2", text: "Endorse the letter request to the Chief Aquaculturist for his approval and signature.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Supervising Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.A.3", text: "Review, approve and sign the letter requested by the clients.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.A.4", text: "Send a signed reply letter to the client stating the schedule of fingerling distribution through the e-mail provided by the client.", time: "~5 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center" },
            ],
          },
          {
            label: "1.B. Walk-in Path",
            clientAction: "Secure and submit the accomplished Client Fish Seed Request Form to:\nAdministrative Office: BFAR-NIFTC Km 53 Manila East Road, Sitio Tayak, Brgy. Tandang Muna, Tanay, Rizal",
            clientFees: "None",
            agencyActions: [
              { code: "1.B.1", text: "Receive the client's accomplished Client Fish Seed Request Form. Endorse to the Center Chief for approval.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Administrative Assistant IV, National Inland Fisheries Technology Center" },
              { code: "1.B.2", text: "Approve and sign Client Fish Seed Request Form to allow the distribution and endorse to the Production and Dispersal Office for distribution.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 2,
        title: "Request",
        paths: [
          {
            label: null,
            clientAction: "Receive order of payment at:\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "2", text: "Issue order of payment to client.", time: "~5 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 3,
        title: "Payment",
        paths: [
          {
            label: null,
            clientAction: "Pay the required fees and receive the official receipt at:\nAdministrative Office: BFAR-NIFTC Km 53 Manila",
            clientFees: "Formula Fees (Breakdown: Price of the post fry and fingerlings)",
            agencyActions: [
              { code: "3", text: "Accept the payment then issue the official receipt.", time: "~5 mins", person: "Senior Aquaculturist/Special Collecting Officer, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 4,
        title: "Distribution",
        paths: [
          {
            label: null,
            clientAction: "Receive the requested fish seed at:\nFish Production and Dispersal Section: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "4", text: "Distribute the requested fish seed (actual loading and packing of fingerlings).", time: "~2 hours", person: "Aquaculturist I, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 5,
        title: "Feedback",
        paths: [
          {
            label: null,
            clientAction: "Secure and submit the filled-out Client Satisfaction/Feedback Form at:\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "5", text: "Receive the accomplished Client Satisfaction/Feedback Form provided.", time: "~5 mins", person: "Administrative Assistant IV, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: { email: "2 hour/s, 50 minute/s", walkIn: "2 hours, 35 minute/s" },
    totalFee: { email: "None", walkIn: "None" },
    totalFeeLabel: {
      email: "*If Thru E-mail (Submit letter request through E-mail)",
      walkIn: "*If Thru Walk-in (Secure and submit the accomplished Client Fish Seed Request Form provided)",
    },
    pricingTable: {
      label: "Formula / Schedule of Fees: Price of the post fry and Fingerlings",
      rows: [
        { species: "Tilapia", meshSize: "fry/fingerlings (for grow-out purposes)", price: "" },
        { species: "", meshSize: "Fry/Post-Fry", price: "0.07" },
        { species: "", meshSize: "Size 32", price: "0.10" },
        { species: "", meshSize: "Size 24", price: "0.20" },
        { species: "", meshSize: "Size 22", price: "0.30" },
        { species: "", meshSize: "Size 20", price: "0.35" },
        { species: "", meshSize: "Size 17", price: "0.40" },
        { species: "Common Carps", meshSize: "Size 32", price: "0.15" },
        { species: "", meshSize: "Size 24", price: "0.20" },
        { species: "", meshSize: "Size 22", price: "0.25" },
        { species: "", meshSize: "Size 17", price: "0.50" },
        { species: "", meshSize: "Size 14", price: "1.00" },
        { species: "Major Carps", meshSize: "Size 24", price: "1.00" },
        { species: "", meshSize: "Size 22", price: "1.00" },
        { species: "", meshSize: "Size 17", price: "2.00" },
        { species: "", meshSize: "Size 14", price: "3.00" },
        { species: "Catfish", meshSize: "Size 24", price: "1.00" },
        { species: "", meshSize: "Size 22", price: "2.00" },
        { species: "", meshSize: "Size 17", price: "3.00" },
        { species: "", meshSize: "Size 14", price: "4.00" },
        { species: "Pangasius", meshSize: "Size 24", price: "2.00" },
        { species: "", meshSize: "Size 22", price: "3.00" },
        { species: "", meshSize: "Size 17", price: "4.00" },
        { species: "", meshSize: "Size 14", price: "5.00" },
        { species: "Giant Gourami", meshSize: "Size 24", price: "1.00" },
        { species: "", meshSize: "Size 22", price: "1.00" },
        { species: "", meshSize: "Size 17", price: "2.00" },
        { species: "", meshSize: "Size 14", price: "3.00" },
        { species: "Ulang", meshSize: "PL 18", price: "1.50" },
        { species: "Ayungin", meshSize: "Size 24", price: "1.00" },
        { species: "", meshSize: "Size 22", price: "1.00" },
        { species: "Biya", meshSize: "Size 24", price: "1.00" },
        { species: "", meshSize: "Size 22", price: "1.00" },
        { species: "Dalag", meshSize: "Size 24", price: "1.00" },
        { species: "", meshSize: "Size 22", price: "1.00" },
        { species: "Martiniko", meshSize: "Size 24", price: "1.00" },
        { species: "", meshSize: "Size 22", price: "1.00" },
      ],
    },
  },
  3: {
    title: "Processing of Request for Technical Assistance, Distribution of Information, Education and Communication (IEC) Materials",
    description:
      "Technical assistance thru the distribution of IEC materials will be conducted to assist/guide walk-in clients, fish farmers, training participants and other beneficiaries, on the proper operational procedure for aquaculture (hatchery and culture systems) management, inland resource management, and information on invasive fishes in the Philippines.",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Provincial Fishery Offices (PFOs), Regional Fishery Officers, BFAR Central Office Personnel, BFAR-National Centers",
    requirements: {
      email: [{ label: "1. Letter Request", note: "(1) Electronic Copy", source: "Applicant/Client" }],
      walkIn: [{ label: "1. Client Request Form for IEC material", note: "(1) Original Copy", source: "BFAR-NIFTC Malasakit Help Desk" }],
    },
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: "1.A. Thru E-mail Path",
            clientAction: "Submit letter request through email address:\nEmail: niftc@bfar.da.gov.ph",
            clientFees: "None",
            agencyActions: [
              { code: "1.A.1", text: "Receive the client's letter request and endorse it to the Chief Aquaculturist for appropriate action.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.A.2", text: "Prepare a reply letter to the request for the approval of the Chief Aquaculturist.", time: "~10 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.A.3", text: "Review and approve and sign a reply letter to the clients and endorse it to the office concerned for appropriate action.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.A.4", text: "Provide the soft copy of the IEC materials requested through email.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
          {
            label: "1.B. Walk-in Path",
            clientAction: "Secure and submit the accomplished Client Request Form to:\nAdministrative Office: BFAR-NIFTC Km 53 Manila East Road, Sitio Sayaw, Brgy. Tandang Kutyo, Tanay, Rizal",
            clientFees: "None",
            agencyActions: [
              { code: "1.B.1", text: "Receive the client's accomplished Client Request Form.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.B.2", text: "Endorse the filled-out Client Request Form to the Chief Aquaculturist for his approval on the request.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.B.3", text: "Review, approve and sign the Client Request Form and endorse to the office concerned for appropriate action.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center" },
              { code: "1.B.4", text: "Provide the hard copy of IEC Materials requested.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 3,
        title: "Feedback",
        paths: [
          {
            label: null,
            clientAction: "Secure and submit the filled-out Client Satisfaction/Feedback Form at:\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "3", text: "Receive the accomplished Client Satisfaction/Feedback Form provided.", time: "~2 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: { email: "32 minute/s", walkIn: "22 minute/s" },
    totalFee: { email: "None", walkIn: "None" },
    totalFeeLabel: {
      email: "*If Thru E-mail (Submit letter request through E-mail)",
      walkIn: "*If Thru Walk-in (Secure and submit the accomplished Client Fish Seed Request Form provided)",
    },
  },
  4: {
    title: "Processing of Request for Technical Assistance for Inquiries (Through SMS, Phone call and Facebook Messenger)",
    description:
      "Technical assistance for Inquiries (Through SMS, Phone call and Facebook Messenger) by sending text and Facebook messages and/or making phone calls to inquire about their issues and concerns on Aquaculture (Hatchery and Grow-Out Culture Systems) management, inland resource management. These involve giving appropriate technical advisory services such as operational procedures for breeding and culture of freshwater fishes, materials, and supplies needed, and the budget/cost for the operation.",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Provincial Fishery Offices (PFOs), Regional Fishery Officers, BFAR Central Office Personnel, BFAR-National Centers",
    requirements: null,
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: "1.A. Thru SMS",
            icon: "bi-chat-dots",
            clientAction: "Send inquiry by sending text messages\nPhone: 0997 745 9961",
            clientFees: "None",
            agencyActions: [
              { code: "1.A.", text: "Receive the SMS then refer to the technical staff for appropriate action.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
          {
            label: "1.B. Phone call",
            icon: "bi-telephone",
            clientAction: "Make a phone call then discuss the inquiry or concerns to the attending staff\nPhone: 0997 745 9961",
            clientFees: "None",
            agencyActions: [
              { code: "1.B.", text: "Answer the phone call then refer to the technical staff for appropriate action.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
          {
            label: "1.C. Facebook Messenger",
            icon: "bi-messenger",
            clientAction: "Send inquiry by sending a message on the BFAR-NIFTC Facebook Page\nFacebook: BFARNIFTC-Fish-yalan",
            clientFees: "None",
            agencyActions: [
              { code: "1.C.", text: "Receive the message then refer to the technical staff for appropriate action.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 2,
        title: "Inquiry and Concern",
        paths: [
          {
            label: null,
            clientAction: "Discuss inquiry and other concerns at:\nPhone/Facebook: 0997745 9961 or BFARNIFTCFish-yalan",
            clientFees: "None",
            agencyActions: [
              { code: "2.", text: "Receive the Inquiry and provide the needed information.", time: "~20 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: {
      columns: [
        { icon: "bi-chat-dots", label: "*If Thru SMS()", value: "25 minute/s" },
        { icon: "bi-telephone", label: "*If Thru Phone call()", value: "25 minute/s" },
        { icon: "bi-messenger", label: "*If Thru Facebook Messenger()", value: "25 minute/s" },
      ],
    },
    totalFee: {
      columns: [
        { icon: "bi-chat-dots", label: "*If Thru SMS (Send inquiry by sending text messages)", value: "None" },
        { icon: "bi-telephone", label: "*If Thru Phone call (Make a phone call then discuss the inquiry or concerns to the attending staff)", value: "None" },
        { icon: "bi-messenger", label: "*If Thru Facebook Messenger (Send inquiry by sending a message on the BFAR-NIFTC Facebook Page)", value: "None" },
      ],
    },
  },
  5: {
    title: "Processing of Request for Technical Assistance for FishFarmer's Seminar",
    description:
      "Technical assistance for walk-in clients availing of the free Fish Farmer's Seminar on Hatchery and Grow-Out Culture Systems Management being offered by NIFTC involve an in-depth one-on-one or small group lecture/discussion on the operational procedures for breeding and culture of freshwater fishes/preferred species of the clients.",
    serviceType: "External Services",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Academe (Students, Faculties, On-the-Job Training, Researcher); Fisher Folk Organization Associations, People's Organization, Cooperatives, Women's Association, Housewives, Senior Citizens, Differently-Abled Persons, Indigenous People; Other Government Agencies, (National Government Agencies (NGAs), Local Government Units (LGUs), House Representatives); Non Government Organizations (NGOs).",
    requirements: {
      standard: [
        { label: "1. Letter Request", note: "(1) Original Copy\nOr (3) Photocopy", source: "Applicant/Client" },
        { label: "1. Client Request Form", note: "(1) Original Copy", source: "BFAR-NIFTC Fish Production Unit" },
      ],
    },
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: null,
            clientAction: "Submit the accomplished Client Request Form or letter request at:\nAdministrative office: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "1.1.", text: "Receive the Client Request Form or letter request.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.2.", text: "Endorse the request to the appropriate technical staff/personnel for registration.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 2,
        title: "Distribution and Request",
        paths: [
          {
            label: null,
            clientAction: "Confirm attendance with NIFTC staff at:\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "2.", text: "Directly inform the client on the schedule of the seminar to be attended based on the preferred topic.", time: "~10 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 3,
        title: "Feedback",
        paths: [
          {
            label: null,
            clientAction: "Secure and submit the filled-out Client Satisfaction/Feedback Form at:\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "3.", text: "Receive the accomplished Client Satisfaction/Feedback Form provided.", time: "~3 mins", person: "Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: {
      columns: [
        { icon: "bi-person-check", label: "Standard request", value: "28 minutes" },
      ],
    },
    totalFee: {
      columns: [
        { icon: "bi-person-check", label: "Standard request", value: "None" },
      ],
    },
  },
  6: {
    title: "Processing of Request for Technical Assistance for Inquiries (Through Email and Walk-in)",
    description:
      "Technical assistance for Inquiries (Through Email and Walk-in) physically appears in the NIFTC Office and/or send email to inquire about their issues and concerns on Aquaculture (Hatchery and Grow-Out Culture Systems) Management. These involve giving appropriate technical advisory services such as operational procedures for breeding and culture of freshwater fishes, materials, and supplies needed, and the budget/cost for the operation.",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Provincial Fishery Offices (PFOs), Regional Fishery Officers, BFAR Central Office Personnel, BFAR-National Centers",
    requirements: null,
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: "1.A. Thru Email",
            icon: "bi-envelope",
            clientAction: "Submit inquiry through E-mail\nEmail: niftc@bfar.da.gov.ph",
            clientFees: "None",
            agencyActions: [
              { code: "1.A.1.", text: "Receive the client's inquiry then refer to the technical staff to render advisory services.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.A.2.", text: "Provide the appropriate technical advisory and assistance.", time: "~1 hour/s", person: "Senior Aquaculturist, National Inland Fisheries Technology Center; Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
          {
            label: "1.B. Walk-in",
            icon: "bi-person-walking",
            clientAction: "Discuss inquiry or concerns\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "1.B.", text: "Provide the appropriate technical advisory and assistance.", time: "~1 hour/s", person: "Senior Aquaculturist, National Inland Fisheries Technology Center; Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 2,
        title: "Feedback",
        paths: [
          {
            label: null,
            clientAction: "Secure and submit filled-out Client Satisfaction/Feedback Form at:\nAdministrative Office: BFAR-NIFTC Km 53 Manila East Road, Sitio Sayoc, Brgy. Tandang Kutyo, Tanay, Rizal",
            clientFees: "None",
            agencyActions: [
              { code: "2.", text: "Receive the accomplished Client Satisfaction/Feedback Form provided.", time: "~3 mins", person: "Senior Aquaculturist, National Inland Fisheries Technology Center; Aquaculturist F, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: {
      columns: [
        { icon: "bi-envelope", label: "*If Thru E-mail ()", value: "1 hour/s, 8 minute/s" },
        { icon: "bi-person-walking", label: "*If Thru Walk-in ()", value: "1 hour/s, 3 minute/s" },
      ],
    },
    totalFee: {
      columns: [
        { icon: "bi-envelope", label: "*If Thru E-mail (Submit letter request through E-mail)", value: "None" },
        { icon: "bi-person-walking", label: "*If Thru Walk-in (Secure and submit the accomplished Client Fish Seed Request Form provided)", value: "None" },
      ],
    },
  },
  7: {
    title: "Processing of Request for Technical Assistance for on-Site Visit/Inspection",
    description:
      "Technical assistance thru site visits will be conducted by NIFTC Technical Staff to assist/guide clients by physically conducting an ocular inspection/site visit in their grow-out farms/hatchery facilities, data gathering, assessment, and provision of adequate technical advisory.",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Provincial Fishery Offices (PFOs), Regional Fishery Officers, BFAR Central Office Personnel, BFAR-National Centers",
    requirements: {
      email: [{ label: "1. Letter Request", note: "(1) Electronic Copy", source: "Applicant/Client" }],
      walkIn: [
        { label: "1. Letter Request", note: "(1) Original Copy Or (1) Photo Copy", source: "Applicant/Client" },
        { label: "2. Client Request Form", note: "(1) Original Copy", source: "BFAR-NIFTC Malasakit Help Desk" },
      ],
    },
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: "1.A. Thru E-mail Path",
            icon: "bi-envelope",
            clientAction: "Submit letter request through email\nEmail: niftc@bfar.da.gov.ph",
            clientFees: "None",
            agencyActions: [
              { code: "1.A.1.", text: "Receive the letter request through email.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.A.2.", text: "Forward the received letter request to the Chief Aquaculturist for approval and for appropriate action.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.A.3.", text: "Assign technical staff to assist with the client's request.", time: "~20 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.A.4.", text: "Coordinate and confirm schedule with assigned staff.", time: "~10 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.A.5.", text: "Notify the clients on the schedule of the site visit/inspection via email.", time: "~5 mins", person: "Senior Aquaculturist, National Inland Fisheries Technology Center; Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
          {
            label: "1.B. Thru Walk-in",
            icon: "bi-person-walking",
            clientAction: "Submit the Letter Request or the accomplished Client Request Form\nAdministrative Office: BFAR-NIFTC Km 53 Manila East Road, Sitio Sayoc, Brgy. Tandang Kutyo, Tanay, Rizal",
            clientFees: "None",
            agencyActions: [
              { code: "1.B.1.", text: "Receive accomplished Client Request Form or Letter request.", time: "~4 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.B.2.", text: "Forward received accomplished client request form and letter request to the Chief Aquaculturist for approval and for appropriate action.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.B.3.", text: "Approve request and assign technical staff to assist the client's request.", time: "~20 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.B.4.", text: "Coordinate and confirm schedule with assigned staff.", time: "~10 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.B.5.", text: "Notify the clients on the schedule of the site visit/inspection.", time: "~5 mins", person: "Senior Aquaculturist, National Inland Fisheries Technology Center; Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 2,
        title: "Site Visit",
        paths: [
          {
            label: null,
            clientAction: "Allow the conduct of a site visit\nAdministrative Office: BFAR-NIFTC Km 53 Manila East Road, Sitio Sayoc, Brgy. Tandang Kutyo, Tanay, Rizal",
            clientFees: "None",
            agencyActions: [
              { code: "2.1.", text: "Conduct actual sitevisit/inspection/sampling.", time: "~5 hour/s", person: "Senior Aquaculturist, National Inland Fisheries Technology Center; Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "2.2.", text: "Prepare a report of inspection and recommendation to be signed by the Chief Aquaculturist.", time: "~2 hour/s", person: "Senior Aquaculturist, National Inland Fisheries Technology Center; Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "2.3.", text: "Sign the report of inspection with recommendation for endorsement to the client.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 3,
        title: "Report and Recommendation",
        paths: [
          {
            label: null,
            clientAction: "Receive the endorsed inspection report and recommendation at:\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "3.", text: "Endorse the inspection report and recommendation signed by the Chief Aquaculturist, to the client.", time: "~10 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Aquaculturist II, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 4,
        title: "Feedback",
        paths: [
          {
            label: null,
            clientAction: "Secure and submit the filled-out Client Satisfaction/Feedback Form at:\nMalasakit Help Desk: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "4.", text: "Receive the accomplished Client Satisfaction/Feedback Form provided.", time: "~2 mins", person: "Senior Aquaculturist, National Inland Fisheries Technology Center; Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: {
      columns: [
        { icon: "bi-envelope", label: "*If Thru E-mail ()", value: "1 working day/s, 2 minutes/s" },
        { icon: "bi-person-walking", label: "*If Thru Walk-in ()", value: "1 working day/s, 1 minutes/s" },
      ],
    },
    totalFee: {
      columns: [
        { icon: "bi-envelope", label: "*If Thru E-mail (Submit letter request through E-mail)", value: "None" },
        { icon: "bi-person-walking", label: "*If Thru Walk-in (Secure and submit the accomplished Client Fish Seed Request Form provided)", value: "None" },
      ],
    },
  },
  8: {
    title: "Processing of Request for Training Request by Clients",
    description:
      "Training programs requested by clients shall be conducted to accomodate specialized or customized courses in freshwater aquaculture, inland resource management, and other areas aligned with the Center's mandates and functions, tailored to the client's need.",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Provincial Fishery Offices (PFOs), Regional Fishery Officers, BFAR Central Office Personnel, BFAR-National Centers",
    requirements: {
      standard: [
        { label: "1. Letter Request", note: "(1) Original Copy\nOr (1) Electronic Copy", source: "Applicant/Client" },
        { label: "2. Reply Letter", note: "(1) Original Copy\nor (1) Electronic Copy", source: "BFAR-NIFTC Administrative Office" },
      ],
    },
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: "1. Thru E-mail Path",
            icon: "bi-envelope",
            clientAction: "Submit letter request through email address\nEmail: niftc@bfar.da.gov.ph",
            clientFees: "None",
            agencyActions: [
              { code: "1.1.", text: "Receive the request letter and endorse to the Chief Aquaculturist for appropriate action.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.2.", text: "Review and approve training request and endorse to the Technology Verification Section for preparation of the course module.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.3.", text: "Prepare a draft course module for the requested training and forward it to the Chief for Approval.", time: "~3 hour/s", person: "Aquaculturist I, National Inland Fisheries Technology Center" },
              { code: "1.4.", text: "Review and approve the course module, and endorse it to the Records Unit along with the request letter for appropriate action.", time: "~5 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center" },
              { code: "1.5.", text: "Receive approve request letter and course module.", time: "~5 mins", person: "Administrative Assistant II, National Inland Fisheries Technology Center" },
              { code: "1.6.", text: "Prepare response letter and forward to the requesting party and technical staff involved for the preparation of lecture materials.", time: "~10 mins", person: "Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 2,
        title: "Receive Notification",
        paths: [
          {
            label: null,
            clientAction: "Receive notification thru call/text/email on the training schedule and confirm attendance to the training.\nLocation: Through clients provided email",
            clientFees: "None",
            agencyActions: [
              { code: "2.", text: "Notify the client through call/text/email on the training schedule and receive confirmation of attendance at the training.", time: "~5 mins", person: "Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: {
      columns: [
        { icon: "bi-person-check", label: "Standard request", value: "3 hour/s, 40 minute/s" },
      ],
    },
    totalFee: {
      columns: [
        { icon: "bi-person-check", label: "Standard request", value: "None" },
      ],
    },
  },
  9: {
    title: "Technical Assistance (On-the-Job-Training)",
    description:
      "Technical assistance for On-the-Job Training of students shall involve complete agency immersion in the activities being conducted in the Center especially on Freshwater Aquaculture Management through lectures accompanied by practicum activities.",
    serviceType: "External Services",
    info: {
      office: "National Inland Fisheries Technology Center",
      classification: "Simple",
      transactionType: "Government to Government",
      operatingHours: "8:00 AM to 5:00 PM",
    },
    whoMayAvail: "Academe (Students, Faculties, On-the-Job Trainees, Researchers)",
    requirements: {
      email: [{ label: "1. Letter Request", note: "(1) Original Copy Or (1) Photocopy", source: "Applicant/Client" }],
      walkIn: [{ label: "1. Client Request Form", note: "(1) Original Copy", source: "Applicant/Client" }],
    },
    steps: [
      {
        num: 1,
        title: "Submit Request",
        paths: [
          {
            label: null,
            clientAction: "Submit Application Letter and requirements (Waiver and Trainee's Profile/Curriculum Vitae) at:\nAdministrative office: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "1.", text: "Receive application letter with its requirements.", time: "~5 mins", person: "Aquaculturist I, National Inland Fisheries Technology Center; Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 2,
        title: "Interview",
        paths: [
          {
            label: null,
            clientAction: "Report to office for On-the-Job Training Interview/briefing at:\nOffice of the Center Chief: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "2.", text: "Accept trainee, conduct initial interview and briefing.", time: "~10 mins", person: "Chief Aquaculturist, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
      {
        num: 3,
        title: "Orientation",
        paths: [
          {
            label: null,
            clientAction: "Attend orientation and tour to the center facilities at:\nAll NIFTC Facilities: BFAR-NIFTC Km 53 Manila",
            clientFees: "None",
            agencyActions: [
              { code: "3.", text: "Conduct orientation and tour to the center facilities.", time: "~15 mins", person: "Senior Aquaculturist, National Inland Fisheries Technology Center; Aquaculturist II, National Inland Fisheries Technology Center; Aquaculturist I, National Inland Fisheries Technology Center; Administrative Aide IV, National Inland Fisheries Technology Center; Administrative Assistant II, National Inland Fisheries Technology Center" },
            ],
          },
        ],
      },
    ],
    totalTime: {
      columns: [
        { icon: "bi-person-check", label: "Standard Request", value: "30 minute/s" },
      ],
    },
    totalFee: {
      columns: [
        { icon: "bi-person-check", label: "Standard request", value: "None" },
      ],
    },
  },
};

const InfoChip = ({ icon, label, value }) => (
  <div className="d-flex align-items-start gap-2 p-3 bg-body border rounded-3 flex-grow-1" style={{ minWidth: '160px' }}>
    <i className={`bi ${icon} text-primary mt-1`}></i>
    <div>
      <div className="text-muted" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
      <div className="fw-semibold text-body-emphasis small">{value}</div>
    </div>
  </div>
);

const listen = (text) => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    window.speechSynthesis.speak(u);
  }
};

const ListenButton = ({ text }) => (
  <button
    onClick={() => listen(text)}
    className="btn btn-outline-secondary btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
    style={{ fontSize: '0.7rem' }}
  >
    <i className="bi bi-volume-up-fill text-primary"></i>
    <span className="fw-bold text-muted">Listen</span>
  </button>
);

export default function ArtaStepDetail({ params }) {
  const { step } = use(params);
  const stepId = parseInt(step);
  const service = services[stepId];

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="container my-5 text-center">
          <h2 className="fw-bold">Service not found</h2>
          <p className="text-muted">This step doesn't have a detail page yet.</p>
          <Link href="/00arta-steps" className="btn btn-primary rounded-pill px-4">← Back to Charter</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="container my-4" style={{ maxWidth: '860px' }}>

        {/* Back nav */}
        <Link href="/00arta-steps" className="btn btn-link p-0 text-decoration-none text-muted small mb-3 d-flex align-items-center gap-1">
          <i className="bi bi-arrow-left"></i> Back to Charter
        </Link>

        {/* Internal/External Services badge */}
        <div className="mb-3">
          <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 small fw-bold">
            <i className="bi bi-building me-1"></i> {service.serviceType || 'Internal Services'}
          </span>
        </div>

        {/* Title & Description */}
        <h1 className="h4 fw-black text-body-emphasis mb-2">{service.title}</h1>
        <p className="text-muted small mb-4">{service.description}</p>

        {/* Info chips */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <InfoChip icon="bi-building" label="Office or Division" value={service.info.office} />
          <InfoChip icon="bi-tag" label="Classification" value={service.info.classification} />
          <InfoChip icon="bi-arrow-left-right" label="Type of Transactions" value={service.info.transactionType} />
          <InfoChip icon="bi-clock" label="Operating Hours" value={service.info.operatingHours} />
        </div>

        {/* Who May Avail */}
        <div className="card border-0 bg-body-tertiary rounded-3 p-3 mb-3 d-flex flex-row align-items-start gap-3">
          <i className="bi bi-person-check-fill text-primary fs-5 mt-1 flex-shrink-0"></i>
          <div>
            <div className="text-muted fw-bold mb-1" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Who May Avail</div>
            <div className="small text-body-emphasis fw-semibold">{service.whoMayAvail}</div>
          </div>
        </div>

        {/* Requirements */}
        {service.requirements && (
        <div className="card border rounded-3 mb-4 overflow-hidden">
          <div className="card-header bg-body-tertiary border-bottom fw-bold small py-2 px-3">
            Checklist for Requirements
          </div>
          <div className="card-body p-0">
            {service.requirements.standard ? (
              <div className="p-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="bi bi-card-checklist text-primary"></i>
                  <span className="fw-bold small">Standard Requirement</span>
                </div>
                <div className="row g-3">
                  {service.requirements.standard.map((r, i) => (
                    <div key={i} className="col-12 col-md-6 small">
                      <span className="fw-semibold text-body-emphasis">{r.label}</span>
                      <span className="text-muted ms-1" style={{ whiteSpace: 'pre-line' }}>{r.note}</span>
                      <div className="text-muted" style={{ fontSize: '0.65rem' }}>Where to secure: <span className="fw-semibold">{r.source}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
            <div className="row g-0">
              {/* Email */}
              <div className="col-12 col-md-6 p-3 border-end-md">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="bi bi-envelope text-primary"></i>
                  <span className="fw-bold small">A. For Email Request</span>
                </div>
                {service.requirements.email.map((r, i) => (
                  <div key={i} className="small">
                    <span className="fw-semibold text-body-emphasis">{r.label}</span>
                    <span className="text-muted ms-1">{r.note}</span>
                    <div className="text-muted" style={{ fontSize: '0.65rem' }}>Where to secure: <span className="fw-semibold">{r.source}</span></div>
                  </div>
                ))}
              </div>
              {/* Walk-in */}
              <div className="col-12 col-md-6 p-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="bi bi-person-walking text-primary"></i>
                  <span className="fw-bold small">B. Through Walk-in</span>
                </div>
                {service.requirements.walkIn.map((r, i) => (
                  <div key={i} className="small">
                    <span className="fw-semibold text-body-emphasis">{r.label}</span>
                    <span className="text-muted ms-1">{r.note}</span>
                    <div className="text-muted" style={{ fontSize: '0.65rem' }}>Where to secure Agency/Division: <span className="fw-semibold">{r.source}</span></div>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
        )}

        {/* Step-by-Step */}
        <h2 className="h6 fw-black text-body-emphasis mb-3 text-uppercase" style={{ letterSpacing: '0.05em' }}>Step-by-Step Procedure</h2>

        <div className="d-flex flex-column gap-4 mb-4">
          {service.steps.map((step) => (
            <div key={step.num} className="card border-0 shadow-sm rounded-4 overflow-hidden">
              {/* Step header */}
              <div className="d-flex align-items-center gap-3 p-3 bg-primary text-white">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle bg-white text-primary fw-black flex-shrink-0"
                  style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}
                >
                  {step.num}
                </div>
                <span className="fw-bold">{step.title}</span>
                <ListenButton text={`Step ${step.num}: ${step.title}`} />
              </div>

              {/* Paths */}
              <div className="card-body p-0">
                {step.paths.map((path, pi) => (
                  <div key={pi} className={pi > 0 ? 'border-top' : ''}>
                    {/* Path label */}
                    {path.label && (
                      <div className="px-3 pt-3 pb-1 d-flex align-items-center justify-content-between">
                        <span className="fw-bold small text-body-emphasis">{path.label}</span>
                        <ListenButton text={path.label} />
                      </div>
                    )}

                    <div className="row g-0">
                      {/* Client Action */}
                      <div className="col-12 col-md-5 p-3 bg-body-tertiary border-end">
                        <div className="text-muted fw-bold mb-2" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Client Action</div>
                        <p className="small text-body-emphasis mb-3" style={{ whiteSpace: 'pre-line' }}>{path.clientAction}</p>
                        <div className="text-muted fw-bold mb-1" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fees to be Paid</div>
                        <span className="small text-muted">{path.clientFees}</span>
                      </div>

                      {/* Agency Action */}
                      <div className="col-12 col-md-7 p-3">
                        <div className="text-muted fw-bold mb-2" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Agency Action</div>
                        <div className="d-flex flex-column gap-2">
                          {path.agencyActions.map((a, ai) => (
                            <div key={ai} className="card border-0 bg-body-tertiary rounded-3 p-2">
                              <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                                <span className="small fw-semibold text-body-emphasis">{a.code}. {a.text}</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill flex-shrink-0" style={{ fontSize: '0.6rem' }}>{a.time}</span>
                              </div>
                              <div className="text-muted" style={{ fontSize: '0.6rem' }}>
                                Person Responsible: {a.person}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Total Processing Time */}
        <div className="card border-0 rounded-4 mb-3 overflow-hidden" style={{ background: 'var(--bs-primary)' }}>
          <div className="d-flex justify-content-between align-items-center px-4 py-3">
            <span className="fw-black text-white">Total Processing Time</span>
            <ListenButton text={`Total processing time: ${service.totalTime.columns ? service.totalTime.columns.map(c => c.label + ' ' + c.value).join(', ') : service.totalTime.email + ' by email, ' + service.totalTime.walkIn + ' walk-in'}`} />
          </div>
          <div className="row g-0 px-3 pb-3">
            {service.totalTime.columns ? (
              service.totalTime.columns.map((col, i) => (
                <div key={i} className={`col-12 col-md mb-2 mb-md-0 ${i > 0 ? 'ps-md-2' : ''} ${i < service.totalTime.columns.length - 1 ? 'pe-md-2' : ''}`}>
                  <div className="bg-white bg-opacity-10 rounded-3 p-3 h-100">
                    <div className="text-white-50 mb-1 d-flex align-items-center gap-1" style={{ fontSize: '0.65rem' }}>
                      <i className={`bi ${col.icon}`}></i> {col.label}
                    </div>
                    <span className="text-white fw-bold small">{col.value}</span>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="col-12 col-md-6 pe-md-2 mb-2 mb-md-0">
                  <div className="bg-white bg-opacity-10 rounded-3 p-3">
                    <div className="text-white-50 mb-1 d-flex align-items-center gap-1" style={{ fontSize: '0.65rem' }}>
                      <i className="bi bi-envelope"></i> *If Thru E-mail ()
                    </div>
                    <span className="text-white fw-bold small">{service.totalTime.email}</span>
                  </div>
                </div>
                <div className="col-12 col-md-6 ps-md-2">
                  <div className="bg-white bg-opacity-10 rounded-3 p-3">
                    <div className="text-white-50 mb-1 d-flex align-items-center gap-1" style={{ fontSize: '0.65rem' }}>
                      <i className="bi bi-person-walking"></i> *If Thru Walk-in ()
                    </div>
                    <span className="text-white fw-bold small">{service.totalTime.walkIn}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Total Processing Fee */}
        <div className="card border-0 rounded-4 mb-5 overflow-hidden" style={{ background: 'var(--bs-primary)' }}>
          <div className="d-flex justify-content-between align-items-center px-4 py-3">
            <span className="fw-black text-white">Total Processing Fee</span>
          </div>
          <div className="row g-0 px-3 pb-3">
            {service.totalFee.columns ? (
              service.totalFee.columns.map((col, i) => (
                <div key={i} className={`col-12 col-md mb-2 mb-md-0 ${i > 0 ? 'ps-md-2' : ''} ${i < service.totalFee.columns.length - 1 ? 'pe-md-2' : ''}`}>
                  <div className="bg-white bg-opacity-10 rounded-3 p-3 h-100">
                    <div className="text-white-50 mb-1 d-flex align-items-center gap-1" style={{ fontSize: '0.65rem' }}>
                      <i className={`bi ${col.icon}`}></i> {col.label}
                    </div>
                    <span className="text-white fw-bold small">{col.value}</span>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="col-12 col-md-6 pe-md-2 mb-2 mb-md-0">
                  <div className="bg-white bg-opacity-10 rounded-3 p-3">
                    <div className="text-white-50 mb-1" style={{ fontSize: '0.65rem' }}>{service.totalFeeLabel.email}</div>
                    <span className="text-white fw-bold small">{service.totalFee.email}</span>
                  </div>
                </div>
                <div className="col-12 col-md-6 ps-md-2">
                  <div className="bg-white bg-opacity-10 rounded-3 p-3">
                    <div className="text-white-50 mb-1" style={{ fontSize: '0.65rem' }}>{service.totalFeeLabel.walkIn}</div>
                    <span className="text-white fw-bold small">{service.totalFee.walkIn}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Pricing Table (only for services that have one) */}
        {service.pricingTable && (
          <div className="card border rounded-3 mb-4 overflow-hidden">
            <div className="card-header bg-body-tertiary border-bottom d-flex align-items-center gap-2 py-2 px-3">
              <i className="bi bi-envelope text-primary small"></i>
              <span className="fw-bold small">{service.pricingTable.label}</span>
            </div>
            <div className="card-body p-0">
              <table className="table table-sm table-hover mb-0" style={{ fontSize: '0.8rem' }}>
                <thead className="table-light">
                  <tr>
                    <th className="px-3 py-2 text-uppercase text-muted fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Species</th>
                    <th className="px-3 py-2 text-uppercase text-muted fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Mesh Size</th>
                    <th className="px-3 py-2 text-uppercase text-muted fw-bold text-end" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Price (Php/piece)</th>
                  </tr>
                </thead>
                <tbody>
                  {service.pricingTable.rows.map((row, i) => (
                    <tr key={i}>
                      <td className="px-3 py-1 fw-semibold text-body-emphasis">{row.species}</td>
                      <td className="px-3 py-1 text-muted">{row.meshSize}</td>
                      <td className="px-3 py-1 text-end fw-semibold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Back button */}
        <div className="d-flex justify-content-end mb-5">
          <Link href="/00arta-steps" className="btn btn-primary rounded-3 px-4 fw-bold shadow-sm">
            ← Back to Charter
          </Link>
        </div>

      </main>
    </>
  );
}