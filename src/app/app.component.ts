import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly http = inject(HttpClient);
  title = 'hello-clp';
  message = '';

  async ngOnInit(): Promise<void> {
    const res = await firstValueFrom(
      this.http.get<{ message: string }>(environment.apiOrigin)
    );
    console.log(res);
    this.message = res.message;
  }
}
