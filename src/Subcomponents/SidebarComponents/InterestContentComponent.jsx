import React from "react";

import InterestContentAllComponent from "./InterestContentAllComponent";

export const CompanyComponent = () => (
  <InterestContentAllComponent
    c1name="IBM"
    c1followers="18,137,944 followers"
    c1img="/img/IBM.jpg"
    c2name="Microsoft"
    c2followers="25,290,707 followers"
    c2img="/img/Microsoft.jpg"
  />
);

export const GroupComponent = () => (
  <InterestContentAllComponent
    c1name="Biotechnology and Biopharma community"
    c1followers="99,916 members"
    c1img="/img/BABC.jpg"
    c2name="🧫 Microbiology Professionals 🔬"
    c2followers="245,144 members"
    c2img="/img/MP.jpg"
  />
);

export const NewsletterComponent = () => (
  <InterestContentAllComponent
    c1name="All in Action"
    c1followers="Published biweekly"
    c1img="/img/AIA.jpg"
    c2name="Fintech Insights"
    c2followers="Published biweekly"
    c2img="/img/FI.jpg"
  />
);

export const SchoolComponent = () => (
  <InterestContentAllComponent
    c1name="Mimo"
    c1followers="14,593 followers"
    c1img="/img/Mimo.jpg"
    c2name="K.S.Rangasamy College of Technology"
    c2followers="18,428 followers"
    c2img="/img/KSRCT Logo.jpg"
  />
);
