import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Comment } from '../../../core/models/Comment.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Person } from '../../../core/models/Person.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
  animations: [
    trigger('listItem', [
      state('default', style({
        'transform' : 'scale(1)',
        'background-color' : 'white',
        'z-index' : 1
      })),
      state('active', style({
        'transform' : 'scale(1.05)',
        'background-color': 'rgb(201, 157,242)',
        'z-index' : 2
      })),
      // transition('default <=> active')
      transition('default => active', [
        animate('100ms ease-in-out')
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),
      // depuis le vide vers n'import quel autre état (ajout de quelque chose)
      transition('void => *', [
        style({
          'transform': 'translateX(-100%)',
          'opacity' : 0,
          'background-color' : 'rgb(201, 157,242)',
        }),
        animate('250ms ease-out', style({
          'transform': 'translateX(0)',
          'opacity' : 1,
          'background-color' : 'white',
        }))
      ])
    ])
  ]
})
export class CommentsComponent {
  @Input() comments!: Comment[]; // on reçoit une propriété depuis un attribut html du parent
  @Output() newComment = new EventEmitter<string>();

  commentCtrl!: FormControl;
  // optionnel exo pipe
  persons: Person[] = [];
  person: Person = new Person();
  // listItemAnimationState: 'default' |'active' = 'default';
  animationStates : { [key: number]: 'default' | 'active'} = {};

  constructor(private formBuilder: FormBuilder) {
    for (let index in this.comments) {
      this.animationStates[index] = 'default';
  }
  }

  ngOnInit() {
    this.commentCtrl = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10),
    ]);

    this.persons.push({
      firstName: 'joe',
      lastName: 'dalton',
    });
    this.persons.push({
      firstName: 'john',
      lastName: 'wick',
    });
    console.log(this.persons);
  }

  onLeaveComment() {
    if (this.commentCtrl.invalid) {
      return;
    }
    const newComment = new Comment();
    const maxId = Math.max(...this.comments.map(comment => comment.id));
    
    newComment.comment = this.commentCtrl.value;
    const date = new Date();
    
    newComment.createdDate = date.toUTCString() ;
    newComment.id = maxId+1;
    this.comments.unshift(newComment);
        
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
    
    console.log(newComment);
  }

  onMouseIn(index: number) {
    this.animationStates[index] = 'active';
  }

  onMouseOut(index : number) {
    this.animationStates[index] = 'default';
  }
}
