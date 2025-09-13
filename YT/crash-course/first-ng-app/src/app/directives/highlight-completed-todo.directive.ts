import { Directive, ElementRef, signal, input, inject, effect } from '@angular/core';
import { Todo } from '../model/todo.type';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {

  isCompleted = input(false);
  el = inject(ElementRef);

  stylesEffect = effect(() => {
    // console.log("Directive:", this.isCompleted());

    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  });


}
