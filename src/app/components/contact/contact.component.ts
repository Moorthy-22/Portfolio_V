import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Add this import for EmailJS
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  sent = false;

  // TODO: Replace these with your actual EmailJS credentials
  EMAILJS_SERVICE_ID = 'service_ek7sure';
  EMAILJS_TEMPLATE_ID = 'template_ac8hovo';
  EMAILJS_USER_ID = 'AJuWDj7FLsV45V_pP';

  sendMessage() {
    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message
    };

    emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      templateParams,
      this.EMAILJS_USER_ID
    ).then(
      () => {
        this.sent = true;
        setTimeout(() => {
          this.sent = false;
          this.name = '';
          this.email = '';
          this.message = '';
        }, 3000);
      },
      () => {
        alert('Failed to send message. Please try again later.');
      }
    );
  }
}
