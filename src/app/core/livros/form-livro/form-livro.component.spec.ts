import { FormLivroComponent } from './form-livro.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';



describe('FormLivroComponent', () => {
  let component: FormLivroComponent;
  let fixture: ComponentFixture<FormLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
