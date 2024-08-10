import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ContactsComponent } from "./contacts.component";

describe("ContactsComponent", () => {
	let component: ContactsComponent;
	let fixture: ComponentFixture<ContactsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ContactsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ContactsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should have 3 contact cards", () => {
		const cardElements = fixture.debugElement.queryAll(By.css(".info-card"));
		expect(cardElements.length).toBe(3);
	});

	it("should display LinkedIn contact info correctly", () => {
		const linkedinCard = fixture.debugElement.queryAll(By.css(".info-card"))[0];
		const title = linkedinCard.query(By.css(".card-title")).nativeElement;
		const text = linkedinCard.query(By.css(".card-text")).nativeElement;
		const button = linkedinCard.query(By.css("a.btn")).nativeElement;

		expect(title.textContent).toContain("LinkedIn");
		expect(text.textContent).toContain(
			"Connect and message me for professional networking.",
		);
		expect(button.textContent).toContain("Visit LinkedIn");
		expect(button.getAttribute("href")).toBe(
			"https://www.linkedin.com/in/gabrielcampos07/",
		);
	});

	it("should display Email contact info correctly", () => {
		const emailCard = fixture.debugElement.queryAll(By.css(".info-card"))[1];
		const title = emailCard.query(By.css(".card-title")).nativeElement;
		const text = emailCard.query(By.css(".card-text")).nativeElement;
		const button = emailCard.query(By.css("a.btn")).nativeElement;

		expect(title.textContent).toContain("Email");
		expect(text.textContent).toContain(
			"Send your questions, suggestions, or comments.",
		);
		expect(button.textContent).toContain("Send Email");
		expect(button.getAttribute("href")).toBe(
			"mailto:gabriel.c.depaula@gmail.com",
		);
	});

	it("should display GitHub contact info correctly", () => {
		const githubCard = fixture.debugElement.queryAll(By.css(".info-card"))[2];
		const title = githubCard.query(By.css(".card-title")).nativeElement;
		const text = githubCard.query(By.css(".card-text")).nativeElement;
		const button = githubCard.query(By.css("a.btn")).nativeElement;

		expect(title.textContent).toContain("GitHub");
		expect(text.textContent).toContain(
			"Explore my projects and code repositories. Follow me please!",
		);
		expect(button.textContent).toContain("Visit GitHub");
		expect(button.getAttribute("href")).toBe(
			"https://github.com/GabrielCampos07",
		);
	});
});
