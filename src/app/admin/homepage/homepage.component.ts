import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() { }

  ngOnInit() {
    this.lottieConfig = {
      path: 'assets/animation-w250-h250.json',
      autoplay: false,
      loop: false
    };

  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    // this.anim.play();
    this.anim.playSegments([0, 15.5], true);
    // this.anim.addEventListener('DOMReady', function () {
      
    // });
    this.anim.addEventListener('complete', function () { console.log(1) });

  }

  pause() {
    this.anim.loop;
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
}
