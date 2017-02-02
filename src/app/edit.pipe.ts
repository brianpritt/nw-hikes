import {Pipe, PipeTransform} from '@angular/core';
import {MemberService} from './member.service';
import {Comments} from './comments.model';
import {Trail} from './trail.model';

@Pipe({
  name : "edit",
  pure: false
})
export class EditPipe implements PipeTransform{
  transform(input: Trail[], toSend){
    var output: Trail[]=[];

      return toSend;
    }
    }
