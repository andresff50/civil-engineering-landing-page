import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css'
})
export class MainNavbarComponent {
  isMobileMenuOpen = false;
  selectedDropdown: string | null = null;

  // Lista de servicios para el dropdown
  services = [
    { id: 1, name: 'Construction' },
    { id: 2, name: 'House Renovation' },
    { id: 3, name: 'Architecture & Building' },
    { id: 4, name: 'Interior Design' },
    { id: 5, name: 'Building Engineering' },
    { id: 6, name: 'Preconstruction Planning' }
  ];

  // Lista de proyectos para el dropdown
  projects = [
    { id: 1, name: 'Limoges, France' },
    { id: 2, name: 'Shreveport, Bossier City' },
    { id: 3, name: 'The Nines, NY' },
    { id: 4, name: 'Twelve West, Portland' },
    { id: 5, name: 'Palm Bay, Florida' },
    { id: 6, name: 'Clean Water ,Memphis' }
  ];

  supportInfo = {
    title: "CUSTOM SUPPORT & SALE",
    text: "+7-495-1234567"
  };

  workingTimeInfo = {
    title: "WORKING TIME",
    text: "MON–SAT: 08:00–18:00"
  };
  
  buttonText = "REQUEST A QUOTE";

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Método para alternar el dropdown seleccionado
  toggleDropdown(menu: string) {
    this.selectedDropdown = this.selectedDropdown === menu ? null : menu;
  }

  closeDropdown() {
    this.selectedDropdown = null;
  }

}
