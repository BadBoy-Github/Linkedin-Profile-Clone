import React from "react";

import InterestContentAllComponent from "./InterestContentAllComponent";

export const CompanyComponent = () => (
  <InterestContentAllComponent
    c1name="IBM"
    c1followers="18,132,440 followers"
    c1img="/public/img/IBM.png"
    c2name="Microsoft"
    c2followers="25,283,281 followers"
    c2img="/public/img/Microsoft.png"
  />
);

export const GroupComponent = () => (
  <InterestContentAllComponent
    c1name="Biotechnology an Biopharma community"
    c1followers="99,615 members"
    c2name="🧫 Microbiology Professionals 🔬"
    c2followers="245,137 members"
  />
);

export const NewsletterComponent = () => (
  <InterestContentAllComponent
    c1name="IBM"
    c1followers="123"
    c2name="Microsoft"
    c2followers="234"
  />
);

export const SchoolComponent = () => (
  <InterestContentAllComponent
    c1name="IBM"
    c1followers="123"
    c2name="Microsoft"
    c2followers="234"
  />
);
