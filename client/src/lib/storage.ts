import type { Project, Contact, InsertProject, InsertContact } from "../../../../shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  createContact(contact: InsertContact): Promise<Contact>;
}

class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private contacts: Map<number, Contact>;
  private currentProjectId: number;
  private currentContactId: number;

  constructor() {
    this.projects = new Map();
    this.contacts = new Map();
    this.currentProjectId = 1;
    this.currentContactId = 1;
    this.initializeProjects();
  }

  private initializeProjects() {
    const projectsData: Omit<Project, 'id'>[] = [
      {
        title: "CONCRETE TOWER 01",
        category: "RESIDENTIAL COMPLEX",
        type: "RESIDENTIAL",
        location: "EAST LONDON",
        year: 2023,
        area: "15,000 SQM",
        description: "A RESIDENTIAL TOWER THAT EMBRACES RAW CONCRETE AS ITS PRIMARY MATERIAL. THE DESIGN FEATURES GEOMETRIC BALCONIES AND UNCOMPROMISING ANGULAR FORMS THAT CREATE DRAMATIC LIGHT AND SHADOW PATTERNS THROUGHOUT THE DAY.",
        imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200"
      },
      {
        title: "BRUTALIST MUSEUM",
        category: "CULTURAL INSTITUTION",
        type: "INSTITUTIONAL",
        location: "CENTRAL LONDON",
        year: 2022,
        area: "8,500 SQM",
        description: "A CULTURAL INSTITUTION THAT CHALLENGES CONVENTIONAL MUSEUM DESIGN. MASSIVE CONCRETE WALLS CREATE DRAMATIC INTERIOR SPACES WHILE STRATEGIC OPENINGS FRAME SPECIFIC VIEWS AND CONTROL NATURAL LIGHT.",
        imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200"
      },
      {
        title: "CONCRETE MATRIX",
        category: "OFFICE COMPLEX",
        type: "COMMERCIAL",
        location: "CANARY WHARF",
        year: 2021,
        area: "25,000 SQM",
        description: "AN OFFICE COMPLEX THAT REDEFINES COMMERCIAL ARCHITECTURE THROUGH BOLD GEOMETRIC FORMS. THE BUILDING FEATURES MODULAR CONCRETE ELEMENTS THAT CREATE A DYNAMIC FACADE AND FLEXIBLE INTERIOR SPACES.",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200"
      },
      {
        title: "RAW HOUSING",
        category: "SOCIAL HOUSING",
        type: "RESIDENTIAL",
        location: "SOUTH LONDON",
        year: 2020,
        area: "12,000 SQM",
        description: "A SOCIAL HOUSING PROJECT THAT DEMONSTRATES HOW BRUTALIST PRINCIPLES CAN CREATE DIGNIFIED LIVING SPACES. THE DESIGN EMPHASIZES COMMUNITY INTERACTION THROUGH SHARED COURTYARDS AND TERRACED LEVELS.",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200"
      },
      {
        title: "INDUSTRIAL GRID",
        category: "WAREHOUSE DESIGN",
        type: "INDUSTRIAL",
        location: "EAST LONDON",
        year: 2019,
        area: "30,000 SQM",
        description: "A WAREHOUSE COMPLEX THAT TRANSFORMS INDUSTRIAL ARCHITECTURE INTO AN ARCHITECTURAL STATEMENT. THE GRID-LIKE STRUCTURE OPTIMIZES FUNCTION WHILE CREATING DRAMATIC VISUAL IMPACT.",
        imageUrl: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200"
      },
      {
        title: "MONOLITH HALL",
        category: "CONFERENCE CENTER",
        type: "INSTITUTIONAL",
        location: "WEST LONDON",
        year: 2018,
        area: "18,000 SQM",
        description: "A CONFERENCE CENTER DESIGNED AS A MONOLITHIC CONCRETE STRUCTURE. THE BUILDING'S SINGULAR FORM HOUSES MULTIPLE AUDITORIUMS AND MEETING SPACES WHILE MAINTAINING ARCHITECTURAL COHESION.",
        imageUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200"
      }
    ];

    projectsData.forEach(projectData => {
      const project: Project = {
        id: this.currentProjectId++,
        ...projectData
      };
      this.projects.set(project.id, project);
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage(); 