import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicionar FormsModule para o [(ngModel)]
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent {
  titulo: string = "Gerenciador de Tarefas"; // Declaração correta da variável
  novaTarefa: string = "";
  exibirLista: boolean = true;
  tarefas: { nome: string, concluida: boolean }[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = "";
    }
  }

  concluirTarefa(index: number) {
    this.tarefas[index].concluida = true;
  }

  toggleLista() {
    this.exibirLista = !this.exibirLista;
  }
}
