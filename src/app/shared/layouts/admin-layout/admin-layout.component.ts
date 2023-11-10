import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


type LayoutRoute = {
  name: string,
  route: string
}

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent {
  public routes: LayoutRoute[] = [
    {
      name: "Teams",
      route: "/admin/team/list"
    },
    {
      name: "Tasks",
      route: "/admin/task/list"
    },
    {
      name: "Tags",
      route: "/admin/tag/list"
    },
    {
      name: "Users",
      route: "/admin/user/list"
    },
  ]
}
