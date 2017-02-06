import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  ngOnInit(): void {
  }

  stringInterpolation = 'This is string interpolatiopn!';
  numberInterpolation = '2';

  onTest()  {
    return true;
  }

  onClicked(value: string){
    alert(value);
  }

}
