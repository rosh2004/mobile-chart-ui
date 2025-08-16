import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-duration-select',
  imports: [CommonModule],
  templateUrl: './duration-select.html',
  styleUrl: './duration-select.scss'
})
export class DurationSelect {
  @Input() selectedDuration: 'DAY' | 'WEEK' | 'MONTH' = 'WEEK';
}
