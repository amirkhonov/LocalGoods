import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IFarm } from "../../../../shared/interfaces/farm.interface";
import { Router } from "@angular/router";
import { FarmsService } from "../../../../shared/services/farms.service";

@Component({
  selector: 'app-farmer-farm',
  templateUrl: './farmer-farm.component.html',
  styleUrls: ['./farmer-farm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerFarmComponent implements OnInit {
  @Input() farm!: IFarm;
  @Input() isFirstItem!: boolean;

  constructor(
    private router: Router,
    private farmerFarmsService: FarmsService
  ) {}

  ngOnInit(): void {
    if (this.isFirstItem) {
      this.router.navigateByUrl('/farmer/' + this.farm.id);
    }
  }

  onDeleteFarm() {
    this.farmerFarmsService.deleteFarm(this.farm.id);
  }

}
