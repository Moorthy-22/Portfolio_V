import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentTab: 'about' | 'skills' | 'projects' | 'contact' = 'about';

  selectTab(tab: 'about' | 'skills' | 'projects' | 'contact') {
    this.currentTab = tab;
  }

  ngOnInit() {
    // Block right-click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Block F12, Ctrl+Shift+I/J/C/U, Ctrl+U
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === 'U')
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    // Detect DevTools open (basic)
    let devtoolsOpen = false;
    const threshold = 160;
    setInterval(() => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        if (!devtoolsOpen) {
          devtoolsOpen = true;
          document.body.innerHTML = '';
        }
      } else {
        devtoolsOpen = false;
      }
    }, 500);
  }
}
