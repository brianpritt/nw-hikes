  import {Pipe, PipeTransform} from '@angular/core';
  import {MemberService} from './member.service';
  import {Comments} from './comments.model';

  @Pipe({
    name : "comment",
    pure: false
  })
  export class CommentPipe implements PipeTransform{
    transform(input: Comments[], routeId){
      var output: Comments[]=[];
      if(routeId){
        for(var i = 0; i<input.length; i++){
          console.log(input[i].hikeId);
          // console.log(routeId);
          if(input[i].hikeId == routeId){
            output.push(input[i]);
            console.log("push");
          }

        }
        return output;
      }else{
        console.log("nothing");
        return input;
      }
      }

      }
