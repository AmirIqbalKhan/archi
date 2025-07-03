import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: ""
    }
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "MESSAGE SENT",
        description: "YOUR MESSAGE HAS BEEN SUBMITTED SUCCESSFULLY",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "SUBMISSION FAILED",
        description: error.message || "FAILED TO SUBMIT CONTACT FORM",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contact" className="min-h-screen bg-[var(--modern-background)]">
      <div className="max-w-7xl mx-auto p-12">
        <div className="text-center mb-12">
          <h2 className="inter-font text-4xl font-light text-[var(--modern-dark)] mb-4">Contact</h2>
          <div className="w-16 h-1 bg-[var(--modern-accent)] mx-auto mb-6"></div>
          <p className="inter-font text-[var(--modern-grey)] max-w-2xl mx-auto">
            Let's discuss your architectural project and bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="modern-card p-8">
            <h3 className="inter-font text-xl font-semibold text-[var(--modern-dark)] mb-6">Get in Touch</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block inter-font text-sm font-medium text-[var(--modern-dark)] mb-2">Name</label>
                <input 
                  type="text"
                  {...form.register("name")}
                  className="form-input"
                  placeholder="Your name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label className="block inter-font text-sm font-medium text-[var(--modern-dark)] mb-2">Email</label>
                <input 
                  type="email"
                  {...form.register("email")}
                  className="form-input"
                  placeholder="your.email@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block inter-font text-sm font-medium text-[var(--modern-dark)] mb-2">Project Type</label>
                <select 
                  {...form.register("projectType")}
                  className="form-select"
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="institutional">Institutional</option>
                  <option value="industrial">Industrial</option>
                </select>
                {form.formState.errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.projectType.message}</p>
                )}
              </div>
              
              <div>
                <label className="block inter-font text-sm font-medium text-[var(--modern-dark)] mb-2">Message</label>
                <textarea 
                  rows={6}
                  {...form.register("message")}
                  className="form-textarea"
                  placeholder="Tell us about your project..."
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="modern-button px-6 py-3 inter-font text-sm font-medium w-full"
                disabled={submitContactMutation.isPending}
              >
                {submitContactMutation.isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="inter-font text-xl font-semibold text-[var(--modern-dark)] mb-6">Studio Details</h3>
            
            <div className="space-y-4">
              <div className="modern-card p-6">
                <h4 className="inter-font text-sm font-semibold text-[var(--modern-dark)] mb-2">Address</h4>
                <p className="inter-font text-sm text-[var(--modern-grey)]">
                  123 Concrete Street<br />
                  Design District<br />
                  London EC1A 1BB
                </p>
              </div>
              
              <div className="modern-card p-6">
                <h4 className="inter-font text-sm font-semibold text-[var(--modern-dark)] mb-2">Phone</h4>
                <p className="inter-font text-sm text-[var(--modern-grey)]">+44 20 7946 0958</p>
              </div>
              
              <div className="modern-card p-6">
                <h4 className="inter-font text-sm font-semibold text-[var(--modern-dark)] mb-2">Email</h4>
                <p className="inter-font text-sm text-[var(--modern-grey)]">marcus@concretestudio.com</p>
              </div>
              
              <div className="bg-[var(--modern-accent)] bg-opacity-10 border border-[var(--modern-accent)] border-opacity-20 rounded-lg p-6">
                <h4 className="inter-font text-sm font-semibold text-[var(--modern-dark)] mb-4">Studio Hours</h4>
                <div className="space-y-2 inter-font text-sm text-[var(--modern-grey)]">
                  <p>Monday - Friday: 09:00 - 18:00</p>
                  <p>Saturday: 10:00 - 14:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
