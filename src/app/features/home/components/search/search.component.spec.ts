import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ SearchComponent ]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should emit values', async (done) => {
    const component = fixture.debugElement;
    fixture.componentInstance.searched.subscribe((value) => {
      expect(value).toBe('Mu');
      done();
    });
    const input = component.nativeElement.querySelector('input');
    input.value = 'Mu';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  });
});
