import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { HomeComponent } from "../src/components/home/home.component";
import { CommonModule } from '@angular/common';

describe("Component: HomeComponent", () => {
    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [HomeComponent],
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(HomeComponent);
            component = fixture.componentInstance;
        });
    }));
    it("should be defined ", async(() => {
        expect(component).toBeTruthy();
    }))
});