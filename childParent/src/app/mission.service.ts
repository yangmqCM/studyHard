import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class MissionService {
	private missionAnnouncedSource = new Subject<string>();
	private missionConfiremedSource = new Subject<string>();
	
	missionAnnounced$ = this.missionAnnouncedSource.asObservable();
	missionConfirmed$ = this.missionConfiremedSource.asObservable();
	
	announceMission(mission: string){
		this.missionAnnouncedSource.next(mission);
	}
	
	confirmMission(astronaut: string){
		this.missionConfiremedSource.next(astronaut);
	}
  
}
