import React from "react"

export default function WorkExperience(){
    return (
        <section class = "workexperience">
          <div class = "content_wrapper item-details divider">
          <h2>Work Experience</h2>
          <img src="images/thumbnail-2.jpg" class="work-experience-img"></img>
          <p>Versatile customer focused Information Technology Specialist with extensive experience supporting a wide range of users and technology. Comprehensive background in software administration, user access management, requirements gathering, researching, planning, and implementing new systems as well as migrations..</p>
          <p>Areas of expertise include:</p>
            <ul>
              <li>Technical Troubleshooting</li>
              <li>Product/Process Ownership</li>
              <li>Issue Tracking and Reporting</li>
              <li>Training</li>
              <li>Creating and Maintaining Documentation </li>
              <li>Developing Policies and Procedures </li>
              <li>Improving Process Accuracy and Efficiency </li>
            </ul>
            <p>Technical Skills:</p>
            <ul>
              <li>Microsoft Windows environment Hardware/Software/OS/Network troubleshooting. Exchange, Sharepoint, Active Directory Users and Computers, O365/Microsoft Office. Experience with Microsoft Azure administration - Azure Active Directory, implementing role-based access control, creating resource groups, implementing storage, vm creation, billing and cost management.</li>
              <li>Administration of - Adobe Creative Suite, Atlassian Cloud Jira/Confluence and Smartsheet.</li>
              <li>HTML/CSS and Javascript.</li>
              <li>Limited experience with Salesforce, Linux, and Powershell.</li>
              <li>Other: Microsoft Teams, Zoom, and  Canvas LMS.</li>
            </ul>
  
          {/* <!-- Copy this whole <section> block to add more jobs. --> */}
          <section class="job-item">
            <div class="job-details">
            <h3>Information Technology Specialist</h3>
            <p>University of Washington</p>
            <p>2008-present.</p>
            <img src="images/W-Logo_Purple_Hex.jpg"></img>
            </div>
            <div class="job-summary">
            <p>Provide Tier 1 and Tier 2 technical support for 200 administrative staff, 6,000 students, and 100 instructors across 4 work sites - maintaining a high level of customer service, technical expertise, and quality communication with an average email annual ticket volume of 3,800 in addition to phone and walk up requests.</p>
            <p>Areas of support include hardware/software/OS/network connectivity for approx 600 Windows 10 devices, network file access via on prem mapped drives and cloud-based file storage, O365 and Office 2016, account management/permissions via Active Directory Users and Computers, Canvas LMS administration and Zoom/Adobe Connect video support for online students.</p>
            <p>Software administration - CRM and Service Desk (design, implementation, customization, and ongoing administration), user access management, business analysis (requirements gathering/research/planning/implementing new systems) as well as providing technical solutions and troubleshooting.</p>
            </div>
            </section>
          </div>
        </section>
    )
}