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
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-light text-[var(--modern-dark)] mb-6">Let's create something out of this world together</h2>
          <p className="text-lg text-[var(--modern-grey)] max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Contact us for expert architectural design and development solutions. Let's discuss how we can help grow your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-[var(--modern-border)]">
              <h3 className="text-2xl font-semibold text-[var(--modern-dark)] mb-8">Get in Touch</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--modern-dark)] mb-3">Name</label>
                  <input 
                    type="text"
                    {...form.register("name")}
                    className="w-full px-4 py-3 border border-[var(--modern-border)] rounded-lg focus:ring-2 focus:ring-[var(--modern-accent)] focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-2">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--modern-dark)] mb-3">Email</label>
                  <input 
                    type="email"
                    {...form.register("email")}
                    className="w-full px-4 py-3 border border-[var(--modern-border)] rounded-lg focus:ring-2 focus:ring-[var(--modern-accent)] focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-2">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--modern-dark)] mb-3">Project Type</label>
                  <select 
                    {...form.register("projectType")}
                    className="w-full px-4 py-3 border border-[var(--modern-border)] rounded-lg focus:ring-2 focus:ring-[var(--modern-accent)] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="institutional">Institutional</option>
                    <option value="industrial">Industrial</option>
                  </select>
                  {form.formState.errors.projectType && (
                    <p className="text-red-500 text-sm mt-2">{form.formState.errors.projectType.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--modern-dark)] mb-3">Message</label>
                  <textarea 
                    rows={6}
                    {...form.register("message")}
                    className="w-full px-4 py-3 border border-[var(--modern-border)] rounded-lg focus:ring-2 focus:ring-[var(--modern-accent)] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project vision..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm mt-2">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[var(--modern-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--modern-gradient-2)] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={submitContactMutation.isPending}
                >
                  {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--modern-accent)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="Marcus Concrete"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p className="text-sm text-[var(--modern-grey)] mb-2">Hi, I'm <strong>Marcus - Principal Architect</strong>.</p>
              <p className="text-xs text-[var(--modern-grey)]">Schedule a call with me to discuss in detail about your project and how we can help your vision come to life.</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-[var(--modern-border)] shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-[var(--modern-accent)] rounded-full"></div>
                  <h4 className="font-semibold text-[var(--modern-dark)]">Studio Address</h4>
                </div>
                <p className="text-sm text-[var(--modern-grey)] leading-relaxed">
                  123 Concrete Street<br />
                  Design District<br />
                  London EC1A 1BB, UK
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-[var(--modern-border)] shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-[var(--modern-accent)] rounded-full"></div>
                  <h4 className="font-semibold text-[var(--modern-dark)]">Contact</h4>
                </div>
                <div className="space-y-1 text-sm text-[var(--modern-grey)]">
                  <p>+44 20 7946 0958</p>
                  <p>marcus@concretestudio.com</p>
                </div>
              </div>
              
              <div className="bg-[var(--modern-accent-light)] rounded-xl p-6 border border-[var(--modern-accent)]/20">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-[var(--modern-accent)] rounded-full"></div>
                  <h4 className="font-semibold text-[var(--modern-dark)]">Studio Hours</h4>
                </div>
                <div className="space-y-1 text-sm text-[var(--modern-grey)]">
                  <p>Monday - Friday: 09:00 - 18:00</p>
                  <p>Saturday: 10:00 - 14:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex space-x-4 justify-center">
                <a href="#" className="text-[var(--modern-grey)] hover:text-[var(--modern-accent)] transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-[var(--modern-grey)] hover:text-[var(--modern-accent)] transition-colors duration-200">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.017 0H7.984C3.467 0 0 3.467 0 7.984v4.032C0 16.533 3.467 20 7.984 20h4.032C16.533 20 20 16.533 20 12.017V7.984C20 3.467 16.533 0 12.017 0zM18.169 12.017c0 3.4-2.752 6.152-6.152 6.152H7.984c-3.4 0-6.152-2.752-6.152-6.152V7.984c0-3.4 2.752-6.152 6.152-6.152h4.032c3.4 0 6.152 2.752 6.152 6.152v4.033z" clipRule="evenodd" />
                    <path d="M9.999 4.9c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zM15.3 3.7c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
