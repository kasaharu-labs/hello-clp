import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

interface Customer {
  CustomerId: number;
  CompanyName: string;
  ContactName: string;
}

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
  customers: Customer[] = [];

  async ngOnInit(): Promise<void> {
    const res = await firstValueFrom(
      this.http.get<Customer[]>(`${environment.apiOrigin}/api/customers`)
    );
    console.log(res);
    this.customers = res;
  }
}
