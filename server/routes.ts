import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  // Get single project
  app.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid project ID" });
      }
      
      const project = await storage.getProject(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email using Resend API
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: 'onboarding@resend.dev', // Using Resend's default from address for testing
          to: 'amiriqbalkhan001@gmail.com',
          subject: `New Contact Form Submission - ${validatedData.projectType}`,
          html: `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
              <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 40px 20px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">New Contact Inquiry</h1>
                <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Marcus Concrete Architecture Studio</p>
              </div>
              
              <div style="padding: 40px 20px;">
                <div style="background: #f8fafc; padding: 30px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #3b82f6;">
                  <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px;">Contact Information</h2>
                  <div style="margin-bottom: 15px;">
                    <strong style="color: #374151;">Name:</strong> 
                    <span style="color: #1f2937;">${validatedData.name}</span>
                  </div>
                  <div style="margin-bottom: 15px;">
                    <strong style="color: #374151;">Email:</strong> 
                    <span style="color: #3b82f6;">${validatedData.email}</span>
                  </div>
                  <div>
                    <strong style="color: #374151;">Project Type:</strong> 
                    <span style="background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; text-transform: uppercase; font-weight: 600;">${validatedData.projectType}</span>
                  </div>
                </div>
                
                <div style="background: #f1f5f9; padding: 30px; border-radius: 12px; border-left: 4px solid #8b5cf6;">
                  <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Project Details</h3>
                  <p style="line-height: 1.7; color: #374151; margin: 0;">${validatedData.message}</p>
                </div>
                
                <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%); border-radius: 12px; text-align: center;">
                  <p style="margin: 0; color: #1e40af; font-size: 14px;">
                    <strong>Submitted on:</strong> ${new Date().toLocaleString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
              
              <div style="background: #1f2937; padding: 20px; text-align: center;">
                <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 12px;">
                  This email was sent from your Marcus Concrete Architecture Studio website contact form.
                </p>
              </div>
            </div>
          `
        });
        
        console.log(`Email sent successfully for contact ID: ${contact.id}`);
      } catch (emailError) {
        console.error(`Email sending failed: ${emailError}`);
        // Don't fail the request if email fails, just log it
      }
      
      res.status(201).json({ message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      console.error('Contact form error:', error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
