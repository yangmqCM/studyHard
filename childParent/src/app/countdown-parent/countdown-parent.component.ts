import { AfterViewInit,ViewChild } from '@angular/core';
import { Component }                from '@angular/core';
import { CountdownTimerComponent }  from '../countdown-timer/countdown-timer.component'; 

@Component({
  selector: 'app-countdown-parent',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <app-countdown-timer #timer></app-countdown-timer>
  ` 
})
 
export class CountdownParentComponent implements AfterViewInit{
	
	@ViewChild(CountdownTimerComponent)
	private timerComponent: CountdownTimerComponent;
	
	seconds(){ return 0;}
	/*
	 ngAfterViewInit() 生命周期钩子是非常重要的一步。被注入的计时器组件只有在 Angular 显示了父组件视图之后才能访问，所以它先把秒数显示为 0.

		然后 Angular 会调用 ngAfterViewInit 生命周期钩子，但这时候再更新父组件视图的倒计时就已经太晚了。Angular 的单向数据流规则会阻止在同一个周期内更新父组件视图。应用在显示秒数之前会被迫再等一轮。

		使用 setTimeout() 来等下一轮，然后改写 seconds() 方法，这样它接下来就会从注入的这个计时器组件里获取秒数的值。
	 */
	ngAfterViewInit(){
		setTimeout(() => this.seconds = () => this.timerComponent.seconds,0)
	}
	
	start(){ this.timerComponent.start(); }
	stop(){ this.timerComponent.stop(); }
}
