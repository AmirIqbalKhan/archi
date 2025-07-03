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
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-light text-white mb-6">Let's Create Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into extraordinary architecture? Let's discuss your project and bring your dreams to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-[var(--modern-accent)] to-[var(--modern-gradient-2)] rounded-full mr-4"></span>
              Get in Touch
            </h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-3">Name</label>
                <input 
                  type="text"
                  {...form.register("name")}
                  className="form-input bg-white bg-opacity-5 border border-white border-opacity-20 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-3">Email</label>
                <input 
                  type="email"
                  {...form.register("email")}
                  className="form-input bg-white bg-opacity-5 border border-white border-opacity-20 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-3">Project Type</label>
                <select 
                  {...form.register("projectType")}
                  className="form-select bg-white bg-opacity-5 border border-white border-opacity-20 text-white"
                >
                  <option value="" className="bg-gray-900 text-white">Select project type</option>
                  <option value="residential" className="bg-gray-900 text-white">Residential</option>
                  <option value="commercial" className="bg-gray-900 text-white">Commercial</option>
                  <option value="institutional" className="bg-gray-900 text-white">Institutional</option>
                  <option value="industrial" className="bg-gray-900 text-white">Industrial</option>
                </select>
                {form.formState.errors.projectType && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.projectType.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-3">Message</label>
                <textarea 
                  rows={6}
                  {...form.register("message")}
                  className="form-textarea bg-white bg-opacity-5 border border-white border-opacity-20 text-white placeholder-gray-400"
                  placeholder="Tell us about your project vision..."
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={submitContactMutation.isPending}
              >
                {submitContactMutation.isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-[var(--modern-accent)] to-[var(--modern-gradient-2)] rounded-full mr-4"></span>
                Studio Information
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Studio Address</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      123 Concrete Street<br />
                      Design District<br />
                      London EC1A 1BB, UK
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Phone</h4>
                    <p className="text-gray-300 text-sm">+44 20 7946 0958</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-gray-300 text-sm">marcus@concretestudio.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[var(--modern-accent)] to-[var(--modern-gradient-2)] bg-opacity-20 border border-[var(--modern-accent)] border-opacity-30 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Studio Hours</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>Monday - Friday: 09:00 - 18:00</p>
                      <p>Saturday: 10:00 - 14:00</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
