import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  activeTab: string = 'comedor';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
