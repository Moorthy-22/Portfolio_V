import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardItem = {
  title: string;
  icon: string;
  description: string;
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  readonly cardItems: CardItem[] = [
    {
      title: 'Data Music Director',
      icon: '🎼',
      description: 'I write SQL like music — composing stored procedures, views, and triggers that work in harmony to deliver fast and reliable data performance.'
    },
    {
      title: 'Visual Art Director',
      icon: '🎨',
      description: 'I design clean, interactive dashboards that tell compelling data stories — using Power BI and SSRS to turn numbers into insights.'
    },
    {
      title: 'Workflow Engineer',
      icon: '🛠️',
      description: 'I streamline processes by automating repetitive tasks, optimizing backend workflows, and improving scheduling for smoother operations.'
    },
    {
      title: 'Innovation Producer',
      icon: '🚀',
      description: 'I develop creative solutions that connect people, data, and results — transforming ideas into impactful, real-world applications.'
    },
    {
      title: 'Data Structuring & Migration',
      icon: '🧬',
      description: 'I handle complex data migrations with precision — transforming, aligning, and validating datasets without loss or inconsistency.'
    },
    {
      title: 'ETL Pipeline Builder',
      icon: '🔄',
      description: 'I build reliable ETL pipelines using SSIS and SQL Jobs — automating complex data transformations and regulatory submissions.'
    }
  ];
}
