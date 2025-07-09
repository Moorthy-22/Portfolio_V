import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Project = {
  title: string;
  description: string;
  tech: string;
  
};

export type ProjectCategory = {
  name: string;
  icon: string;
  projects: Project[];
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly projectCategories: ProjectCategory[] = [
    {
      name: 'Applications',
      icon: '🧩',
      projects: [
     {
        title: '🏦 Loan Management System & Loan Sanction Flow',
        description: 'Contributed to the development of LMS and LOS modules by implementing change requests, building new screens, and validating critical loan data to ensure compliance and operational efficiency.',
        tech: 'Angular, MS SQL, Joget, Karomi'
    },
        {
          title: '👨‍💼 Employee Login System',
          description: 'Built a complete login system from scratch using Angular and .NET Web API. Added JWT authentication so different users get different access levels, and made sure the whole experience was smooth and secure.',
          tech: 'Angular, Web API, JWT, MS SQL'
        }
      ]
    },
    {
      name: 'Reports',
      icon: '📊',
      projects: [
        {
          title: '📈 Report Dashboard',
          description: 'Created interactive dashboards that actually help people make decisions. Used Power BI, BIRT and SSRS to connect to live data and show KPIs, drill-downs, and real-time insights that managers actually use.',
          tech: 'Power BI, SSRS, BIRT'
        },
        {
          title: '📧 Automail Reports',
          description: 'Built a system that automatically generates and sends daily reports via email. No more manual work — the reports get created and distributed on schedule, so everyone gets their data when they need it.',
          tech: 'Email Automation, SQL Server, SSRS, Power BI, BIRT'
        }
      ]
    },
    {
      name: 'ETL Workflows',
      icon: '🔄',
      projects: [
        {
          title: '📥 ADF Monthly Data Submission',
          description: 'Set up an automated pipeline using SSIS that handles monthly data submissions to NHB. Used SQL jobs to make sure everything runs on time and meets compliance requirements without any manual intervention.',
          tech: 'SQL Server, Job Scheduler'
        },
        {
          title: '📌 IHL Monthly NHB Reporting',
          description: 'Streamlined the monthly reporting process for IHL data. Created SQL procedures with built-in validations to ensure the data meets NHB standards before submission, saving hours of manual checking.',
          tech: 'MS SQL, Stored Procedures'
        }
      ]
    }
  ];

  selectedCategoryIndex = 0;

  setCategory(index: number) {
    this.selectedCategoryIndex = index;
  }

  get selectedCategory() {
    return this.projectCategories[this.selectedCategoryIndex];
  }
}
